import '@testing-library/jest-dom'

// Полифил для TextEncoder/TextDecoder
class TextEncoderPolyfill {
  encoding = 'utf-8'
  encode(str: string): Uint8Array {
    const arr = new Uint8Array(str.length)
    for (let i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i)
    }
    return arr
  }
  encodeInto(str: string, u8arr: Uint8Array): { read: number; written: number } {
    const view = u8arr
    for (let i = 0; i < str.length; i++) {
      view[i] = str.charCodeAt(i)
    }
    return { read: str.length, written: str.length }
  }
}

class TextDecoderPolyfill {
  decode(arr: Uint8Array): string {
    return String.fromCharCode.apply(null, Array.from(arr))
  }
}

global.TextEncoder = TextEncoderPolyfill as typeof global.TextEncoder
global.TextDecoder = TextDecoderPolyfill as typeof global.TextDecoder