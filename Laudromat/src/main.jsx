import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
=======
import Navbar from '../components/navbar/nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
>>>>>>> 4daaa8b93b08a20a14eb447028192193c6536add
    <App />
  </StrictMode>,
)
