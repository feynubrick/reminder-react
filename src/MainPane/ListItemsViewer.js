import React from 'react';
import ListItem from './ListItem';

const ListItemsViewer = function (props) {
    console.log('props.list: ', props.currList);
    return (
        <div className="container bg-warning m-1">
            #ListItemsViewer
            <ul className="bg-info">
                {
                    props.items.filter(
                        (item) => (item.list === props.currList && item.done === false)
                    ).map(
                        (item) => (<ListItem item={item} key={item.id} onItemClick={props.onItemClick} />)
                    )
                }
            </ul>
        </div>
    );
};

export default ListItemsViewer;