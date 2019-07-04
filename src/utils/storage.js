const fallbackStore = {}

const isLocalStorageNameSupported = (function isLocalStorageNameSupported() {
  const testKey = 'test'
  try {
    window.localStorage.setItem(testKey, '1')
    window.localStorage.removeItem(testKey)
    return true
  } catch (error) {
    return false
  }
})()

export default {
  getItem(key, storage) {
    if (!isLocalStorageNameSupported) {
      return fallbackStore[key]
    }

    try {
      const data =
        storage != null ? storage.getItem(key) : window.sessionStorage.getItem(key) || window.localStorage.getItem(key)
      if (data) {
        return JSON.parse(data)
      }
    } catch (e) {
      return null
    }

    return null
  },

  saveItem(key, data, storage = window.sessionStorage) {
    if (!isLocalStorageNameSupported) {
      fallbackStore[key] = data
      return
    }
    storage.setItem(key, JSON.stringify(data))
  },

  removeItem(key, storage) {
    if (!isLocalStorageNameSupported) {
      delete fallbackStore[key]
      return
    }

    if (storage) {
      storage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key) || window.localStorage.removeItem(key)
    }
  }
}
