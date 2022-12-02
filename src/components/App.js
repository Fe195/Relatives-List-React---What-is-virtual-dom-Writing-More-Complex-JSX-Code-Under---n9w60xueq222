import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                <li key="relativeListItem1">Fely Sam Lalu</li>
                <li key="relativeListItem1">Feny Tom Lalu</li>
                <li key="relativeListItem1">Feby Gee Lalu</li>
               </ol>
            </div>
        )
    }
}


export default App;
