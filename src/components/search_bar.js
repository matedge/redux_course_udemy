import React, { Component } from "react";

//  functional comoponent 

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }

}

export default SearchBar;
