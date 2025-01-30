import { ref } from "vue";
import axios from "axios";

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    async function fetchData() {
        loading.value = true;
        try {
            const response = await axios.get(url);
            data.value = response.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    return { data, error, loading, fetchData };
}
