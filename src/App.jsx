import { useState } from 'react';
import './App.css';
import ColoredBox from './Components/ColoredBox';
import InputBar from './Components/InputBar';

function App() {
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="mx-auto h-full">

      <ColoredBox/>
    <InputBar/>
      </div>
    </div>
  )
}

export default App
