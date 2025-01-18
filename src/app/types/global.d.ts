declare module '*.module.scss'
declare module '*.png'
declare module '*.pdf'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import React from 'react'
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean

declare namespace NodeJS {
  interface ProcessEnv {
    API_BASE_URL_EXCHANGE: string
    API_HOST_EXCHANGE: string
    API_KEY_EXCHANGE: string

    API_BASE_URL_NEWS: string
    API_KEY_NEWS: string

    API_BASE_URL_MAIN: string
  }
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T
