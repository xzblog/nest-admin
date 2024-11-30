// import { message } from 'antd'
// import { history } from '@umijs/max'
// import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
// import AxiosCancel from './AxiosCancel'

// interface ResponseBody<T = any> {
//   data: T,
//   msg: string
// }

// const codeMessage: Record<number, string> = {
//   400: '请求错误',
//   401: '用户没有权限（令牌、用户名、密码错误）',
//   403: '用户得到授权，但是访问是被禁止的',
//   404: '请求资源不存在',
//   405: '请求方法不被允许',
//   406: '请求的格式不可得',
//   410: '请求的资源被永久删除，且不会在得到',
//   422: '当创建一个对象时，发生一个验证错误',
//   500: '服务器发生错误，请检查服务器',
//   502: '网关错误',
//   503: '服务不可用，服务器暂时过载或维护',
//   504: '网关超时'
// }

// class HttpClient {
//   private instance: AxiosInstance

//   constructor() {
//     this.instance = axios.create({
//       timeout: 5000,
//       // baseURL: '/api',
//       baseURL: 'http://110.42.217.179',
//       headers: { 'Content-Type': 'application/json' }
//     })

//     this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//       AxiosCancel.addPending(config)
//       config.headers['Authorization'] = localStorage.getItem('Authorization') || 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMjAyODkxLCJpYXQiOjE3MzAxMTY0OTEsImp0aSI6IjU1YjMxNDQwYmE5YTQwYjM5Mjc3ZjMxNmUzZmE0YzA3IiwidXNlcl9pZCI6MX0.W6uGleIwkLF_cAnWOAFZ9Ye0CVY7zxS9ZxKTXBPwV88'

//       return config
//     })

//     this.instance.interceptors.response.use((response: AxiosResponse<ResponseBody>) => {
//       const { data, config } = response
//       AxiosCancel.removePending(config.url, config.method)
//       if (data.msg === 'ok') {
//         return Promise.resolve(data.data)
//       } else {
//         message.error(data.msg)
//         return Promise.reject(data)
//       }
//     }, (error: AxiosError) => {
//       const { response } = error
//       if (response) {
//         const { status, statusText } = response
//         message.error(codeMessage[status] || statusText)
//         if (status === 401) {
//           localStorage.clear()
//           history.push('/login')
//         }
//       }
//     })
//   }

//   get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.instance.get(url, config)
//   }

//   post<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.instance.post(url, config?.data, config)
//   }

//   put<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.instance.put(url, config?.data, config)
//   }

//   delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.instance.delete(url, config)
//   }
// }

// export default new HttpClient