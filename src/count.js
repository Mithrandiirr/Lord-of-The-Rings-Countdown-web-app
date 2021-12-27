import React, { Component } from "react";
import Clock from "./clock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: "September,2,2022" };
    }
    render() {
        return (
            <div className="App">
                {/* <div className="App-date">{this.state.deadline}</div> */}
                <Clock deadline={this.state.deadline} />
            </div>
        );
    }
}
export default App;
