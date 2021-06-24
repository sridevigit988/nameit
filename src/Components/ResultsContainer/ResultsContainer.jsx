import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';


const ResultsContainer=({SuggestedName})=>{
    const suggestnameArry=SuggestedName.map(SuggestedName=>{
        return <NameCard key={SuggestedName} SuggestedName={SuggestedName}/>;
    })
    return <div className="results-Container">
         {suggestnameArry} 
    </div>
}

export default ResultsContainer;