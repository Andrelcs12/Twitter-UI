import { useState } from 'react';
import ForYou from '../components/ForYou';
import Following from '../components/Following';
import STUDYTWT from '../components/STUDYTWT';
import SoftwareEngineering from '../components/SoftwareEngineering';
import { FaSearch, FaEllipsisH } from 'react-icons/fa';

const Home = () => {
  const [activeTab, setActiveTab] = useState('For you'); // Aba ativa

  // Mapeia componentes para cada seção
  const sections = {
    'For you': <ForYou />,
    Following: <Following />,
    STUDYTWT: <STUDYTWT />,
    'Software Engineering': <SoftwareEngineering />,
  };

  const topics = [
    {
      trending: 'Trending in Brazil',
      hashtag: 'Marvel',
      posts: '134K posts',
    },
    {
      trending: 'Trending in Brazil',
      hashtag: 'Balneário Camboriú',
      posts: '14,437 posts',
    },
    {
      trending: 'Trending in Brazil',
      hashtag: 'Fim de ano',
      posts: '34K posts',
    },
    {
      trending: 'Trending in Brazil',
      hashtag: 'Software Engineering',
      posts: '46K posts',
    },
  ];

  return (
    <div className="bg-black h-screen w-full flex ">
      {/* Left Section */}
      <div className="w-9/12 border-r-2 border-slate-300 font-semibold border-opacity-30">
        {/* Tabs */}
        <div>
          <ul className="flex  text-slate-300 border-b-2 border-slate-300 font-semibold border-opacity-30 h-12 justify-around items-center">
            {Object.keys(sections).map((section) => (
              <li
                key={section}
                onClick={() => setActiveTab(section)}
                className={`cursor-pointer px-4 h-full flex items-center ${
                  activeTab === section
                    ? 'border-b-4 border-blue-500 rounded-b-lg font-bold text-white'
                    : ''
                }`}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
        {/* Section Content */}
        <div className="text-white">{sections[activeTab]}</div>
      </div>

      {/* Right Section */}
      <div className="text-white pl-8 mr-32 mt-2">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex items-center bg-slate-300 bg-opacity-15 rounded-full px-4 py-3">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white w-full ml-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Premium Promotion */}
        <div className="p-4 rounded-lg mb-2 border-2 border-gray-300 border-opacity-30">
          <h1 className="font-bold text-lg">Try Premium for free today</h1>
          <p className="text-gray-400 text-sm">
            Upgrade your experience with less ads, power tools, and more with Premium.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-600 transition">
            Start free 14-day trial
          </button>
        </div>

        {/* What's Happening */}
        <div>
          <ul className=" border-slate-300 border-opacity-20 border-2 rounded-lg">
            <h1 className="font-bold text-2xl  pl-4 pt-2">Whats happening</h1>
            {topics.map((topic, index) => (
              <li key={index} className="pl-4 rounded-lg flex justify-between items-center p-3">
                <div>
                  <h1 className="text-gray-500 text-sm">{topic.trending}</h1>
                  <h2 className="font-bold text-gray-200">{topic.hashtag}</h2>
                  <p className="text-gray-400">{topic.posts}</p>
                </div>
                <FaEllipsisH className="text-gray-500 cursor-pointer" />
              </li>
            ))}

            <li>
              <button className='text-blue-500 mb-2 ml-4'>show more</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
