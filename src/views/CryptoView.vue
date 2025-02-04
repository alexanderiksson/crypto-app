<script setup>
    import { useFetch } from '../composables/useFetch';
    import { useRoute } from 'vue-router';
    import Chart from '../components/Chart.vue';

    const route = useRoute();

    const { data, error, loading } = useFetch(
        `https://api.coincap.io/v2/assets/${route.params.id}`
    );
</script>

<template>
    <div class="content">
        <h1 class="text-4xl font-semibold mb-8 first-letter:capitalize">
            {{ route.params.id }}
        </h1>

        <Chart :crypto="route.params.id" />
    </div>
</template>
