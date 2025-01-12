export type TButtonTheme = 'accent' | 'circle' | 'tabs' | 'clear' | 'error'

export const buttonThemeMapper: Record<TButtonTheme, string> = {
  accent: 'button--accent',
  circle: 'button--circle',
  tabs: 'button--tabs',
  clear: 'button--clear',
  error: 'button--error'
}
