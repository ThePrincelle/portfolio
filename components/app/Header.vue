<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Maxime Princelle</span>
                <img class="h-8 w-auto" src="~/assets/img/logo.png" alt="Logo Maxime Princelle" />
            </NuxtLink>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Ouvrir le menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-6">
                <NuxtLink v-for="item in navigation" v-show="item.showDesktop" :key="item.name" :to="item.to"
                    class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer not:active:border-transparent border-b-2 transition-all duration-150" activeClass="text-indigo-900 border-indigo-500">{{ item.name }}</NuxtLink>
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Maxime Princelle</span>
                        <img class="h-8 w-auto" src="~/assets/img/logo.png" alt="Logo Maxime Princelle" />
                    </NuxtLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Fermer le menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <NuxtLink v-for="item in navigation" v-show="item.showMobile" :key="item.name" :to="item.to"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 border-2 cursor-pointer transition-all duration-150"
                                activeClass="text-indigo-900 border-indigo-500">{{
                                    item.name }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

type Navigation = {
    name: string
    to: string
    showDesktop: boolean,
    showMobile: boolean,
    icon?: Component
}

const navigation: Navigation[] = [
    { name: 'Accueil', to: '/', showDesktop: false, showMobile: true },
    { name: 'A propos', to: '/about', showDesktop: true, showMobile: true },
    { name: 'Expériences', to: '/experiences', showDesktop: true, showMobile: true },
    { name: 'Compétences', to: '/skills', showDesktop: true, showMobile: true },
    { name: 'Formations', to: '/studies', showDesktop: true, showMobile: true },
    { name: 'Projets', to: '/projects', showDesktop: true, showMobile: true },
    { name: 'Blog', to: '/blog', showDesktop: true, showMobile: true },
    { name: 'Contact', to: '/contact', showDesktop: true, showMobile: true },
]

const mobileMenuOpen = ref(false)
</script>