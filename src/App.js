import React from 'react';
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
            selectedItem: null,
            editModeItem: null,
        };

        this.listCount = 1;

        this.handleItemAddEvent = this.handleItemAddEvent.bind(this);
        this.handleListClickEvent = this.handleListClickEvent.bind(this);
        this.handleItemClickEvent = this.handleItemClickEvent.bind(this);
        this.handleItemCheckboxClickEvent = this.handleItemCheckboxClickEvent.bind(this);
        this.handleListAddEvent = this.handleListAddEvent.bind(this);
        this.handleItemEditChange = this.handleItemEditChange.bind(this);
        this.handleItemEditBlur = this.handleItemEditBlur.bind(this);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }

    handleDeleteEvent(event, itemToDelete) {
        console.log('delete event! with item: ', itemToDelete);

        if (itemToDelete instanceof ItemData) {
            console.log('ItemData');
            let index = -1;
            for (let i = 0; i < this.state.items.length; i++) {
                if (this.state.items[i] === itemToDelete) {
                    index = i;
                    break;
                }
            }
            console.log('index: ', index);
            this.state.items.splice(index, 1);
            this.setState({ items: this.state.items });
        } else if (itemToDelete instanceof ListData) {
            console.log('ItemData');
            let index = -1;
            for (let i = 0; i < this.state.lists.length; i++) {
                if (this.state.lists[i] === itemToDelete) {
                    index = i;
                    break;
                }
            }
            let items = this.state.items.filter((item)=>(item.list !== itemToDelete));
            this.state.lists.splice(index, 1);
            this.setState({ items: items, lists: this.state.lists});
        }
    }

    handleItemEditBlur() {
        console.log('handleItemEditBlur()')
        this.setState({ selectedItem : null, editModeItem : null });
    }

    handleItemEditChange(event, item) {
        if (item instanceof ItemData) {
            item.text = event.target.value;
            this.setState({ items: this.state.items });
        } else if (item instanceof ListData) {
            item.name = event.target.value;
            this.setState({ lists: this.state.lists });
        }
    }

    handleListClickEvent(event, list) {
        console.log('handleListClickEvent() called with list: ', list.name);
        if (list === this.state.selectedItem) {
            this.setState({ editModeItem: list, selectedItem: null});
        } else {
            this.setState({ currList: list, selectedItem: list});
        }
    }

    handleItemAddEvent() {
        let newItem = new ItemData('', false, this.state.currList);
        this.state.items.push(newItem);
        this.setState({ items: this.state.items, selectedItem: newItem, editModeItem: newItem });
    }

    handleItemClickEvent(event, item) {
        console.log('handleItemClickEvent() with item: ', item);
        if (item === this.state.selectedItem) {
            this.setState({ editModeItem: item, selectedItem: null });
        } else {
            this.setState({ selectedItem: item });
        }
    }

    handleItemCheckboxClickEvent(event, item) {
        console.log('handleItemClickEvent() with item: ', item);
        item.done = !item.done;

        this.setState({ items: this.state.items, selectedItem: null});
    }

    handleListAddEvent() {
        console.log('handleListAddEvent()');
        let newItem = new ListData(`새로운 목록 ${this.listCount++}`);
        this.state.lists.push(newItem);
        this.setState({ lists : this.state.lists, selectedItem: newItem, editModeItem: newItem });
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentDidUpdate() {
        console.log('## componentDidUpdate()');
        console.log('## items: ', this.state.items);
        console.log('## selectedItem: ', this.state.selectedItem);
        console.log('## editModeItem: ', this.state.editModeItem);
    }

    render() {
        return (
            <div className="container bg-primary">                
                <div className="row">
                    <ListPane
                        lists={this.props.lists} 
                        onListClick={this.handleListClickEvent} 
                        onListAddClick={this.handleListAddEvent}
                        selectedItem={this.state.selectedItem}
                        editModeItem={this.state.editModeItem}
                        onChangeItemEdit={this.handleItemEditChange}
                        onBlur={this.handleItemEditBlur}
                        onDelete={this.handleDeleteEvent}
                    />
                    <MainPane 
                        items={this.state.items}
                        currList={this.state.currList}
                        onAddButtonClick={this.handleItemAddEvent}
                        onCheckboxClick={this.handleItemCheckboxClickEvent}
                        onItemClick={this.handleItemClickEvent}
                        selectedItem={this.state.selectedItem}
                        editModeItem={this.state.editModeItem}
                        onChangeItemEdit={this.handleItemEditChange}
                        onBlur={this.handleItemEditBlur}
                        onDelete={this.handleDeleteEvent}
                    />
                </div>
            </div>
        );
    }
}

export default App;