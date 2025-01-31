<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="py-6 mb-8">
        <div class="content flex">
            <RouterLink to="/">
                <img src="../assets/logo.png" alt="Logo" class="w-8" />
            </RouterLink>
            <nav class="ml-auto">
                <ul class="flex gap-12">
                    <li>
                        <RouterLink to="/">Market</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
