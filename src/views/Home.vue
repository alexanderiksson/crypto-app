<script setup>
import { computed } from "vue";
import { useFetch } from "../composables/useFetch";
import Table from "../components/Table.vue";
import Loader from "../components/Loader.vue";

const { data, error, loading } = useFetch("https://api.coincap.io/v2/assets");

const cryptos = computed(() =>
    data.value && data.value.data ? data.value.data : []
);
</script>

<template>
    <div class="content">
        <h1 class="text-4xl mb-8">Market</h1>

        <template v-if="loading">
            <Loader />
        </template>

        <p v-else-if="error">Something went wrong...</p>

        <template v-else>
            <Table :data="cryptos" />
        </template>
    </div>
</template>
