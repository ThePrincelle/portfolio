<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface BlogPostParsedContent extends MarkdownParsedContent {
    _path: string,
    date: string,
    title: string,
    tags: string[] | null,
    published: boolean
};

const filterTag = ref<string | null>(null)

const { data, refresh, pending, error } = await useAsyncData('blog', () => queryContent<BlogPostParsedContent>('/blog').where({
    // @ts-ignore line below is valid JS
    date: { $ne: null },
    published: true,
    // if filterTag is not null, check if tags contains filterTag
    // Ignore type error, it's a bug in the types
    // @ts-ignore line below is valid JS
    tags: filterTag.value ? { $contains: filterTag.value } : { $ne: null }
}).sort({ date: -1 }).find());

function filterBy(tag: string | null) {
    filterTag.value = tag
    refresh()
}
</script>

<template>
    <section class="container mx-auto prose">
        <h1>Blog</h1>
        <p v-if="filterTag">Résultats pour : #{{ filterTag }} <button @click="filterBy(null)"><Icon name="mdi:close"></Icon></button></p>
        <ul v-if="!pending && !error">
            <li v-for="post in data" :key="post._id">
                <nuxt-link :to="post._path" class="no-underline">
                    <div class="m-0">
                        <span class="underline underline-offset-2">{{ post.title }}</span>
                        <p class="m-0 no-underline text-xs text-gray-500">{{ formatDate(post.date) }}</p>
                    </div>
                </nuxt-link>
                <span v-for="tag in post.tags" :key="tag" class="inline-block bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1 mr-2 hover:text-yellow-500" @click="filterBy(tag)">#{{ tag }}</span>
            </li>
        </ul>
        <div v-else-if="pending">
            <Spinner />
        </div>
        <div v-else-if="error">
            <p>Une erreur est survenue</p>
            <!-- Button to retry -->
            <button @click="refresh"><Icon name="mdi:refresh"></Icon> Réessayer</button>
        </div>
    </section>
</template>