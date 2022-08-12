import './App.css'
import { Routes, Route } from 'react-router-dom';
import { About, Home, Store } from './pages';
import { Navbar, SideNav } from './components';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

      return (
            <ShoppingCartProvider>
                  
                  <div className="App mb-4 px-2 relative">
                        <Navbar/>
                        <SideNav />
                        
                        <Routes>
                              <Route path="/" element={<Home/>}/>
                              <Route path="/store" element={<Store/>}/>
                              <Route path="/about" element={<About/>}/>
                        </Routes>
                  </div>
            </ShoppingCartProvider>
            
      )
}

export default App
