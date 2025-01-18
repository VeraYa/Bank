import '@styles/config/index.scss'
import { useSelector } from 'react-redux'
import { Confirmation } from '@widgets/Confirmation'
import { Congratulations } from '@widgets/Congratulations'
import { getCodeIsLoading, getLoanStatusStep } from '@entities/Loan'
import { Loader } from '@common/ui'

const CodePage = () => {
  const isLoading = useSelector(getCodeIsLoading)
  const step = useSelector(getLoanStatusStep)

  if (isLoading) return <Loader />

  return (
    <main className="page">
      {step > 6 && <Congratulations />}
      {step === 6 && <Confirmation />}
    </main>
  )
}

export default CodePage
