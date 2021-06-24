import React from 'react';
import './SearchBox.css'

const SearchBox=({onInputChange})=>{
    return(
        <div className="search-Container">
            <input 
            onChange={(event)=>onInputChange(event.target.value)}
            placeholder="Type keywords" className="search-input"></input>
        </div>
    )
}

export default SearchBox;