import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';


const name=require('@rstacruz/startup-name-generator');

//Class based component
class App extends React.Component{

    state={
        headerText:"Name It!",
        headerExpanded:true,
        SuggestedName :[],
    };

handleInputChange=(inputText)=>{
    
  this.setState({
      headerExpanded:!inputText,
    SuggestedName:inputText?name(inputText):[],
});
}

    render(){
        return(
<div><Header headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded}/> 
<SearchBox onInputChange={this.handleInputChange}/>
<ResultsContainer SuggestedName={this.state.SuggestedName}/>
</div>
        )
        
    }
}

//functional component
//function App(){
 //   return <h1>this is functional component</h1>
//}

export default App;