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
        let newList=this.state.testList;
        let newListT = newList.filter((item)=>item.id !== movie.id);
        this.setState({testList:newListT});
        movie.isInWatchlist=false;
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