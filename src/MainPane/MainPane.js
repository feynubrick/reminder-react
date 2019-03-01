import React from 'react';
import TitleBar from './TitleBar';
import ListItemsViewer from './ListItemsViewer';
import CompletedItemsViewer from './CompletedItemsViewer';

const MainPane = function (props) {
    return (
        <div className="container bg-secondary m-1">
            #MainPane
            <TitleBar />
            <CompletedItemsViewer />
            <ListItemsViewer list={props.currentList} />
        </div>
    );
}

export default MainPane;