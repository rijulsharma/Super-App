import './App.css';
import ChooseCategory from './pages/ChooseCategory';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/selectCategory" element={<ChooseCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
