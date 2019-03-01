import React from 'react';
import ListAddBar from './ListAddBar';
import ListsViewer from './ListsViewer';

const ListPane = function (props) {
    return (
        <div className="bg-secondary m-1 col">
            #ListPane
            <ListAddBar className="row"/>
            <ListsViewer className="row" lists={props.lists}/>
        </div>
    );
};

export default ListPane;