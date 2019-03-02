import React from 'react';

const List = function (props) {

    const style = {
        // color: props.selectedItem === props.list ? 'blue' : 'black'
    }

    let className = 'list-group-item';
    className += props.selectedItem === props.list ? ' active' : '';

    const handleListClick = function (event) {
        props.onListClick(event, props.list);
    }

    const handleEditModeInputChange = function (event) {
        props.onChangeItemEdit(event, props.list);
    }

    const handleKeyEvent = function (event) {
        console.log('handleKeyPress() with event.key: ', event.key);
        if (event.key === 'Enter' && props.editModeItem === props.list) {
            props.onBlur();
        }

        if (event.key === 'Escape') {
            props.onDelete(event, props.list);
        }
    }

    return (
        <li className={className} onClick={handleListClick} style={style}>
            {
                props.editModeItem === props.list ? 
                <input 
                    type="text"
                    value={props.list.name}
                    onChange={handleEditModeInputChange}
                    onBlur={props.onBlur}
                    autoFocus={true}
                    onKeyPress={handleKeyEvent}
                    size={15}
                    outline="none"
                    onKeyDown={handleKeyEvent} 
                    tabIndex="0"
                /> 
                : <span 
                    onClick={handleListClick} 
                    onBlur={props.onBlur}
                    onKeyDown={handleKeyEvent} 
                    tabIndex="0"
                >
                {props.list.name}</span>
            }
        </li>
    );
};

export default List;