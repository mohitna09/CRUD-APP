import './App.css';

//components
import NavBar from './components/NavBar';
import Crudapp from './components/Crudapp';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
           <Route path="/" element={<Crudapp />} />
           <Route path="/all" element={<AllUsers />} />
           <Route path="/add" element={<AddUser />} />
           <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
