// 1. Import React, ReactDOM
// 2. Get API
// 3. DOM layout
// 4. Add event listener
// 5. Add CSS styling

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            index: 0,
            colorIndex: 0
        }
    }

    render() {
        return (
            <div id="wrapper">
                Hello Again!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));