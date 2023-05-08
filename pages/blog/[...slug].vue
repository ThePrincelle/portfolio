<script setup lang="ts">
// Get data from the current page with @nuxt/content

</script>

<template>
    <main class="container mx-auto prose">
        <!--Button to go back to /blog -->
        <nuxt-link to="/blog" class="text-gray-500 hover:text-gray-700 transition-colors delay-200 no-underline inline-flex items-center mb-4">
            <Icon name="ic:round-arrow-back-ios" class="inline-block w-4 h-4" />
            Retour
        </nuxt-link>
        <ContentDoc v-slot="{ doc }">
            <p class="text-gray-500 m-0 text-sm">{{ formatDate(doc.date, false) }}</p>
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </main>
</template>