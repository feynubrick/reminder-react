import React from 'react';
import ListAddBar from './ListAddBar';
import ListsViewer from './ListsViewer';

const ListPane = function (props) {
    return (
        <div className="container bg-secondary m-1">
            #ListPane
            <ListAddBar className="row"/>
            <ListsViewer className="row" lists={props.lists}/>
        </div>
    );
};

export default ListPane;