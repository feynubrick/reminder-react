import React from 'react';
import ListItem from './ListItem';

class SearchResultViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hideDoneItems: true };

        this.handleFilterDoneToggle = this.handleFilterDoneToggle.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleFilterDoneToggle(event) {
        console.log('handleFilterDoneToggle');
        this.setState({ hideDoneItems: !this.state.hideDoneItems });
    }

    handleButtonClick(event) {
        console.log(event);
        this.props.onCloseSearch(event);
    }

    render() {
        var searchResults = this.props.items.filter((item) => (item.text.indexOf(this.props.search) > -1 && (!item.done || !this.state.hideDoneItems)));
        console.log('searchResults: ', searchResults);
        return (
            <div className="container m-1">
                <h1>Search Results for "{this.props.search}"</h1>
                    { 
                        searchResults.map((item) => (
                            <ListItem 
                                item={item}
                                key={item.id}
                                onCheckboxClick={this.props.onCheckboxClick}
                                onItemClick={this.props.onItemClick}
                                selectedItem={this.props.selectedItem}
                                editModeItem={this.props.editModeItem}
                                onChangeItemEdit={this.props.onChangeItemEdit}
                                onBlur={this.props.onBlur}
                                onDelete={this.props.onDelete}
                            />
                        ))
                    }
                <button type="button" className="mt-2 mr-2 mb-2 btn btn-primary" onClick={this.handleFilterDoneToggle}>See/Hide Items Already Done</button>    
                <button type="button" className="mt-2 mb-2 btn btn-danger" onClick={this.handleButtonClick}>Close</button>
            </div>
        );
    }
}

export default SearchResultViewer;
