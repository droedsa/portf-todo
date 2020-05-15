import React from 'react';
import './app.css'
import Board from "../board/board";
import CategoryControlPanel from "../category-control-panel/category-control-panel";


function App() {
  return (
    <div className='app'>
        <CategoryControlPanel/>
        <Board/>
    </div>
  );
}

export default App;
