import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { changeTheme } from './store/themeSlice/ThemeSlice';
import Home from './component/Home';
const App = () => {
  const dispatch =  useDispatch();
  const data = useSelector((state)=> state.ThemeSlice);
  console.log(data)
  return (
    <div>
      <h1>React toolkit</h1>
      <h1>{data.theme}</h1>
   <button onClick={()=>dispatch(changeTheme("dark"))}>Change</button>
   <Home/>
    </div>
  )
}

export default App
