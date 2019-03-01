import React from 'react';

const ListItem = function (props) {
    console.log('ListItem()\nprops.item: ', props.item);
    const style = {
        textDecoration: props.item.done ? 'line-through' : 'none'
    }

    const handleItemOnClick = function (event) {
        props.onItemClick(event, props.item);
    }
    return (
        <li style={style}>
            <input type="checkbox" checked={props.item.done} onChange={handleItemOnClick}/>
            { props.item.text }
        </li>
    );
};

export default ListItem;