import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shared1 from './shared1.jsx';
import Shared2 from './shared2.jsx';
import { Todoprovider } from './context/Todocontext.jsx';
createRoot(document.getElementById('root')).render(
  <Todoprovider><Shared1/> <Shared2/>
  </Todoprovider>

)