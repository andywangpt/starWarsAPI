import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayTable from './Components/DisplayTable'
import SearchBar from './Components/SearchBar';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  const [pageNumber, setPageNumber] = useState(1)
  const [currentUrl, setCurrentUrl] = useState('https://swapi.dev/api/people/?page=1')
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    async function getData() {
      const response = await axios.get(currentUrl)
      setNextUrl(response.data.next)
      setPrevUrl(response.data.previous)
      const characters = response.data.results
      for(const character of characters){
        const homeworldResponse = await axios.get(character.homeworld)
        character.homeworldName = homeworldResponse.data.name
      }
      for(const character of characters){
        const speciesResponse = await axios.get(character.species)
        character.speciesName = 
          (speciesResponse.data.name ? speciesResponse.data.name : 'Human')
      }
      setData(characters)
    }
    getData()
  }, [currentUrl])

  useEffect(() => {
    setCurrentUrl(`https://swapi.dev/api/people/?search=${searchValue}`)

    axios.get(currentUrl)
    .then(response => {
        setData(response.data.results)
    })
    .catch(error => {
        console.log(error)
    })
}, [searchValue])

  return (
    <>
      <SearchBar 
        searchValue ={searchValue} setSearchValue={setSearchValue}
        setCurrentUrl={setCurrentUrl} />
      <DisplayTable 
        data ={data}
        pageNumber={pageNumber} setPageNumber={setPageNumber}
        nextUrl={nextUrl}
        prevUrl={prevUrl}
        setCurrentUrl={setCurrentUrl} />
    </>
  )
}

export default App;

