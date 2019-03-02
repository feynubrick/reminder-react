import React from 'react';

const StatusBar = function (props) {
    var doneItems = props.items.filter((item) => (item.done && item.list === props.currList));
    return (
        <div className="container m-1">
            {`Completed Items: ${doneItems.length}`}
        </div>
    );
}

export default StatusBar;