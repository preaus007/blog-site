import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import Projects from './pages/Projects';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UpdatePost from './pages/UpdatePost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
