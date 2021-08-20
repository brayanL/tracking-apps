import axios from './Api';

export async function fetcher<T>(url: string) {
  const response = await axios.get(url);
  return response.data as T;
}

export async function putter<TData, TResponse = TData>(
  url: string,
  data: TData
): Promise<TResponse> {
  const response = await axios.put(url, data);
  return response.data as TResponse;
}

export async function poster<TData, TResponse = TData>(
  url: string,
  data: TData
): Promise<TResponse> {
  const response = await axios.post(url, data);
  return response.data as TResponse;
}

export async function deleter<TData, TResponse = void>(
  url: string,
  data?: TData
): Promise<TResponse> {
  const response = await axios.delete(url, { data });
  return response.data as TResponse;
}
