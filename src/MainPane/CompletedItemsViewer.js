import React from 'react';
import ListItem from './ListItem';
import StatusBar from './StatusBar';

const CompletedItemsViewer = function (props) {
    return (
        <div className="container">
            <StatusBar items={props.items} currList={props.currList} />
            <ul className="list-unstyled">
                {
                    props.items.filter(
                        (item) => (item.list === props.currList && item.done === true)
                    ).map(
                        (item) => (<ListItem
                                item={item}
                                key={item.id}
                                onCheckboxClick={props.onCheckboxClick}
                                onItemClick={props.onItemClick}
                            />)
                    )
                }
            </ul>
        </div>
    );
}

export default CompletedItemsViewer;