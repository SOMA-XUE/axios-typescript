export type Methods = 'get' | 'GET'|'post'|'POST';
export interface AxiosRequestConfig {
    url?: string;
    method?: Methods;
    params: any;
    headers?: Record<string, any>;
    data?: Record<string, any>
    statusText?: string,
} 

export interface AxiosResponse<T> {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    statusText: string;
}

export interface AxiosResponse<T =any> {
    data:T;
    status: number;

}