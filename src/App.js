import './App.css';
import PrimarySearchAppBar from './components/Header';
import {Routes, Route} from "react-router-dom"
import HomePage from './components/Home';
import WatchList from './components/WatchList';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
        watchlist:[]
    }
    this.addToWatchList = this.addToWatchList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
}

addToWatchList(movie){
  let newList = this.state.watchlist;
  newList.push(movie);
  movie.isInWatchlist=true;
  this.setState({watchlist:newList});
}

removeFromList(movie){
  let newList=this.state.watchlist;
  let newListT = newList.filter((item)=>item.id !== movie.id);
  this.setState({watchlist:newListT});
  movie.isInWatchlist=false;
}

render(){
  return (
    <div>
      <PrimarySearchAppBar />
        <Routes>
            <Route index element={<HomePage addToWatchList={this.addToWatchList} removeFromList={this.removeFromList} />} />
            <Route path="/watchlist" element={<WatchList watchlist={this.state.watchlist}/>} />
        </Routes>

    </div>
  );
  }
}

export default App;
