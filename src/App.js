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
        this.handleListClickEvent = this.handleListClickEvent.bind(this);
    }

    handleListClickEvent(event, list) {
        console.log('handleListClickEvent() called with list: ', list.name);
        this.setState({ currList: list});
    }

    handleItemAddEvent() {
        var arr = this.state.items.slice();
        arr.push(new ItemData('', false, this.state.currList));
        this.setState({ items: arr });
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
        console.log('the last item of items: ', this.state.items[this.state.items.length - 1]);
    }

    render() {
        return (
            <div className="container bg-primary">
                <SearchBar />
                <div className="row">
                    <ListPane lists={this.props.lists} onListClick={this.handleListClickEvent} />
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