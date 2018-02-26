import React from 'react'
import ReactDOM from 'react-dom'

// create a new Component. This component produces some html 

// const App = function() {
//     return <div>HI</div>;
// }

const App = () => {
    return <div>HIHI</div>;
}

// put this componenent into the dom 

ReactDOM.render(<App />, document.querySelector('.container'));