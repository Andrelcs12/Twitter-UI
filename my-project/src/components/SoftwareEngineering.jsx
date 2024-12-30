const SoftwareEngineering = () => {
    const posts = [
      { id: 1, content: 'Descubra as melhores práticas de desenvolvimento! 💻' },
      { id: 2, content: 'Novidades sobre frameworks e bibliotecas de 2024. 🔧' },
      { id: 3, content: 'Como estruturar projetos escaláveis em React. 🚀' },
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
  
  export default SoftwareEngineering;
  