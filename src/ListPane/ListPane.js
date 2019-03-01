import React from 'react';
import ListAddBar from './ListAddBar';
import ListsViewer from './ListsViewer';

const ListPane = function () {
    return (
        <div className="container bg-secondary m-1">
            #ListPane
            <ListAddBar className="row"/>
            <ListsViewer className="row"/>
        </div>
    );
};

export default ListPane;