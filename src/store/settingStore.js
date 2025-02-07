import { defineStore } from 'pinia';
import { watch } from 'vue';

export const useSettingStore = defineStore('settings', {
    state: () => ({
        darkMode: true
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        }
    },
    persist: true
});

export function watchBodyClass() {
    const settingStore = useSettingStore();
    watch(
        () => settingStore.darkMode,
        (newValue) => {
            document.body.classList.toggle('darkmode', newValue);
        },
        { immediate: true }
    );
}
