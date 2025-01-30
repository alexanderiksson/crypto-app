<script setup>
import { ref, onMounted, computed } from "vue";
import { useFetch } from "../composables/useFetch";
import { formatPercent, formatPrice } from "../utils/format";

const { data, error, loading, fetchData } = useFetch(
    "https://api.coincap.io/v2/assets"
);

onMounted(() => {
    fetchData();
});

const cryptos = computed(() =>
    data.value && data.value.data ? data.value.data : []
);
</script>

<template>
    <div class="content">
        <h1 class="text-4xl mb-8">Market</h1>

        <p v-if="loading">Laddar...</p>
        <p v-else-if="error">Fel: {{ error }}</p>

        <ul v-else>
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="text-left text-xl">Name</th>
                        <th class="text-left text-xl">Price</th>
                        <th class="text-left text-xl">Change &percnt;</th>
                        <th class="text-left text-xl">Volume &#40;24h&#41;</th>
                        <th class="text-left text-xl">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="crypto in cryptos" :key="crypto.id">
                        <td>
                            {{ crypto.name }}
                        </td>
                        <td>
                            {{ formatPrice(crypto.priceUsd) }}
                        </td>
                        <td
                            :class="
                                crypto.changePercent24Hr > 0
                                    ? 'text-green-500'
                                    : 'text-red-500'
                            "
                        >
                            {{ formatPercent(crypto.changePercent24Hr) }}
                        </td>
                        <td>
                            {{ formatPrice(crypto.volumeUsd24Hr, "compact") }}
                        </td>
                        <td>
                            {{ formatPrice(crypto.marketCapUsd, "compact") }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </ul>
    </div>
</template>
