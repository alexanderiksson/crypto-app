<script setup>
    import { useSettingStore } from '../store/settingStore';
    import { computed, defineEmits } from 'vue';

    const settingStore = useSettingStore();
    const currentColor = computed(() =>
        settingStore.darkMode ? '#fff' : '#000'
    );

    const emit = defineEmits(['hamburgerMenu']);
</script>

<template>
    <svg
        :fill="currentColor"
        width="32px"
        height="32px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        role="button"
        @click="emit('hamburgerMenu')"
    >
        <path
            d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z"
            fill-rule="evenodd"
        />
    </svg>
</template>
