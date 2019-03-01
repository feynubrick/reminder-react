import React from 'react';
import ListItem from './ListItem';

const ListItemsViewer = function () {
    return (
        <div className="container bg-warning m-1">
            #ListItemsViewer
            <ul className="bg-info">
                <ListItem text="ListItem 1"/>
                <ListItem text="ListItem 2"/>
                <ListItem text="ListItem 3"/>
                <ListItem text="ListItem 4"/>
                <ListItem text="ListItem 5"/>
            </ul>
        </div>
    );
};

export default ListItemsViewer;