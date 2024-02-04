import { useState } from 'react';
import './App.css';
import ColoredBox from './Components/ColoredBox';
import InputBar from './Components/InputBar';

function App() {
  
  return (
    <div className="min-h-screen">
      <ColoredBox/>
    <InputBar/>
    </div>
  )
}

export default App
