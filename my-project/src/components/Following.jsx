const Following = () => {
    const posts = [
      { id: 1, content: 'Bem-vindo ao Twitter clone! 🌟' },
      { id: 2, content: 'Aprenda React e conquiste o mercado de trabalho. 🚀' },
      { id: 3, content: 'Tailwind CSS é incrível para estilização rápida. 🎨' },
    ];
  
    return (
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-800 p-4 rounded-md mb-4 shadow-lg text-slate-300"
          >
            {post.content}
          </div>
        ))}
      </div>
    );
  };
  
  export default Following;
  