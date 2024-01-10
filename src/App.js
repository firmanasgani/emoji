import {useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Input from './components/Input'

const App = () => {
  const [emojisData, setEmojisData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)
      try{
        const res = await axios.get('https://api-request.bbg.co.id/api/assets')
        setEmojisData(res.data)
        setLoading(false)
      }catch(error) {
        console.error(error)
        setError(true)
        setLoading(false)
      }
    }

    fetchEmojis()
  }, [])

  const handleSearchEmojis = (event) => {
    setSearchText(event.target.value)
  }

  return(
    <>
      <Navbar />
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
      </Container>
    </>
  )
}

export default App