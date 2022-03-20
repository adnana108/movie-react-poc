import React from "react"
import  {MovieList} from "./SearchBar"


class WatchList extends React.Component{

    constructor(props){
        super(props)
        this.state={
            testList:props.watchlist
        }
        this.removeFromList = this.removeFromList.bind(this)
    }

      removeFromList(movie){
        console.log("Removing " + movie.title + " from watchlist");
        let newList=this.state.testList;
        let newListT = newList.filter((item)=>item.id !== movie.id);
        console.log("Setting new state");
        console.log(newListT);
        this.setState({testList:newListT});
        movie.isInWatchlist=false;
        console.log(">>>");
        console.log("Removed " + movie.title + " from watchlist");
        console.log(this.state.testList);
      }

    render(){
        return(
            <div>
                <MovieList removeFromList={this.removeFromList} movies={this.state.testList} />
            </div>
        )
    }
}
   

export default WatchList