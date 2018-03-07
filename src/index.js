import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = "AIzaSyCIWfq5tAtn1nPCaXAkjg2a0uOPUgeWfn4";

// create a new Component. This component produces some html 

// const App = function() {
//     return <div>HI</div>;
// }
// FUNCTIONAL COMPONENT APP CANNOT KEEP TRACK OF STATE
// const App = () => {
//     return (
//      <div>
//         <SearchBar />
//      </div>    
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("surfboards");  
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: "jerry of the day" }, data => {
          this.setState({ 
              videos: data, 
              selectedVideo: data[0] 
            }); // can use just {videos} if we name our data arg as video. es6
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// put this componenent into the dom 

ReactDOM.render(<App />, document.querySelector('.container'));