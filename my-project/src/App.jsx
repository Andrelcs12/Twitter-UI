import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Sidebar from '../src/components/Sidebar'; // Importe o componente Sidebar
import Home from './Pages/Home'; // Componente para a página Home
import Explore from './Pages/Explore'; // Componente para a página Explore
import Notifications from './Pages/Notifications'; // Componente para a página Notifications
import Messages from './Pages/Messages'; // Componente para a página Messages
import Grok from './Pages/Grok'; // Componente para a página Grok
import Communities from './Pages/Communities'; // Componente para a página Communities
import Premium from './Pages/Premium'; // Componente para a página Premium
import VerifiedOrgs from './Pages/VerifiedOrgs'; // Componente para a página Verified Orgs
import Profile from './Pages/Profile'; // Componente para a página Profile
import More from './Pages/More'; // Componente para a página More

function App() {
  return (
    <Router>
      <div className="flex ">
        <Sidebar />

        {/* Conteúdo principal com rotas */}
        <div className="w-full ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/grok" element={<Grok />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/verified-orgs" element={<VerifiedOrgs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
