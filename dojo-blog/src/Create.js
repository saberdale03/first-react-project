import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Moshi");
  const [isLoading, setIsLoading] = useState(null);
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', { 
          method: 'POST', 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
      }).then(() => {
          console.log('Blog Added');
          setIsLoading(false);
          history.push('/');
      })
    }, 2000);  
  }

  return (
    <div className="create">
      <h2>Add a New Fucking Blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        />

        <label>Blog Author:</label>
        <select 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Dale">Dale</option>
          <option value="Hev Abi">Hev Abi</option>
        </select>
        {isLoading && <button>Minemekus Mekus Na Brother...</button>} 
        {!isLoading && <button>I Mekus Mekus Mo Na!</button>} 

      </form>
    </div>
  );
};

export default Create;
