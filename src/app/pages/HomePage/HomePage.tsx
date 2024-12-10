import { Features } from './Features/Features'
import { Map } from './Map/Map'
import { Support } from './Support/Support'
import { CardSelector } from './CardSelector/CardSelector'
import { CurrencyWidget } from './CurrencyWidget/CurrencyWidget'
import './HomePage.scss'
import { NewsSlider } from './NewsSlider/NewsSlider'


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
