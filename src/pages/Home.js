import '../App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';

const Home = () => (
    <div className="App">
        <Container>
            <>
            <Typography
                variant="h4"
                component="h2"
                martinTop={5}
                marginBottom={3}
            >
            The World of The Avengers
            </Typography>
        <Grid container spacing={5}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />

        </Grid>

            </>
            <br/>
            <br/>
        <button><a href="./pages/Trailers.js">Movie Trailers</a></button>

        </Container>


    </div>
)




export default Home;