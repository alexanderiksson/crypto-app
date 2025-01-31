<script setup>
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const props = defineProps({
    priceHistory: Object,
    chartOptions: Object,
});
</script>

<template>
    <LineChart :chartData="chartData" :options="chartOptions" />
</template>
