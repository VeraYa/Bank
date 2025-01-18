import { IStateSchema } from '@app/providers/StoreProvider'

export const getDocuments = (state: IStateSchema) => state.documents
export const getDocumentsError = (state: IStateSchema) => state.documents.error
export const getDocumentsIsLoading = (state: IStateSchema) =>
  state.documents.isLoading
