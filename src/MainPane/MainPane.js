import React from 'react';
import TitleBar from './TitleBar';
import ListItemsViewer from './ListItemsViewer';
import CompletedItemsViewer from './CompletedItemsViewer';

const MainPane = function () {
    return (
        <div className="container bg-secondary m-1">
            #MainPane
            <TitleBar className="row" />
            <ListItemsViewer className="row" />
            <CompletedItemsViewer className="row" />
        </div>
    );
}

export default MainPane;