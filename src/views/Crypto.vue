<script setup>
import { useFetch } from "../composables/useFetch";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Loader from "../components/Loader.vue";
import Chart from "../components/Chart.vue";
import { formatPrice } from "../utils/format";

const route = useRoute();
const { data, error, loading } = useFetch(
    `https://api.coincap.io/v2/assets/${route.params.id}/history?interval=m1`
);

const price = computed(() =>
    data.value && data.value.data ? data.value.data : []
);

const chartData = computed(() => ({
    labels: price.value.map((item) => new Date(item.time).toLocaleTimeString()),
    datasets: [
        {
            label: "Price (USD)",
            data: price.value.map((item) => item.priceUsd),
            borderColor: "#592dfa",
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
        },
    ],
}));

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 0,
    },
});
</script>

<template>
    <div class="content">
        <h1 class="text-4xl mb-8 first-letter:capitalize">
            {{ route.params.id }}
        </h1>

        <template v-if="loading">
            <Loader />
        </template>

        <p v-else-if="error">Something went wrong...</p>

        <Chart :chartData="chartData" :chartOptions="chartOptions" />
    </div>
</template>
