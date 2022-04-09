import { useState, SuspenseList, Suspense } from 'react';
import User from './components/User';

function App() {
  return (
    <Suspense fallback={<div>Loading Users1...</div>}>
      <User id="1" />
      <Suspense fallback={<div>Loading Users2...</div>}>
        <User id="2" />
        <Suspense fallback={<div>Loading Users3...</div>}>
          <User id="3" />
        </Suspense>
      </Suspense>
    </Suspense>
  );
}

export default App;
