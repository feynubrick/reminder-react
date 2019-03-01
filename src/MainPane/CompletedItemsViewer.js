import React from 'react';
import ListItem from './ListItem';
import StatusBar from './StatusBar';

const CompletedItemsViewer = function () {
    return (
        <div className="container bg-warning m-1">
            #CompletedItemsViewer
            <StatusBar />
            <ul className="bg-info m-1">
                <ListItem text="CompletedListItem 1" />
                <ListItem text="CompletedListItem 2" />
            </ul>
        </div>
    );
}

export default CompletedItemsViewer;