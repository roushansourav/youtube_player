import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyCe6qwI3rBz_RqSbkU5up2MvdZYnL3cRWE';

class App extends Component {
  constructor(props){
    super(props);
    this.state={video:[]};
    YTSearch({key:API_KEY,term:'surfboards'},(data)=>{this.setState({video:data})});
    
    
  }
  render() {
   
    return (
      <div>
      {console.log(this.state.video)}
      <SearchBar />  
      </div>
    );
  }
}

export default App;
