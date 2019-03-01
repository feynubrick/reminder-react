import React from 'react';
import SearchBar from './SearchBar';
import ListPane from './ListPane/ListPane';
import MainPane from './MainPane/MainPane';
import { ListData, ItemData } from './DataDef';

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
        this.handleItemClickEvent = this.handleItemClickEvent.bind(this);
        this.handleListAddEvent = this.handleListAddEvent.bind(this);
    }

    handleListClickEvent(event, list) {
        console.log('handleListClickEvent() called with list: ', list.name);
        this.setState({ currList: list});
    }

    handleItemAddEvent() {
        this.state.items.push(new ItemData('', false, this.state.currList));
        this.setState({ items: this.state.items });
    }

    handleItemClickEvent(event, item) {
        console.log('handleItemClickEvent() with item: ', item);
        item.done = !item.done;

        this.setState({ items: this.state.items });
    }

    handleListAddEvent() {
        console.log('handleListAddEvent()');
        this.state.lists.push( new ListData(''));
        this.setState({ lists : this.state.lists });
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
                    <ListPane
                        lists={this.props.lists} 
                        onListClick={this.handleListClickEvent} 
                        onListAddClick={this.handleListAddEvent}
                    />
                    <MainPane 
                        items={this.state.items}
                        currList={this.state.currList}
                        onAddButtonClick={this.handleItemAddEvent}
                        onLiskItemClick={this.handleItemClickEvent}
                    />
                </div>
            </div>
        );
    }
}

export default App;