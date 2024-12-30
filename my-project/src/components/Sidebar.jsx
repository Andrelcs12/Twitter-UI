import { Link, useLocation } from 'react-router-dom';
import {
  FaSearch, FaBell, FaHome, FaUser, FaRegCircle,
  FaUsers, FaPlusCircle, FaEllipsisH, FaComments
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Perfil from '../assets/perfil.jpeg';

const Sidebar = () => {
  const location = useLocation();

  // Função para verificar se o item está ativo
  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen bg-black text-slate-100 flex flex-col justify-between pl-32 w-4/12 font-sans border-r border-r-zinc-400 border-opacity-30">
      <div className="w-64">
        <div className="text-3xl flex mb-4 mt-4 pl-2">
          <FaXTwitter className="" />
        </div>
        <ul className="space-y-2 text-2xl">
          <li>
            <Link
              to="/"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/') ? 'font-bold' : ''
              }`}
            >
              <FaHome /> <span className="text-xl">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/explore') ? 'font-bold' : ''
              }`}
            >
              <FaSearch /> <span className="text-xl">Explore</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/notifications') ? 'font-bold' : ''
              }`}
            >
              <FaBell /> <span className="text-xl">Notifications</span>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/messages') ? 'font-bold' : ''
              }`}
            >
              <FaComments /> <span className="text-xl">Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to="/grok"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/grok') ? 'font-bold' : ''
              }`}
            >
              <FaPlusCircle /> <span className="text-xl">Grok</span>
            </Link>
          </li>
          <li>
            <Link
              to="/communities"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/communities') ? 'font-bold' : ''
              }`}
            >
              <FaUsers /> <span className="text-xl">Communities</span>
            </Link>
          </li>
          <li>
            <Link
              to="/premium"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/premium') ? 'font-bold' : ''
              }`}
            >
              <FaXTwitter /> <span className="text-xl">Premium</span>
            </Link>
          </li>
          <li>
            <Link
              to="/verified-orgs"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/verified-orgs') ? 'font-bold' : ''
              }`}
            >
              <FaRegCircle /> <span className="text-xl">Verified Orgs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/profile') ? 'font-bold' : ''
              }`}
            >
              <FaUser /> <span className="text-xl">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/more"
              className={`flex items-center space-x-5 pl-2 py-2 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 ${
                isActive('/more') ? 'font-bold' : ''
              }`}
            >
              <FaEllipsisH /> <span className="text-xl">More</span>
            </Link>
          </li>
        </ul>
        <button className="bg-white text-xl hover:bg-slate-300 text-black py-3 rounded-3xl w-64 mt-2 font-semibold font-mono">
          Post
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex items-center justify-between w-64 hover:rounded-3xl hover:bg-slate-300 hover:bg-opacity-15 p-2 mb-4 rounded-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center mt-2 justify-center text-xl">
            <img src={Perfil} alt="foto de perfil" className="rounded-full h-10" />
          </div>
          <div className="ml-4">
            <h1 className="font-bold text-lg">André Lucas</h1>
            <h2 className="text-gray-400 text-sm">@Andrelucs___</h2>
          </div>
        </div>
        <FaEllipsisH className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
