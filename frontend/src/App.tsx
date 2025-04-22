import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Homepage from './pages/Homepage'
import Poems from './pages/Poems'
import Pictures from './pages/Pictures'
import './styles/globals.css'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container-fluid col-12 col-md-6 col-lg-4">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/poems" element={<Poems />} />
            <Route path="/pictures" element={<Pictures />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};


export default App
