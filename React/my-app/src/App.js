import React from "react";
import './App.css';
import Counter from './counter/counter';

const NAMES = ["Barsa", "Bisiska", "Kritika", "Srijana", "Rachana", "Neeta", "Sami", "Sindhu", "Kirtee", "Kusum", "Elisa", " Neha", "Puza", "Trija"]
function App() {
    return (
      <div className="App">
        {NAMES.map((name) => (
          <Counter key={name} name={name} />
        ))}
      </div>
    );
}

export default App;
