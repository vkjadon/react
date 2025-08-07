import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Viewer from './components/Viewer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:projectId" element={<Viewer />} />
      </Routes>
    </Router>
  );
}
