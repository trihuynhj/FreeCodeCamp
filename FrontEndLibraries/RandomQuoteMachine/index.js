// 1. Import React, ReactDOM
// 2. Get API
// 3. DOM layout
// 4. Add event listener
// 5. Add CSS styling

// API to get the JSON quotes
const quoteAPI = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            index: 0,
            colorIndex: 0
        }
    }

    // Fetch quotes from API once component has been mounted
    componentDidMount() {
        fetch(quoteAPI)
            .then(response => response.json())
            .then(data => {
                // getRandomIndex can be executed as a callback within setState
                this.setState({quotes: data.quotes}, this.getRandomIndex);
            });
    }

    // Generate a random quote from JSON
    getRandomIndex() {
        const { quotes } = this.state;
        
        if (quotes.length > 0) {
            const _index = Math.floor(Math.random() * quotes.length);
            const _colorIndex = Math.floor(Math.random() * txtCol.length);
            this.setState({
                index: _index,
                colorIndex: _colorIndex
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                Hello Again!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));