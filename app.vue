<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <nuxt-img src="/logo.png" alt="Logo" class="mx-auto h-24 mb-3 w-auto" />
      <p class="text-xl font-semibold text-indigo-600">Maxime Princelle</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">En cours de construction...</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Revenez bientôt pour découvrir la nouvelle version de mon portfolio !</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="https://maxime.princelle.org" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Aller à mon portfolio actuel</a>
        <a href="https://contact.princelle.org" class="text-sm font-semibold text-gray-900">Me contacter <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

// Set html & body classes with "h-full"
useHead(() => {
  return {
    lang: 'fr',
    htmlAttrs: {
      class: 'h-full'
    },
    bodyAttrs: {
      class: 'h-full'
    }
  }
})

</script>