import { Component } from 'react';

import './App.css';

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
        
      </section>
    );
  }
}

export default App;