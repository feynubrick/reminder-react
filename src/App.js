import React from 'react';
import SearchBar from './SearchBar';
import ListPane from './ListPane/ListPane';
import MainPane from './MainPane/MainPane';
import {ListData, ItemData} from './DataDef';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currList: props.lists[0],
            items: props.items,
            lists: props.lists,
        };

        this.handleItemAddEvent = this.handleItemAddEvent.bind(this);
    }

    handleItemAddEvent() {
        var arr = this.state.items.slice();
        arr.push(new ItemData('', false, this.state.currList));
        this.setState({ items: arr });
    }

    render() {
        return (
            <div className="container bg-primary">
                <SearchBar />
                <div className="row">
                    <ListPane lists={this.props.lists} />
                    <MainPane 
                        items={this.state.items}
                        currList={this.state.currList}
                        onAddButtonClick={this.handleItemAddEvent}
                    />
                </div>
            </div>
        );
    }
}

export default App;