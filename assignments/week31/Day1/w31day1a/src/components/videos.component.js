import React from 'react';
import SearchBar from './sub-components/video/SearchBar';
import axios from 'axios';
import VideoList from './sub-components/video/VideoList';
import VideoDetail from './sub-components/video/VideoDetail';
import googleConfig from '../config/google.json';

class Videos extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('');
  }

  onTermSubmit = async term => {
    const response = await axios.get('/search', {
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: googleConfig.api_key
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="auth-inner">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
            </div>
            <div className="auth-inner">
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
