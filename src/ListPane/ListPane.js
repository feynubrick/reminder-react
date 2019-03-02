import React from 'react';
import ListAddBar from './ListAddBar';
import ListsViewer from './ListsViewer';
import SearchBar from './SearchBar';

const ListPane = function (props) {
    return (
        <div className="bg-secondary m-1 col">
            #ListPane
            <SearchBar />
            <ListAddBar className="row" onListAddClick={props.onListAddClick} />
            <ListsViewer
                className="row"
                lists={props.lists}
                onListClick={props.onListClick}
                selectedItem={props.selectedItem}
                editModeItem={props.editModeItem}
                onChangeItemEdit={props.onChangeItemEdit}
                onBlur={props.onBlur}
                onDelete={props.onDelete}
            />
        </div>
    );
};

export default ListPane;