import React, { useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel' 
import FormControl from '@material-ui/core/FormControl' 
import { jsonSchema } from 'uuidv4';
import {useHistory} from 'react-router-dom'

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: 'violet',
//     '&:hover': {
//       backgroundColor: 'blue'
//     }
//   },
//   title:{
//    textDecoration: 'underline',
//    marginBottom: 20
//   }
// })


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: ' block'
  }
})



export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }


    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      })
      .then(() => history.push('/'))
    }
  }
  return (
    <Container>



      <Typography
        // className={classes.title}
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Creat a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}

        />



        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Note Details"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />
        {/* <RadioGroup>
        <Radio value="hello" />
        <Radio value="goodbye" />
        </RadioGroup> */}

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value="money" control={<Radio/>} label="Money"/>
        <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
        <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
        <FormControlLabel value="work" control={<Radio/>} label="Work"/>
        </RadioGroup>
        </FormControl>

        <Button
          // className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >Submit
        </Button>
      </form>






      {/* <br/>
    <AcUnitOutlinedIcon/>
    <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
    <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
    <AcUnitOutlinedIcon color="action" fontSize="small"/>
    <AcUnitOutlinedIcon color="error" fontSize="small"/>
    <AcUnitOutlinedIcon color="disabled" fontSize="small"/>
     */}










      {/* <Button type="submit"  >Submit</Button>
    <Button type="submit"  color="secondary" variant="outlined">Submit</Button>


<ButtonGroup color="secondary" variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup> */}


      {/* <Typography 
      variant="h1"
      color="primary"
      align="center"
      >
        Create a new note
      </Typography> */}
      {/* 
      <Typography
      noWrap
      color="secondary"
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos numquam veritatis ad accusamus atque eum, iure asperiores, illum nisi, corporis delectus minus adipisci neque sunt cumque nesciunt quo porro.
      </Typography> */}

    </Container>
  )
}
