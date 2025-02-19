<script setup>
    import { computed, ref } from 'vue';
    import { useFetch } from '../composables/useFetch';
    import Table from '../components/Table.vue';
    import Loader from '../components/Loader.vue';

    const { data, error, loading } = useFetch(
        'https://api.coincap.io/v2/assets'
    );

    const cryptos = computed(() =>
        data.value && data.value.data ? data.value.data : []
    );

    const search = ref('');

    const filteredCryptos = computed(() => {
        return cryptos.value.filter((crypto) =>
            crypto.name.toLowerCase().includes(search.value.toLowerCase())
        );
    });
</script>

<template>
    <div class="content">
        <h1 class="text-4xl font-semibold mb-8">Market</h1>

        <input
            type="search"
            name="search"
            placeholder="Search"
            v-model="search"
            class="p-2 rounded bg-secondaryBackground mb-8 w-80 max-w-full"
        />

        <template v-if="loading">
            <Loader />
        </template>

        <p v-else-if="error">Something went wrong...</p>

        <template v-else>
            <Table :data="filteredCryptos" />
        </template>
    </div>
</template>
