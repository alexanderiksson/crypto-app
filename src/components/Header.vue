<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="py-6">
        <div class="content flex">
            <div>sadas</div>
            <nav class="ml-auto">
                <ul class="flex gap-12">
                    <li>
                        <RouterLink to="/">Market</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
