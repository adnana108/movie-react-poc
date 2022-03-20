import SearchBar from "./SearchBar";

const HomePage = (props) =>{
    return(
        <div>
            <SearchBar addToList={props.addToWatchList} removeFromList={props.removeFromList} />
        </div>
    )
}

export default HomePage