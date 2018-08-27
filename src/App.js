import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY='AIzaSyCe6qwI3rBz_RqSbkU5up2MvdZYnL3cRWE';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null
    };
    this.videoSearch('surfboards');
    
  }

  render() {
      const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);

      return (
      <div className="main ">
      <SearchBar onSearchTermChange={videoSearch} /> 
      <div className="second-main">
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})} />
       </div>
      </div>
    );
  }
  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos, 
        selectedVideo:videos[0]}
      )}
    );
  }
}

export default App;
