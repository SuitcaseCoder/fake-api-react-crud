// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Posts from './pages/Posts';
import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handlePosts();
  }, [])

  const handlePosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(posts => {
        console.log(posts);
        setPosts(posts);
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <Navbar />
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
