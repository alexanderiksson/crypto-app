import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    onMounted(async () => {
        try {
            loading.value = true;
            const response = await axios.get(url);
            data.value = response.data;
            console.log(data.value);
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    });

    return { data, error, loading };
}
