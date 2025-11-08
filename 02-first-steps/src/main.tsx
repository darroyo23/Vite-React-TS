import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './FirstStepsApp'
import { ItemCounter } from './shopping-cart/ItemCounter'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    {/* <MyAwesomeApp /> */}
    <ItemCounter Name="Play 5" quantity={1} />
    <ItemCounter Name="Xbox" quantity={3} />
  </StrictMode>
)
