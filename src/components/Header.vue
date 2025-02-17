<script setup>
    import { RouterLink } from 'vue-router';
    import DarkModeButton from './DarkModeButton.vue';
    import HamburgerButton from './HamburgerButton.vue';
    import CloseButton from './CloseButton.vue';
    import { ref } from 'vue';

    const menuOpen = ref(false);

    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
    };
</script>

<template>
    <header class="py-6 mb-8">
        <div class="content flex">
            <RouterLink to="/" class="flex items-center">
                <img src="../assets/logo.png" alt="Logo" class="w-8" />
            </RouterLink>
            <nav class="hidden md:block ml-auto">
                <ul class="flex gap-12 items-center">
                    <li>
                        <RouterLink to="/">Market</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                    <li>
                        <DarkModeButton />
                    </li>
                </ul>
            </nav>
            <template class="ml-auto block md:hidden">
                <HamburgerButton @hamburgerMenu="toggleMenu" />
            </template>
        </div>
    </header>

    <!-- Mobile Nav -->
    <div
        class="md:hidden fixed z-50 bg-background h-screen w-screen px-16 py-8 shadow-lg transition-all duration-300 ease-in-out"
        :style="{ right: menuOpen ? '0' : '-120%' }"
    >
        <CloseButton @hamburgerMenu="toggleMenu" />
        <nav class="h-full flex flex-col justify-center text-xl">
            <ul class="flex flex-col gap-6">
                <li>
                    <RouterLink @click="toggleMenu" to="/">Market</RouterLink>
                </li>
                <li>
                    <RouterLink @click="toggleMenu" to="/about"
                        >About</RouterLink
                    >
                </li>
                <li>
                    <RouterLink @click="toggleMenu" to="/contact"
                        >Contact</RouterLink
                    >
                </li>
                <li>
                    <DarkModeButton />
                </li>
            </ul>
        </nav>
    </div>
</template>
