import { Card } from 'antd';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: '', hits: []};
    }

    onSearch = event => {
        event.preventDefault();
        const { query } = this.state;

        if (query === '') {
            return ;
        }

        const cachedHits = localStorage.getItem(query);

        if (cachedHits) {
            this.setState({hits: JSON.parse(cachedHits)});
        } else {
            fetch('http://hn.algolia.com/api/v1/search?query=' + query)
            .then(response => response.json())
            .then(result => this.onSetResult(result, query));
        }
    }

    onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result.hits));
        this.setState({hits: result.hits});
    };

    onChange = event => {
        this.setState({ query: event.target.value });
    };

    render() {
        const style = {
            width: '100',
            margin: '30px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            border: '1px solid #e8e8e8',
        };
        return (
            <Card hoverable={true} style={style}>
                <h1>Search Hacker News with Local Sotrage</h1>
                <p>
                    There shouldn't be a second network request, when you search 
                    for a keyword twice.
                </p>
                <form onSubmit={this.onSearch}>
                    <input type="text" onChange={this.onChange} />
                    <button type="submit">Search</button>
                </form>

                {this.state.hits.map(item => (
                    <div key={item.objectID}>{item.title}</div>
                ))}
            </Card>
        );
    }
}

export default App;