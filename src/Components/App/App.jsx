import React,{useState} from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';


const name=require('@rstacruz/startup-name-generator');


//functional component
const App=()=>{
    const [headerText,setheaderText]=useState("Name It!");
    const [headerExpanded,setheaderExpanded]=useState(true);
    const [SuggestedName,setSuggestedName]=useState([]);
  
    const handleInputChange=(inputText)=>{
        setheaderExpanded(!inputText);
        setSuggestedName(inputText?name(inputText):[]);
           
          };

   return(
    <div><Header headerTitle={headerText} headerExpanded={headerExpanded}/> 
      <SearchBox onInputChange={handleInputChange}/>
      <ResultsContainer SuggestedName={SuggestedName}/>
      </div>
   )
   };
//Class based component
// class App extends React.Component{

//     state={
//         headerText:"Name It!",
//         headerExpanded:true,
//         SuggestedName :[],
//     };

// handleInputChange=(inputText)=>{
    
//   this.setState({
//       headerExpanded:!inputText,
//     SuggestedName:inputText?name(inputText):[],
// });
// }

//     render(){
//         return(
// <div><Header headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded}/> 
// <SearchBox onInputChange={this.handleInputChange}/>
// <ResultsContainer SuggestedName={this.state.SuggestedName}/>
// </div>
//         )
        
//     }
// }



export default App;