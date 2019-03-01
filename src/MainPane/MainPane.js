import React from 'react';
import TitleBar from './TitleBar';
import ListItemsViewer from './ListItemsViewer';
import CompletedItemsViewer from './CompletedItemsViewer';

const MainPane = function (props) {
    return (
        <div className="bg-secondary m-1 col-9">
            #MainPane
            <TitleBar currList={props.currList} onAddButtonClick={props.onAddButtonClick} />
            <CompletedItemsViewer />
            <ListItemsViewer items={props.items} currList={props.currList} />
        </div>
    );
}

export default MainPane;