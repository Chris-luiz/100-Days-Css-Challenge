import { BrowserRouter } from 'react-router-dom'; 

import { BaseLayout } from './shared/layout/BaseLayout/BaseLayout';
import { Router } from "./Routes/Router"
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  )
}

export default App
