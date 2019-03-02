import React from 'react';

const ListAddBar = function (props) {

    const handleAddListButtonClick = () => {
        props.onListAddClick();
    }

    return (
        <button type="button" className="mb-2 btn btn-primary btn-block" onClick={handleAddListButtonClick}>Add List</button>
    );
};

export default ListAddBar;