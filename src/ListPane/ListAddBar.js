import React from 'react';

const ListAddBar = function (props) {

    const handleAddListButtonClick = () => {
        props.onListAddClick();
    }

    return (
        <div className="container bg-success m-1">
            <button onClick={handleAddListButtonClick}>Add List</button>
        </div>
    );
};

export default ListAddBar;