import axios from 'axios'
import store from '../store'

const fullHost = `${location.protocol}//${location.hostname}`
const instance = axios.create({
  baseURL: fullHost,
  headers: {
    'Accept-Language': 'nl-NL'
  },
  withCredentials: true
})

instance.interceptors.request.use(
  function (config) {
    store.dispatch('showLoading')
    return config
  },
  function (error) {
    store.dispatch('hideLoading')
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    store.dispatch('hideLoading')
    return response
  },
  function (error) {
    store.dispatch('hideLoading')
    return Promise.reject(error)
  }
)

export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
    })
  },

  patch(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance.patch(url, data).then(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
    })
  },

  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance.put(url, data).then(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
    })
  }
}
