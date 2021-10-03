import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface Rpc {
  request(
    service: string,
    method: string,
    contentType: 'application/json' | 'application/protobuf',
    data: object | Uint8Array
  ): Promise<object | Uint8Array>
}

export type HttpClientOptions = Omit<AxiosRequestConfig, 'path' | 'host' | 'port'> & {
  onClientReadyHook?: (client: AxiosInstance) => void
}

export class AxiosHttpRpc implements Rpc {
  private readonly client: AxiosInstance

  constructor(options: HttpClientOptions) {
    this.client = axios.create({
      baseURL: options.baseURL,
      withCredentials: true,
    })
    if (options.onClientReadyHook) {
      options.onClientReadyHook(this.client)
    }
  }

  request(
    service: string,
    method: string,
    contentType: 'application/json' | 'application/protobuf',
    data: object | Uint8Array
  ): Promise<object | Uint8Array> {
    return this.client
      .post(`${service}/${method}`, data, {
        responseType: contentType === 'application/protobuf' ? 'arraybuffer' : 'json',
        headers: {
          'content-type': contentType,
        },
      })
      .then((response: { data: any }) => {
        return response.data
      })
  }
}
