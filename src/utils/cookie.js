export function createCookie(name, value, expireTime) {
  let expires
  if (expireTime) {
    const date = new Date()
    date.setTime(date.getTime() + expireTime)
    expires = `; expires=${date.toGMTString()}`
  } else {
    expires = ''
  }
  document.cookie = `${name}=${value}${expires};path=/`
}

export function getCookie(name) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(`${name}=`)
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return null
}
