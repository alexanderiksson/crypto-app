<script setup>
import { formatPercent, formatPrice } from "../utils/format";

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
});
</script>

<template>
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
            <tr v-for="crypto in data" :key="crypto.id">
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
</template>
