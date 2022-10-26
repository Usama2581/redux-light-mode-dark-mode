// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './Store/Action/themeAction'


function App() {
  
  const dispatch = useDispatch()
  
  const theme = useSelector((state) => state.themeReducer.theme)
  console.log(theme)
  


  const light = {
    color: 'black',
    backgroundColor: 'gray',
    width: '100vw',
    height: '100vh'
  }

  const dark = {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    color: 'white'
  }
  
  
  

  const handleInput = () => {
    if(document.querySelector('input[name="input"]:checked')){
      dispatch(darkTheme(dark))
    }
    else{
      dispatch(lightTheme(light))
    }
  }
  return (
    <div className="App" style={theme} >
     <h1> hello!!  </h1>
     <input type="checkbox" onChange={handleInput} name='input' /> DARK THEME
    </div>
  );
}

export default App;
