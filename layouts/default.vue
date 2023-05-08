<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">

// Set headers (title, meta, etc.)
useHead({
    title: 'Maxime Princelle',
    meta: [
        { name: 'description', content: 'My app description' },
        { name: 'keywords', content: 'my, app, keywords' },
    ],
    htmlAttrs: {
        lang: 'fr',
    },
})

</script>