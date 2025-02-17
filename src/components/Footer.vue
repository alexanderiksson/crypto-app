<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="bg-secondaryBackground py-2 mt-24 text-center">
        <div class="content">
            <nav class="my-16">
                <ul class="flex justify-center gap-10">
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
            <p class="text-xs text-neutral-400">Copyright &copy; 2025</p>
        </div>
    </footer>
</template>
