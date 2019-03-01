import React from 'react';
import List from './List';

const ListsViewer = function () {
    return (
        <div className="container bg-success m-1">
            #ListsViewer
            <List title="list 1" />
            <List title="list 2" />
            <List title="list 3" />
            <List title="list 4" />
            <List title="list 5" />
        </div>
    );
};

export default ListsViewer;