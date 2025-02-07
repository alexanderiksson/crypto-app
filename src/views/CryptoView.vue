<script setup>
    import { computed } from 'vue';
    import { useFetch } from '../composables/useFetch';
    import { useRoute } from 'vue-router';
    import Chart from '../components/Chart.vue';
    import { formatPrice, formatPercent } from '../utils/format';
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
            <h1
                class="text-3xl md:text-5xl font-semibold mb-8 first-letter:capitalize"
            >
                {{ cryptoData.name }}
                <span class="text-neutral-600"
                    >&#40;{{ cryptoData.symbol }}&#41;</span
                >
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                <div
                    class="lg:col-span-2 p-4 lg:p-8 shadow-lg border-secondaryBackground border rounded-lg"
                >
                    <Chart :crypto="route.params.id" />
                </div>
                <div class="flex flex-col gap-4 lg:gap-8">
                    <div
                        class="text-xl font-semibold p-4 lg:p-8 shadow-lg border-secondaryBackground border rounded-lg flex flex-col gap-12"
                    >
                        <div class="flex flex-col items-center gap-2">
                            <p
                                :class="
                                    cryptoData.changePercent24Hr > 0
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                "
                            >
                                {{
                                    formatPercent(cryptoData.changePercent24Hr)
                                }}
                            </p>
                            <p class="text-3xl">
                                {{ formatPrice(cryptoData.priceUsd) }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="text-sm font-semibold p-4 lg:p-8 shadow-lg border-secondaryBackground border rounded-lg flex-grow flex flex-col justify-between"
                    >
                        <div class="flex justify-between">
                            <p>Volume</p>
                            <p>{{ formatPrice(cryptoData.volumeUsd24Hr) }}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Market Cap</p>
                            <p>
                                {{ formatPrice(cryptoData.marketCapUsd) }}
                            </p>
                        </div>
                        <div class="flex justify-between">
                            <p>Supply</p>
                            <p>{{ formatPrice(cryptoData.supply) }}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Max Supply</p>
                            <p>{{ formatPrice(cryptoData.maxSupply) }}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Vwap 24h</p>
                            <p>{{ formatPrice(cryptoData.vwap24Hr) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="loading">
            <Loader />
        </template>

        <div v-else-if="error" class="flex justify-center items-center">
            <p>Something went wrong...</p>
        </div>
    </div>
</template>
