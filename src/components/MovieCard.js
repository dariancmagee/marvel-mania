import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'

const MovieCard = () => {
    return (
       <Grid item xs={3}>
        <Paper elevation={5} square>
            
            <Box>
            <Typography variant="subtitle1" component="h2">
                Avengers Earth's Mightiest Heroes
            </Typography>
            </Box>
        </Paper>
       </Grid>
    );
}

export default MovieCard;