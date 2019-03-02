import React from 'react';

const TitleBar = function (props) {
    return (
        <div className="row bg-warning m-1">
            <h1>{ props.currList.name }</h1>
            <button onClick={props.onAddButtonClick} >ItemAddButton</button>
        </div>
    );
};

export default TitleBar;