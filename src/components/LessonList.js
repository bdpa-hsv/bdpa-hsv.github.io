import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    minWidth: 100,
    maxWidth: 345,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 34,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

});

const theme = createMuiTheme();

const lessons = [{ title: "Lesson 0: Setup", img: '../assets/img/toDownload.png' },
{ title: "Lesson 1:" },
{ title: "Lesson 2:" },
{ title: "Lesson 3:" },]

const listItems = lessons.map((lesson) =>
  < Grid item xs={12} sm={6} md={4}>
    <Card className={useStyles.card} >

      <CardContent borderColor="error.main" border={2}>
        <Typography variant="h4" className={useStyles.title} color="textSecondary" gutterBottom>
          {lesson.title}
        </Typography>
        <CardMedia
          component='img'
          className={useStyles.media}
          image={lesson.img}
          title="Paella dish"
        />
      </CardContent>
      <CardActions>
        <Fab variant="extended">
          <NavigationIcon className={useStyles.extendedIcon} />
          Go To Lesson
      </Fab>
      </CardActions>
    </Card>
  </Grid >
)

const LessonList = () => {

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} alignItems='center' justify='space-around'>
        {listItems}

      </Grid>
    </div >
  )
}


export default LessonList;