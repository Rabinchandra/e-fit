import './css/style.css';
import Hero from './components/Hero';
import Journey from './components/Journey';
import WhatWeDo from './components/WhatWeDo';
import CarouselSlider from './components/CarouselSlider';
import WhoWeAre from './components/WhoWeAre';

function App() {
  return (
    <div className="App">
      <Hero />
      <Journey />
      <WhatWeDo />
      <WhoWeAre />
      <CarouselSlider />
    </div>
  );
}

export default App;
