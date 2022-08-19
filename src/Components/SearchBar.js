import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SearchBar = ( {searchValue, setSearchValue, setCurrentUrl} ) => {

    const shouldDisplayClearButton = searchValue.length > 0
    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    function searchButton () {
        setSearchValue(searchValue)
    }

    const clearSearch = () => {
        setSearchValue('')
        setCurrentUrl('https://swapi.dev/api/people/?page=1')
    }

    return (
        <>
            <input type='text' value={searchValue} onChange={handleInputChange} placeholder='Search by Name'/>
            {shouldDisplayClearButton && <button onClick={clearSearch}>X</button>}
            <button onClick={searchButton}>Search</button>        
        </>
    )
}

export default SearchBar
