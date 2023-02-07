import React from 'react';

export default function DisplayTable( {data, pageNumber, setPageNumber, nextUrl, prevUrl, setCurrentUrl} ) {

    if(data.length === 0) {
        return <h3 class="d-flex flex-column align-items-center">Data is loading...</h3>
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
				<table className="table m-2">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Height</th>
							<th scope="col">Mass</th>
							<th scope="col">Birth Year</th>
							<th scope="col">Planet</th>
							<th scope="col">Species</th>
						</tr>
					</thead>
					<tbody>{displayTableData()}</tbody>
				</table>

				<div class="page-navigation d-flex justify-content-center m-1 p-1">
					{shouldDisplayPrevPageButton && (
						<button class="btn btn-dark" onClick={previousPage}>
							Previous Page
						</button>
					)}
					<h5 class="page-number m-2">Page {pageNumber}</h5>
					{shouldDisplayNextPageButton && (
						<button type="button" class="btn btn-dark" onClick={nextPage}>
							Next Page
						</button>
					)}
				</div>
			</>
		);
}
