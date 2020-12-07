export type Methods = 'get' | 'GET'|'post'|'POST';
export interface AxiosRequestConfig {
    url?: string;
    method?: Methods;
    params: any;
    headers?: Record<string, any>;
    data?: Record<string, any>
}