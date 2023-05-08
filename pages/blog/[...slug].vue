<script setup lang="ts">
// Get data from the current page with @nuxt/content

</script>

<template>
    <main class="container mx-auto prose">
        <!--Button to go back to /blog -->
        <ContentDoc>
            <template v-slot="{ doc }">
                <nuxt-link to="/blog"
                    class="text-gray-500 hover:text-gray-700 transition-colors delay-200 no-underline inline-flex items-center mb-4">
                    <Icon name="ic:round-arrow-back-ios" class="inline-block w-4 h-4" />
                    Retour
                </nuxt-link>
                <p class="text-gray-500 m-0 text-sm">{{ formatDate(doc.date, false) }}</p>
                <ContentRenderer :value="doc" />
            </template>
            <template #empty>
                <div class="justify-center py-24 sm:py-64">
                    <h1 class="mt-2 mb-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Article vide
                    </h1>
                    <p class="mt-4 text-base leading-7 text-gray-600">Désolé, l'article semble être vide, revenez plus tard, on sait jamais...</p>
                    <div class="mt-6">
                        <nuxt-link to="/blog" as="a"
                            class="text-sm font-semibold leading-7 text-blue-600 no-underline inline-flex items-center">
                            <Icon name="ic:round-arrow-back-ios" class="inline-block w-4 h-4 mr-2" />
                            Retour à la liste des articles
                        </nuxt-link>
                    </div>
                </div>
            </template>
            <template #not-found>
                <div class="justify-center py-24 sm:py-64">
                    <h1 class="mt-2 mb-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Article introuvable
                    </h1>
                    <p class="mt-4 text-base leading-7 text-gray-600">Désolé, l'article que vous cherchez semble ne pas
                        exister.</p>
                    <div class="mt-6">
                        <nuxt-link to="/blog" as="a"
                            class="text-sm font-semibold leading-7 text-blue-600 no-underline inline-flex items-center">
                            <Icon name="ic:round-arrow-back-ios" class="inline-block w-4 h-4 mr-2" />
                            Retour à la liste des articles
                        </nuxt-link>
                    </div>
                </div>
            </template>
        </ContentDoc>
</main></template>