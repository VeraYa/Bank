import '@styles/config/index.scss'
import { Info } from '@widgets/Info/Info'
import { Instruction } from '@widgets/Instruction/Instruction'
import { Suggestion } from '@widgets/Suggestion/Suggestion'
import { Prescoring } from '@app/widgets/Prescoring/Prescoring'

export const LoanPage = () => {
  return (
    <main className="loan page">
      <Suggestion />
      <Info/>
      <Instruction/>
      <Prescoring/>
    </main>
  )
}
