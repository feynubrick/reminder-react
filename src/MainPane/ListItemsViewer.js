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
                        (item) => (item.list === props.currList)
                    ).map(
                        (item) => (<ListItem text={item.text} key={item.id}/>)
                    )
                }
            </ul>
        </div>
    );
};

export default ListItemsViewer;