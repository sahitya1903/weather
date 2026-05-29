import './App.css'
import Button from "@mui/material/Button"
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from '@mui/material';

function App() {
  let handleClick=()=>{
    console.log('Button was clicked');
  }
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button>Click Me!</Button>
      <Button variant='contained' onClick={handleClick} color='success'>Click Me 2!</Button>
      <Button variant='contained' onClick={handleClick} disabled>Click Me 3!</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity='error'>Alert Button given</Alert>
    </>
  )
}

export default App
