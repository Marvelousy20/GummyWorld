// @ts-nocheck

import HomePage from './HomePage';
import Background from '../../asset/Background.png'

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className='absolute top-0 left-0 right-0'>
        <img src= {Background} alt = 'background' className='h-[5500px] md:h-auto' />
      </div>

      <HomePage />
    </div>
  );
}

export default App;
