import { ref } from "vue";

export default function useApi<T = undefined>(
  apiFn: () => Promise<{
    resData?: T | undefined;
    resError?: ErrorMessage | undefined;
  }>
) {
  const data = ref<T | undefined>();
  const error = ref<ErrorMessage | undefined>();
  const isLoading = ref(false);

  const fetchData = () => {
    data.value = undefined;
    error.value = undefined;
    isLoading.value = true;

    apiFn()
      .then(({ resData, resError }) => {
        if (!resData || resError) {
          return (error.value = resError);
        }

        data.value = resData;
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  fetchData();

  return [data, error, isLoading] as const;
}
