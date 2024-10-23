import Lenis from 'lenis'

import Home from './components/Home'
import { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  })
  return (
    <div>

      <Home/>
    </div>
  )
}

export default App
