import React from 'react';
import './App.css';
import FramePlayer from './components/FramePlayer';

const images = [
  'https://i.pinimg.com/originals/ad/07/cd/ad07cd5d14fcce8c43e8f9989a0dc66e.jpg',
  'https://i.pinimg.com/564x/c3/a1/63/c3a1634d8d296f4390c0e78a366d4bf1.jpg',
  'https://i.pinimg.com/564x/af/6e/27/af6e2790b6e4917c8ef7822c6e5ffc1e.jpg',
  'https://i.pinimg.com/564x/4b/28/b3/4b28b30791bf4c325daa663a1b8a5481.jpg',
  'https://i.pinimg.com/564x/e3/71/04/e37104a3d35bb3f2d1ff802304a50357.jpg'
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Frame Player</h1>
      </header>
      <FramePlayer frames={images} fps={0.2} />
    </div>
  );
}

export default App;
