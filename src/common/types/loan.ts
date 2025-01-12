export interface IPrescoringData {
  amount: number
  term: number
  firstName: string
  lastName: string
  middleName: string | null
  email: string
  birthdate: string | Date
  passportSeries: string
  passportNumber: string
}

export interface IOfferData {
  applicationId: number
  requestedAmount: number
  totalAmount: number
  term: number
  monthlyPayment: number
  rate: number
  isInsuranceEnabled: boolean
  isSalaryClient: boolean
}

export interface IScoringData {
  gender: 'MALE' | 'FEMALE'
  maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER'
  dependentAmount: number
  passportIssueDate: string
  passportIssueBranch: string
  employment: {
    employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER'
    employerINN: number
    salary: number
    position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER'
    workExperienceTotal: number
    workExperienceCurrent: number
  }
  account: string
}
