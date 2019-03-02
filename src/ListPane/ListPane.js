import React from 'react';
import ListAddBar from './ListAddBar';
import ListsViewer from './ListsViewer';
import SearchBar from './SearchBar';

const ListPane = function (props) {
    return (
        <div className="span2" >
            <SearchBar onChange={props.onChangeSearch} search={props.search} />
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