import React, { useState } from 'react';
import './App.css';
import CodeExportPopup from './components/CodeExportPopup/CodeExportPopup';
import Button from './components/Button/Button';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app">
      <Button text="EXPORT CODE" onClick={() => setShowPopup(true)} />
      {showPopup && <CodeExportPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;