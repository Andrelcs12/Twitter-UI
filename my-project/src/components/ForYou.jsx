import { FaImage, FaRegSmile, FaMapMarkerAlt, FaCalendarAlt, FaRegFile, FaEllipsisH, FaComment, FaRetweet, FaHeart, FaEye, FaBookmark, FaShareAlt, FaFacebook, FaInstagram, FaGoogle, FaTwitter } from 'react-icons/fa'; 
import Perfil from '../assets/perfil.jpeg';

const users = [
    {
      id: 1,
      name: "Lucas",
      username: "@andrelucs___",
      time: "2h",
      postText: "Bem-vindo ao Twitter",
      profilePic: Perfil,
      social: "Twitter",
      socialIcon: <FaTwitter size={24} className="text-blue-500" />,
      comments: "8",
      retweets: "10",
      likes: "178",
      visualizacao: "4.8k",
    },
    {
      id: 2,
      name: "Google",
      username: "@google",
      time: "4h",
      postText: "Explorando novos recursos do Search!",
      profilePic: "/path/to/google-logo.jpg", // Substitua pelo link correto
      social: "Google",
      socialIcon: <FaGoogle size={24} className="text-gray-600" />,
      comments: "15",
      retweets: "22",
      likes: "340",
      visualizacao: "9.6k",
    },
    {
      id: 3,
      name: "Facebook",
      username: "@facebook",
      time: "6h",
      postText: "Temos novidades incríveis para nossos usuários!",
      profilePic: "/path/to/facebook-logo.jpg", // Substitua pelo link correto
      social: "Facebook",
      socialIcon: <FaFacebook size={24} className="text-blue-700" />,
      comments: "20",
      retweets: "18",
      likes: "250",
      visualizacao: "8.4k",
    },
    {
      id: 4,
      name: "Instagram",
      username: "@instagram",
      time: "1d",
      postText: "Compartilhando momentos especiais.",
      profilePic: "/path/to/instagram-logo.jpg", // Substitua pelo link correto
      social: "Instagram",
      socialIcon: <FaInstagram size={24} className="text-pink-500" />,
      comments: "12",
      retweets: "16",
      likes: "420",
      visualizacao: "12.6k",
    }
  ];
  
  const ForYou = () => {
    return (
      <div className=''>
        <div className="flex flex-col border-slate-300 border-opacity-30 border-b-2  h-32 p-3">
          <div className="flex gap-4 items-start">
            <img
              src={Perfil}
              alt="perfil"
              className="h-12 rounded-full border-2"
            />
  
            {/* Área de post */}
            <div className="flex-1 ml-2 mt-2">
              <input className="text-2xl font-semibold mb-4 bg-black text-slate-300 border-none border-inherit" placeholder='What is happening?!'/>
              <div className="flex items-center justify-between">
                <div className="flex gap-8 text-blue-500">
                  <FaImage size={19} />
                  <FaRegFile size={19} /> 
                  <FaRegSmile size={19} />
                  <FaCalendarAlt size={19} />
                  <FaMapMarkerAlt size={19} />
                </div>
  
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Lista de postagens */}
        {users.map((user) => (
          <div key={user.id} className='p-4 border-slate-300 border-opacity-30 border-b-2'>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <div className="text-2xl rounded-full h-12 w-12 bg-slate-900 p-3">
                  {user.socialIcon}
                </div>
                <div className='gap-2 flex flex-col'>
                    <div className='flex gap-2'>
                    <h2 className='font-bold'>{user.name}</h2>
                    <p className='text-slate-300'>{user.username}</p>
                    <p className='text-slate-300'>° {user.time}</p>
                    </div>
                    <div>
                    <div className=''>{user.postText}</div>
  
                    </div>
                </div>
                
              </div>
              <div>
                <FaEllipsisH className='text-slate-300' />
              </div>
            </div>
            
            {/* Interações */}
            <div className='flex mt-2 ml-14   justify-between text-slate-300  opacity-80'>
                <div className='flex gap-16 justify-between'>
                <div className='flex items-center gap-1 '>
                <FaComment size={15} className="" />
                <div>{user.comments}</div>
              </div>
              <div className='flex items-center gap-1 text-slate-300 opacity-80'>
                <FaRetweet size={20} className="" />
                <h2>{user.retweets}</h2>
              </div>
              <div className='flex items-center gap-1 text-slate-300 opacity-80'>
                <FaHeart size={20} className="" />
                <h1>{user.likes}</h1>
              </div>
              <div className='flex items-center gap-1 text-slate-300 opacity-80'> 
                <FaEye size={20} className="" />
                <h1>{user.visualizacao}</h1>
              </div>
                </div>
              

              <div className='flex gap-2 flex-end'>
              <div className='flex items-center gap-1 text-slate-300 opacity-80'>           
                <FaBookmark size={20} className="" />
              </div>
              <div className='flex items-center gap-1 text-slate-300 opacity-80'>
                <FaShareAlt size={20} className="" />
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ForYou;
  