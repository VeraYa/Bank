export interface IScheduleSchema {
  data?: IScheduleData[]
  error?: string
  status?: 'CC_APPROVED' | 'CC_DENIED'
  isLoading: boolean
}

export interface IScheduleData {
  number: number
  date: string
  totalPayment: number
  interestPayment: number
  debtPayment: number
  remainingDebt: number
}

export interface IScheduleResponse {
  credit: {
    paymentSchedule: IScheduleData[]
  }
  status: 'CC_APPROVED' | 'CC_DENIED'
}
