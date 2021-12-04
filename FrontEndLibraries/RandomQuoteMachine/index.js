// 1. Import React, ReactDOM
// 2. Get API
// 3. DOM layout
// 4. Add event listener
// 5. Add CSS styling

// API to get the JSON quotes
const quoteAPI = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

// Color Palette
const txtCol = [
    "#2c6e49", // Spring Green
    "#a60067", // Flirt
    "#6153cc", // Iris
    "#961d4e", // Jazzberry Jam
    "#0d2c54", // Prussian Blue
    "#f6511d", // Red Orange Color Wheel
    "#ffb400", // Honey Yellow
    "#4d4861", // Independence
    "#de541e", // Flame
    "#3f3f37", // Black Olive
    "#6e4555", // Eggplant
    "#3a3238", // Black Coffee
    "#000022", // Oxford Blue
    "#dd1c1a", // Maximum Red
    "#3f6c51", // Amazon
    "#157a6e", // Pine Green
    "#b56576", // Rose Dust
    "#e56b6f", // Candy Pink
    "#a63a50", // Amaranth Purple
    "#582b11"  // Seal Brown
];

// Background-color Palette
const bgCol = [
    "#40a16a",
    "#d9439f",
    "#8e82e8",
    "#bf4375",
    "#3c6396",
    "#f57b56",
    "#ffd166",
    "#7d759e",
    "#de7850",
    "#91917e",
    "#b3708a",
    "#857280",
    "#5757bd",
    "#de5f5d",
    "#6ab086",
    "#2aa89a",
    "#d9899a",
    "#e58e91",
    "#d67286",
    "#b0663c"
];


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

            // Bind component functions to state
            this.getRandomIndex = this.getRandomIndex.bind(this);
        }
    }

    render() {
        // State's properties
        const { quotes, index, colorIndex } = this.state;
        // Current quote
        const currentQuote = quotes[index];
        // Twitter Plugin
        const twitterURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=${currentQuote && currentQuote.quote} - ${currentQuote && currentQuote.author}`;

        return (
            <div className="wrapper">
                Hello Again!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));