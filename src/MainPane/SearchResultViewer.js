import React from 'react';
import ListItem from './ListItem';

const SearchResultViewer = function (props) {
    var searchResults = props.items.filter((item) => (item.text.indexOf(props.search) > -1 && !item.done));
    console.log('searchResults: ', searchResults);

    return (
        <div className="container bg-warning m-1">
            <h1>Search Results for "{props.search}"</h1>
                { 
                    searchResults.map((item) => (
                        <ListItem 
                            item={item}
                            key={item.id}
                            onCheckboxClick={props.onCheckboxClick}
                            onItemClick={props.onItemClick}
                            selectedItem={props.selectedItem}
                            editModeItem={props.editModeItem}
                            onChangeItemEdit={props.onChangeItemEdit}
                            onBlur={props.onBlur}
                            onDelete={props.onDelete}
                        />
                    ))
                }
            <button>Close</button>
        </div>
    );
}


export default SearchResultViewer;
