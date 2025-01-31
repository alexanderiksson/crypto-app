<script setup>
import { useFetch } from "../composables/useFetch";
import { useRoute } from "vue-router";
import { computed } from "vue";
import Loader from "../components/Loader.vue";

const route = useRoute();
const { data, error, loading } = useFetch(
    `https://api.coincap.io/v2/assets/${route.params.id}/history?interval=m1`
);

const price = computed(() =>
    data.value && data.value.data ? data.value.data : []
);
</script>

<template>
    <div class="content">
        <h1 class="text-4xl mb-8">{{ route.params.id }}</h1>

        <template v-if="loading">
            <Loader />
        </template>

        <p v-else-if="error">Something went wrong...</p>

        <template>
            <p v-for="x in price" :key="x.time">{{ x.priceUsd }}</p>
        </template>
    </div>
</template>
