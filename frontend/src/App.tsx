import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Homepage from './pages/Homepage'
import Poems from './pages/Poems'
import Pictures from './pages/Pictures'
import TechBlog from './pages/TechBlog'
import Profile from './pages/Profile'
import { pictures, poems, techBlogs, profileInfo } from './pages/content.ts'
import './styles/globals.css'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container-fluid col-12 col-lg-8 col-lg-4">
      <Router>
        <Layout>
          <div className="mt-5">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile props={profileInfo} />} />
              <Route path="/poems" element={<Poems props={poems} />} />
              <Route path="/pictures" element={<Pictures props={pictures} />} />
              <Route path="/tech-blog" element={<TechBlog props={techBlogs} />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </div>
  );
};


export default App
