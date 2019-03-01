import React from 'react';
import ListItem from './ListItem';

const ListItemsViewer = function (props) {
    console.log('props.list: ', props.list);
    return (
        <div className="container bg-warning m-1">
            #ListItemsViewer
            <ul className="bg-info">
                {
                    props.list.items.map((item) => (
                    <ListItem text={item.text} key={item.id}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default ListItemsViewer;