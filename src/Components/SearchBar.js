import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SearchBar = ( {searchValue, setSearchValue, setCurrentUrl} ) => {

   
    const [userInput, setUserInput] = useState('')
    const shouldDisplayClearButton = userInput.length > 0

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
        //setSearchValue(e.target.value)
    }

    function searchButton () {
        setSearchValue(userInput)
    }

    const clearSearch = () => {
        setUserInput('')
        setCurrentUrl('https://swapi.dev/api/people/?page=1')
    }

    return (
        <>
            <input type='text' value={userInput} onChange={handleInputChange} placeholder='Search by Name'/>
            {shouldDisplayClearButton && <button onClick={clearSearch}>X</button>}
            <button onClick={searchButton}>Search</button>        
        </>
    )
}

export default SearchBar
