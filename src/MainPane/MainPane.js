import React from 'react';
import TitleBar from './TitleBar';
import ListItemsViewer from './ListItemsViewer';
import CompletedItemsViewer from './CompletedItemsViewer';

const MainPane = function (props) {
    return (
        <div className="bg-secondary m-1 col-9">
            #MainPane
            <TitleBar currList={props.currList} onAddButtonClick={props.onAddButtonClick} />
            <CompletedItemsViewer items={props.items} currList={props.currList} onItemClick={props.onLiskItemClick} />
            <ListItemsViewer items={props.items} currList={props.currList} onItemClick={props.onLiskItemClick} />
        </div>
    );
}

export default MainPane;