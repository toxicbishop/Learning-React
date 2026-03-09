import React, { Component } from 'react';

class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
      selectedUserId: '', // Empty means 'All'
    };
  }

  // Lifecycle method: Component has been rendered for the first time
  componentDidMount() {
    this.fetchPosts();
  }

  // Lifecycle method: Component has updated (props or state changed)
  componentDidUpdate(prevProps, prevState) {
    // Only re-fetch if the selectedUserId has changed
    if (prevState.selectedUserId !== this.state.selectedUserId) {
      this.fetchPosts();
    }
  }

  fetchPosts = async () => {
    this.setState({ loading: true, error: null });
    
    try {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      
      // If a specific user is selected, filter the API call
      if (this.state.selectedUserId) {
        url += `?userId=${this.state.selectedUserId}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      this.setState({
        posts: data,
        loading: false
      });
    } catch (err) {
      this.setState({
        error: err.message || 'Failed to fetch posts',
        loading: false,
        posts: []
      });
    }
  };

  handleUserChanged = (event) => {
    this.setState({ selectedUserId: event.target.value });
  };

  handleRefresh = () => {
    // Force a re-fetch manually
    this.fetchPosts();
  };

  render() {
    const { posts, loading, error, selectedUserId } = this.state;

    // Generate array [1...10] for dropdown options
    const userOptions = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
      <div className="user-posts-wrapper">
        <div className="controls">
          <div className="filter-group">
            <label htmlFor="user-select">Filter by User:</label>
            <select 
              id="user-select" 
              value={selectedUserId} 
              onChange={this.handleUserChanged}
              disabled={loading && !posts.length} // Disable only if initial load
            >
              <option value="">Show All Users</option>
              {userOptions.map(id => (
                <option key={id} value={id}>User {id}</option>
              ))}
            </select>
          </div>
          
          <button 
            className="refresh-btn" 
            onClick={this.handleRefresh} 
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>

        {/* Conditional Rendering based on state */}
        {error && <div className="error">Error: {error}</div>}
        
        {loading && <div className="loading">Loading posts...</div>}
        
        {!loading && !error && posts.length === 0 && (
          <div className="empty">No posts found.</div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="posts-container">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <span className="post-meta">Post #{post.id} • User {post.userId}</span>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default UserPosts;
