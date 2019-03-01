import React from 'react';
import SearchBar from './SearchBar';
import ListPane from './ListPane/ListPane';
import MainPane from './MainPane/MainPane';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container bg-primary">
                <SearchBar />
                <ListPane lists={this.props.lists}/>
                <MainPane currentList={this.props.lists[0]} />
            </div>
        );
    }
}

export default App;