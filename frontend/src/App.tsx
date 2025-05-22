import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Homepage from './pages/Homepage'
import Pictures from './pages/Pictures'
import TechBlog from './pages/TechBlog'
import Profile from './pages/Profile'
import { pictures, poems, techBlogs, profileInfo } from './pages/content.ts'
import './styles/globals.css'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile props={profileInfo} />} />
            <Route path="/pictures" element={<Pictures props={pictures} />} />
            <Route path="/tech-blog" element={<TechBlog props={techBlogs} />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};


export default App
