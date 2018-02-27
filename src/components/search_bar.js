import React, { Component } from "react";

//  functional comoponent 

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {

    constructor(props) {
        super(props);  //calls the same function on the parent ie what this extends from (component)

        this.state = { term: ''};

    }

    render() {
        return(
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )}

}

export default SearchBar;
