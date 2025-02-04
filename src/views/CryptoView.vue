<script setup>
    import { computed } from 'vue';
    import { useFetch } from '../composables/useFetch';
    import { useRoute } from 'vue-router';
    import Chart from '../components/Chart.vue';
    import { formatPrice } from '../utils/format';
    import Loader from '../components/Loader.vue';

    const route = useRoute();

    const { data, error, loading } = useFetch(
        `https://api.coincap.io/v2/assets/${route.params.id}`
    );

    const cryptoData = computed(() =>
        data.value && data.value.data ? data.value.data : []
    );
</script>

<template>
    <div class="content">
        <template v-if="data">
            <h1 class="text-4xl font-semibold mb-8 first-letter:capitalize">
                {{ cryptoData.name }}
            </h1>

            <h2 class="text-xl font-medium">
                {{ formatPrice(cryptoData.priceUsd) }}
            </h2>

            <Chart :crypto="route.params.id" />
        </template>

        <template v-else-if="loading">
            <Loader />
        </template>

        <div v-else-if="error" class="flex justify-center items-center">
            <p>Something went wrong...</p>
        </div>
    </div>
</template>
