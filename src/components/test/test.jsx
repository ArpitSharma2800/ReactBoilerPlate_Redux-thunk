import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseNum, increaseNum } from '../../redux/example/exampleRed'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function Test () {
  const dispatch = useDispatch()
  const classes = useStyles()
  const exampleEntry = useSelector(state => state.Example)
  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        React Boiler plate code with Redux Thunk
      </Typography>
      <Typography variant="h2" gutterBottom>
        {exampleEntry.number}
      </Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => dispatch(increaseNum(1))}>+</Button>
        <Button onClick={() => dispatch(decreaseNum(1))}>-</Button>
      </ButtonGroup>

    </div>
  )
}
