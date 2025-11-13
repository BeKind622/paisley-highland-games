import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ApplyRole from './pages/ApplyRole';
import EventsPage from './pages/EventsPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyRole />} />
        <Route path="/apply/:role" element={<ApplyRole />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;