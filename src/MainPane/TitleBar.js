import React from 'react';

const TitleBar = function (props) {
    return (
        <div className="row m-1">
            <h1 className="m-3">{ props.currList.name }</h1>
            <button type="button" className="m-3 btn btn-secondary btn-xs" onClick={props.onAddButtonClick} >Add Item</button>
        </div>
    );
};

export default TitleBar;