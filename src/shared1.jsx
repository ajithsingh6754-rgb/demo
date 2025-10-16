import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import shared2 from './shared2.jsx';
import shared1 from './shared1.jsx';
import { TodoProvider } from './context/Todocontext.jsx';
createRoot(document.getElementById('root')).render(
  <TodoProvider><Shared1/> <Shared2/>
  </TodoProvider>

)