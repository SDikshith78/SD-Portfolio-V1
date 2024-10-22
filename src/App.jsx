import Lenis from 'lenis'

import Home from './components/Home'
import { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
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
