import './App.css';
import ChooseCategory from './pages/ChooseCategory';
import SignUp from './pages/SignUp';
import UserPage from './pages/UserPage';
import Entertainment from './pages/Entertainment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/selectCategory" element={<ChooseCategory />} />
        <Route path = "/userPage" element={<UserPage/>}></Route>
        <Route path = "/entertainment" element={<Entertainment/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
