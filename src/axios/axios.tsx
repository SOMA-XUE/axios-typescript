import { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Axios {
    request<T>(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.dispatchRequest<T>(config);
    }

    dispatchRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>{
        return new Promise<AxiosResponse<T>>(function (resolve, reject) {
            let { method, url, params} = config;
            let request = new XMLHttpRequest();

            if( params && typeof params === 'object') {

            }
        })

    }
}