import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [video, setVideo] = useState(null);

  const fetchVideo = async () => {
    const res = await axios.get(`http://localhost:5000/video?query=${query}`);
    setVideo(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Meal or Exercise Video</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. abs workout, protein shake"
      />
      <button onClick={fetchVideo}>Search</button>

      {video && !video.error && (
        <div>
          <h3>{video.title}</h3>
          <img src={video.thumbnail} alt="thumbnail" />
          <br />
          <a href={video.url} target="_blank" rel="noreferrer">Watch Video</a>
        </div>
      )}

      {video && video.error && <p>{video.error}</p>}
    </div>
  );
}

export default App;
