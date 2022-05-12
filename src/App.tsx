import React from 'react';

import { GsapTo } from './animations/GsapTo';
import { GsapTimeline } from './animations/GsapTimeline';
import { GsapDraggable } from './animations/GsapDraggable';
import { GsapScrollTrigger } from './animations/GsapScrollTrigger';

import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <GsapTo />
        {/*<GsapTimeline />*/}
        {/*<GsapDraggable />*/}
        {/*<GsapScrollTrigger />*/}
      </main>
    </div>
  );
}

export default App;
