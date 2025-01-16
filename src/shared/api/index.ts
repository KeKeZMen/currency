export default async function api<T = undefined>(
  url: string,
  requestInit?: RequestInit
) {
  try {
    const res = await fetch(url, requestInit);

    const data = (await res.json()) as T;

    return {
      resData: data,
    };
  } catch (error) {
    const errorMessage = error as ErrorMessage;

    return {
      resError: errorMessage,
    };
  }
}
