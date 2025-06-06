
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MyRecipeContext from './context/MyRecipeContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
<MyRecipeContext>
    <ToastContainer>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ToastContainer>
</MyRecipeContext>
 

)
