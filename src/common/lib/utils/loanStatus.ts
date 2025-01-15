import { LOCAL_STORAGE_LOAN_STATUS_KEY } from '@common/const/localstorage'
import { getDataFromLocalStorage, updateLocalStorage } from './utils'
import { IOfferData } from '@common/types/loan'

const setStepNumber = (stepNumber: number) => {
  updateLocalStorage(LOCAL_STORAGE_LOAN_STATUS_KEY, { stepNumber })
}

const setApplicationId = (applicationId: number) => {
  updateLocalStorage(LOCAL_STORAGE_LOAN_STATUS_KEY, { applicationId })
}

const setOfferList = (offerList: IOfferData[]) => {
  updateLocalStorage(LOCAL_STORAGE_LOAN_STATUS_KEY, { offerList })
}

const getApplicationId = () => {
  return getDataFromLocalStorage(LOCAL_STORAGE_LOAN_STATUS_KEY).applicationId
}

const getStepNumber = () => {
  return getDataFromLocalStorage(LOCAL_STORAGE_LOAN_STATUS_KEY).stepNumber
}

const getOfferList = () => {
  return getDataFromLocalStorage(LOCAL_STORAGE_LOAN_STATUS_KEY).offerList
}

const remove = () => {
  localStorage.removeItem(LOCAL_STORAGE_LOAN_STATUS_KEY)
}

export const loanStatus = {
  setStepNumber,
  setApplicationId,
  getStepNumber,
  getApplicationId,
  setOfferList,
  getOfferList,
  remove
}
