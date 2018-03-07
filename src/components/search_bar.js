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
            <div className="search-bar">
                <input
                value={this.state.term} //ensures that this elements value is always reflecting the state. 'Controlled componenent'
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )}

}

export default SearchBar;
