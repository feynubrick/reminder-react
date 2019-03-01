import React from 'react';
import ListItem from './ListItem';
import StatusBar from './StatusBar';

const CompletedItemsViewer = function (props) {
    return (
        <div className="container bg-warning m-1">
            #CompletedItemsViewer
            <StatusBar />
            <ul className="bg-info m-1">
                {
                    props.items.filter(
                        (item) => (item.list === props.currList && item.done === true)
                    ).map(
                        (item) => (<ListItem text={item.text} key={item.id}/>)
                    )
                }
            </ul>
        </div>
    );
}

export default CompletedItemsViewer;