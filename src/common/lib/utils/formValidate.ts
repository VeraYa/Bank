import { isLeapYear, msToYears } from './utils'

const age = (date: string | Date, min: number = 18, max: number = 123) => {
  if (typeof date === 'string') date = new Date(date)
  const birthDate = date.getTime()
  const currentDate = new Date().getTime()

  const birthYear = date.getFullYear()
  const currentYear = new Date().getFullYear()

  const msInDay = 86400000
  let countLeapDays = 0

  for (let i = birthYear; i <= currentYear; i++) {
    if (isLeapYear(i)) countLeapDays++
  }

  const leapDays = countLeapDays * msInDay

  if (msToYears(currentDate - birthDate - leapDays) > max) {
    return `Maximum allowed age is ${max} years`
  }

  if (msToYears(currentDate - birthDate - leapDays) <= min) {
    return `Minimum allowed age is ${min} years`
  }

  return true
}

const dateNotAfterToday = (date: string | Date) => {
  if (typeof date === 'string') date = new Date(date)

  const currentDate = new Date()

  if (date > currentDate) {
    return 'The date should not be later than today'
  }

  return true
}

export const formValidate = { age, dateNotAfterToday }
