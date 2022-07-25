import React, { useState, useEffect} from 'react'
import getEntrypoints from './services/getEntrypoints'
import { AppContainer } from './components'


const App = () => {
  const [entrypoints, setEntrypoints] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleGetEntrypoints = async () => {
    try {
      setIsLoading(true)
      const response = await getEntrypoints()
      setEntrypoints(response.results)
    } catch(err) {
      console.error(err)
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    handleGetEntrypoints()
  }, [])

  if(isLoading) return <div>Loading...</div>

  return (
    <AppContainer>{
      entrypoints.map(entrypoint => <div>{entrypoint._id}</div>)
    }</AppContainer>
  )
}

export default App