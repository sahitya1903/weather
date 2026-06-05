import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

function App() {
  let handleClick=()=>{
    console.log('Button was clicked');
  }
  return (
    <>
      <SearchBox/>
      <InfoBox/>
    </>
  )
}

export default App
