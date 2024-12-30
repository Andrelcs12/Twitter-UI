const STUDYTWT = () => {
    const posts = [
      { id: 1, content: 'Dicas de estudo para ser mais produtivo! 📚' },
      { id: 2, content: 'Planeje suas metas de estudo com eficiência. ✅' },
      { id: 3, content: 'Grupos de estudo ativos e cheios de insights! 🤓' },
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
  
  export default STUDYTWT;
  