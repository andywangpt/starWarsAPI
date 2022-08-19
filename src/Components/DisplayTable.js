import React, {useEffect} from 'react';
import axios from 'axios'

export default function DisplayTable( {data, pageNumber, setPageNumber, nextUrl, prevUrl, setCurrentUrl} ) {

    if(data.length === 0) {
        return <p>Data is loading</p>
    }
    const shouldDisplayPrevPageButton = pageNumber > 1
    const shouldDisplayNextPageButton = data.length >= 10

    const displayTableData = () => {
        
        let characterData = []

        for(let i = 0; i < data.length; i++) {
            characterData.push(
                <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{data[i].name}</td>
                    <td>{data[i].height}</td>
                    <td>{data[i].mass}</td>
                    <td>{data[i].birth_year}</td>
                    <td>{data[i].homeworldName || "Loading"}</td>
                    <td>{data[i].speciesName || "Loading"}</td> 
                </tr>
            )
        }
        return characterData
    }

    const nextPage = () => {
        if(nextUrl) {
            setCurrentUrl(nextUrl)
            setPageNumber(pageNumber + 1)
            console.log("pageNumber: ", pageNumber)   
        }
    }

    const previousPage = () => {
        if(prevUrl) {
            setCurrentUrl(prevUrl)
            setPageNumber(pageNumber - 1)
        }
    }

    return (
        <>
            <table className="table">  
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Height</th>
                        <th scope='col'>Mass</th>
                        <th scope='col'>Birth Year</th>
                        <th scope='col'>Planet</th>
                        <th scope='col'>Species</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTableData()}
                </tbody>
            </table>
            <div className='page-navigation'>
                {shouldDisplayPrevPageButton && <button onClick={previousPage}>Previous Page</button>}
                <p className='page-number'>Page {pageNumber}</p>
                {shouldDisplayNextPageButton && <button onClick={nextPage}>Next Page</button>}
            </div>
        </>
    )
}
