import '@styles/config/index.scss'
import { Info } from '@widgets/Info/Info'
import { Instruction } from '@widgets/Instruction/Instruction'
import { Suggestion } from '@widgets/Suggestion/Suggestion'

export const LoanPage = () => {
  return (
    <main className="loan page">
      <Suggestion />
      <Info/>
      <Instruction/>
    </main>
  )
}
