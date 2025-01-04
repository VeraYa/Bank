export const updateLocalStorage = (key: string, newData: object) => {
  const data = localStorage.getItem(key)
  if (data) {
    const parsedData = JSON.parse(data)
    const updatedData = { ...parsedData, ...newData }
    localStorage.setItem(key, JSON.stringify(updatedData))
  } else {
    localStorage.setItem(key, JSON.stringify(newData))
  }
}

export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)
  return typeof data === 'string' && JSON.parse(data)
}

export const formatNumber = (num: number): string | undefined => {
  return num.toLocaleString('ru-RU')
}

export const filterDigits = (string: string): string => {
  return string.replace(/\D/g, '')
}

export const numWithSpaces = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const scrollTo = (id: string) => {
  const section = document.querySelector(`#${id}`)
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const isLeapYear = (year: number) => {
  const date = new Date(year, 2, 0)

  return date.getDate() == 29
}

export const yearsToMs = (year: number) => {
  const ms = 1000
  const sec = 60
  const min = 60
  const hours = 24
  const days = 365
  return ms * sec * min * hours * days * year
}

export const msToYears = (milliseconds: number) => {
  const ms = 1000
  const sec = 60
  const min = 60
  const hours = 24
  const days = 365
  return milliseconds / ms / sec / min / hours / days
}

export const minutesToMs = (min: number) => {
  const ms = 1000
  const sec = 60
  return ms * sec * min
}

export const isHTML = (str: string) => {
  const doc = new DOMParser().parseFromString(str, 'text/html')
  return Array.from(doc.body.childNodes).some(
    (node) => node.nodeType === Node.ELEMENT_NODE
  )
}

export const checkImageSrc = (url: string) => {
  const LOADING_TIME = 2000

  return new Promise((resolve) => {
    const img = new Image()

    const timeout = setTimeout(() => {
      resolve(false)
    }, LOADING_TIME)

    img.onload = () => {
      clearTimeout(timeout)
      resolve(true)
    }
    img.onerror = () => {
      clearTimeout(timeout)
      resolve(false)
    }
    img.src = url
  })
}
