import React from "react";
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,
CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles.js'

const cards=[1,2,3,4,5,6,7,8,9]
 

const App=()=>{

    const classes=useStyles();

    return(
        <>

        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon className={classes.icon}/>
                <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
        </AppBar>

        <main>
        <div className={classes.container}>
            <Container maxWidth="sm" style={{marginTop:'100px'}}>
            <Typography variant="h2" align="center" color="textPrimary"
            gutterBottom>
                    Photo Album
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde soluta illum vel quam? Quo quis quaerat saepe tenetur eos perspiciatis est vel, culpa, beatae optio, facilis voluptates voluptatem aut sit.
            </Typography>

            <div className={classes.button}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary">
                            See my photos
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary Action
                        </Button>
                    </Grid>

                </Grid> 
            </div>
            
            </Container>
        </div>  
        <Container className={classes.cardGrid} maxWdith="md">
            <Grid container spcaing={4}>
                {cards.map((card)=>(
   <Grid item key={card} xs={12} sm={6} md={4} lg={2}>
   <Card className={classes.card}>
       <CardMedia
           className={classes.cardMedia}
           image="https://source.unsplash.com/random"
           title="Image title"
       />
       <CardContent className={classes.cardContent}>
           <Typography gutterBottom variant="h5">
               Heading
           </Typography>
           <Typography>
               This is a media card . You can use this section to describe the content/
           </Typography>
       </CardContent>
       <CardActions>
           <Button size="small" color="primary">View</Button>
           <Button size="small" color="primary">Edit</Button>
       </CardActions>
        </Card>
    </Grid>
                ))}      
            </Grid>
        </Container>  
        </main>
         
        <footer className={classes.footer}>
            
        </footer>
        </>
    );
}

export default App;