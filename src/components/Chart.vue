<script setup>
    import { LineChart } from 'vue-chart-3';
    import { Chart, registerables } from 'chart.js';
    import Loader from './Loader.vue';
    import { useFetch } from '../composables/useFetch';
    import { computed, ref } from 'vue';

    Chart.register(...registerables);

    const props = defineProps({
        crypto: String
    });

    const { data, error, loading } = useFetch(
        `https://api.coincap.io/v2/assets/${props.crypto}/history?interval=m1`
    );

    const price = computed(() =>
        data.value && data.value.data ? data.value.data : []
    );

    const chartData = computed(() => ({
        labels: price.value.map((item) =>
            new Date(item.time).toLocaleTimeString()
        ),
        datasets: [
            {
                label: 'Price (USD)',
                data: price.value.map((item) => item.priceUsd),
                borderColor: '#592dfa',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0
            }
        ]
    }));

    const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        }
    });
</script>

<template>
    <template v-if="loading">
        <Loader />
    </template>

    <p v-else-if="error">Something went wrong...</p>

    <template v-else>
        <LineChart :chartData="chartData" :options="chartOptions" />
    </template>
</template>
