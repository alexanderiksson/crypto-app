<script setup>
import { RouterLink } from "vue-router";
import { formatPercent, formatPrice } from "../utils/format";

defineProps({
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
                <th class="text-left text-xl py-4 px-2">Name</th>
                <th class="text-left text-xl py-4 px-2">Price</th>
                <th class="text-left text-xl py-4 px-2">Change &percnt;</th>
                <th class="text-left text-xl py-4 px-2">
                    Volume &#40;24h&#41;
                </th>
                <th class="text-left text-xl py-4 px-2">Market Cap</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="crypto in data" :key="crypto.id">
                <td class="py-4 px-2">
                    <RouterLink :to="`/crypto/${crypto.id}`">{{
                        crypto.name
                    }}</RouterLink>
                </td>
                <td class="py-4 px-2">
                    {{ formatPrice(crypto.priceUsd) }}
                </td>
                <td
                    :class="
                        crypto.changePercent24Hr > 0
                            ? 'text-green-500'
                            : 'text-red-500' + ' py-4 px-2'
                    "
                >
                    {{ formatPercent(crypto.changePercent24Hr) }}
                </td>
                <td class="py-4 px-2">
                    {{ formatPrice(crypto.volumeUsd24Hr, "compact") }}
                </td>
                <td class="py-4 px-2">
                    {{ formatPrice(crypto.marketCapUsd, "compact") }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
