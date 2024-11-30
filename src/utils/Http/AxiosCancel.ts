// import axios, { AxiosRequestConfig, Canceler } from 'axios'

// const cancelMap = new Map<string, Canceler>()

// const getCancelMapKey = (url: string, method: string) => `${url}_${method}`

// class AxiosCancel {
//   addPending(config: AxiosRequestConfig) {
//     const { url, method } = config
//     if (!url || !method) {
//       return
//     }
//     this.removePending(url, method)
//     const key = getCancelMapKey(url, method)
//     config.cancelToken = new axios.CancelToken((cancel: Canceler) => {
//       if (!cancelMap.has(key)) {
//         cancelMap.set(key, cancel)
//       }
//     })
//   }

//   removePending(url: string | undefined, method: string | undefined) {
//     if(!url || !method) {
//       return
//     }
//     const key = getCancelMapKey(url, method)
//     const cancel = cancelMap.get(key)
//     if(cancel) {
//       cancel()
//       cancelMap.delete(key)
//     }
//   }

//   removeAllPending() {
//     cancelMap.forEach((cancel) => {
//       cancel && cancel()
//     })
//     cancelMap.clear()
//   }
// }

// export default new AxiosCancel