
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}> </Route>
        <Route path='/login' element={<LogIn></LogIn>}> </Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}> </Route>
        <Route path='/*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
