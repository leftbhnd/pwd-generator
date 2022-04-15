import React from 'react'
import './app.css'
import Header from './components/header/Header'
import Main from './components/main/Main'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App
