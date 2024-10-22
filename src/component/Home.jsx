import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeTheme } from '../store/themeSlice/ThemeSlice'
const Home = () => {
    const dispatch =  useDispatch()
    const data = useSelector((state)=> state.ThemeSlice)

  return (
    <div>
      <h1>Home</h1>
      {data.theme}
      <button onClick={()=>{dispatch(changeTheme("light"))}}>Change</button>
    </div>
  )
}

export default Home
