import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyCIWfq5tAtn1nPCaXAkjg2a0uOPUgeWfn4";

// create a new Component. This component produces some html 

// const App = function() {
//     return <div>HI</div>;
// }

const App = () => {
    return (
     <div>
        <SearchBar />
     </div>    
    );
}

// put this componenent into the dom 

ReactDOM.render(<App />, document.querySelector('.container'));