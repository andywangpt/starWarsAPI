import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./SearchBar.css"

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
				<div
					id="searchBar"
					class="container d-flex justify-content-center m-auto p-2"
				>
					<div class="">
						<input
							type="text"
							class=""
							value={userInput}
							onChange={handleInputChange}
							placeholder="Search by Name"
						/>

						{shouldDisplayClearButton && (
							<button onClick={clearSearch}>X</button>
						)}

						<button onClick={searchButton} type="button" class="btn btn-dark">
							<span class="glyphicon glyphicon-search"></span> Search
						</button>
					</div>
				</div>
			</>
		);
}

export default SearchBar
