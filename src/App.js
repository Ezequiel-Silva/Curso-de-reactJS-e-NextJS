import { Component } from 'react';

import './App.css';

import { PostCard } from './components/PostCard';
import { loadPosts } from './utils/load-posts';

class App extends Component{
  state = {
    posts: []
  };
  async componentDidMount(){
    await this.loadPosts();
  }
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }
  render(){
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover} 
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;