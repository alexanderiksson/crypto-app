<script setup>
    import { useSettingStore } from '../store/settingStore';
    import { computed } from 'vue';

    const settingStore = useSettingStore();
    const currentColor = computed(() =>
        settingStore.darkMode ? '#fff' : '#000'
    );

    const emit = defineEmits(['hamburgerMenu']);
</script>

<template>
    <svg
        width="32px"
        height="32px"
        viewBox="-0.5 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
        role="button"
        @click="emit('hamburgerMenu')"
    >
        <path
            d="M3 21.32L21 3.32001"
            :stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M3 3.32001L21 21.32"
            :stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>
