// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Posts from './pages/Posts';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
