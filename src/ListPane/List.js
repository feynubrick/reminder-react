import React from 'react';

const List = function (props) {

    const handleListClick = function (event) {
        props.onListClick(event, props.list);
    }

    return (
        <li onClick={handleListClick}>
            {props.list.name}
        </li>
    );
};

export default List;