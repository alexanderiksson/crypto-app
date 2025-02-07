<script setup>
    import { RouterLink } from 'vue-router';
    import DarkModeButton from './DarkModeButton.vue';
</script>

<template>
    <header class="py-6 mb-8">
        <div class="content flex">
            <RouterLink to="/" class="flex items-center">
                <img src="../assets/logo.png" alt="Logo" class="w-8" />
            </RouterLink>
            <nav class="ml-auto">
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
        </div>
    </header>
</template>
