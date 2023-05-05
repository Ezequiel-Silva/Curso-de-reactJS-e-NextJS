import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    posts: []
  };
  componentDidMount(){
    this.loadPosts();
  }
  loadPosts = async () => {
    const postsResponse = fetch('http://jsonplaceholder.typicode.com/posts');
    const [posts] = await Promise.all([postsResponse]);
    const postsJson = await posts.json();
    this.setState({ posts: postsJson });
  }
  render(){
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
