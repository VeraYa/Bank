import { Support } from '@widgets/Support/Support'
import { NewsSlider } from '@widgets/NewsSlider/NewsSlider'
import { Map } from '@widgets/Map/Map'
import { CurrencyWidget } from '@widgets/CurrencyWidget/CurrencyWidget'
import { Features } from '@widgets/Features/Features'
import { CardSelector } from '@widgets/CardSelector/CardSelector'
import './HomePage.scss'

export const HomePage = () => {
  return (
    <div className='home-container'>
      <CardSelector />
      <Features />
      <CurrencyWidget />
      <Map />
      <NewsSlider />
      <Support />
    </div>
  )
}
