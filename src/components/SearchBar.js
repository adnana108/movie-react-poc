import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Radio, FormControlLabel, FormControl, RadioGroup} from "@mui/material"  
import { Typography } from '@mui/material';
import { SearchMovies, SearchMoviesBasedOnActors } from '../assets/API';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Grid} from "@mui/material"
import { ThemeProvider } from '@mui/material';
import theme from "../assets/theme"

export default class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
            searchValue:"movies"
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.getValue = this.getValue.bind(this)
    }

    getValue(e){
        const {value} = e.target;
    
        this.setState({
          searchValue:value
        })
        console.log(value)
      }

    onClickHandler(){
        let value = document.getElementById("editText").value
        console.log(value)
        this.state.searchValue === "movies" ?
        SearchMovies(value).then(res=>{
            this.setState({movies:res.data.results})
            console.log(res.data.results)
        })
        : SearchMoviesBasedOnActors(value).then((res)=>{
            let results = res.data.results;
            let resultList = [];
            for (let i=0; i<results.length;i++){
                for (let j=0; j<results[i].known_for.length; j++){
                    resultList.push(results[i].known_for[j]);
                }
            }
            this.setState({movies:resultList})
            console.log(resultList)
        })
    }
    render(){
        return(
        <div>

            <div style={{ 
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:15
            }}>

            <TextField
            id="editText"
            label= "Search Movie"
            style={{
                backgroundColor:"white"}}
                >
            </TextField>
            <ThemeProvider theme={theme}>
                <Button
                    sx={{margin:"20px"}}
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={this.onClickHandler}
                    >
                    Search
                </Button>

                <FormControl >
                        <RadioGroup
                            id="radio"
                            row
                            defaultValue="movies"
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            onClick={this.getValue}
                            > 
                            <FormControlLabel 
                            value="movies"
                            control={<Radio color="secondary"/>} 
                            label={<Typography color="extra">Movies</Typography>} />
                            <FormControlLabel 
                            value="actors" 
                            control={<Radio color="secondary"/>} 
                            label={<Typography color="extra">Actors</Typography>} />
                                
                        </RadioGroup>
                    </FormControl>
                </ThemeProvider>
                </div>
            <MovieList removeFromList={this.props.removeFromList} addToList={this.props.addToList} movies={this.state.movies} />
        </div>
        )
    }
}

export const MovieList = (props) =>{
    
    return(
        <div>
            <Grid
            container 
            >
             {props.movies.map((movie)=> (
                <Grid
                key={movie.id}
                item
                display="flex"
                justifyContent="center"
                sx={{mt:2}}
                xs={4} 
                >
                    <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title={movie.title}
                        subheader={movie.release_date}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {movie.overview}
                        </Typography>
                    </CardContent>
                    {movie.isInWatchlist ? 
                        <CardActions disableSpacing>
                            <Button 
                            onClick={() => props.removeFromList(movie)}
                            >
                            Remove from watchlist
                            </Button>
                        </CardActions>
                        :
                        <CardActions disableSpacing>
                            <Button 
                            onClick={() => props.addToList(movie)}
                            >
                            Add to watchlist
                            </Button>
                        </CardActions>
                         
                    }
                    </Card>
                </Grid>
             ))}   
            </Grid>
        </div>
    )
}

// export default function SearchBar() {
//     const [value, setValue] = useState(" ");
//     const [searchMode, setSearchMode] = useState ("movies")

   
//   return (
//       <div>
//         <TextField
//         label= "Search Movie"
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value)
//           console.log("test corina", e.target.value)
//         }}
//        >
//        </TextField>
//        <Button
//        onClick={
//            SearchMovies(value)
//            .then(res=>{
//                console.log(res)
//            })
//         }
//        >Search</Button>

//        <FormControl >
//             <RadioGroup
//                 value = {searchMode}
//                 onClick={(e) => {
//                     setSearchMode(e.target.value);
//                     console.log(e.target.value)
//                 }}
//                 row
//                 aria-labelledby="demo-controlled-radio-buttons-group"
//                 name="controlled-radio-buttons-group"
//             > 
//                 <FormControlLabel 
//                 value="movies"
//                 control={<Radio color="secondary"/>} 
//                 label={<Typography color="primary">Movies</Typography>} />
//                 <FormControlLabel 
//                 value="actors" 
//                 control={<Radio color="secondary"/>} 
//                 label={<Typography color="primary">Actors</Typography>} />
                    
//             </RadioGroup>
//         </FormControl>
//       </div>
       
//   )
// }