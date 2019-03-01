import React from 'react';

const List = function (props) {

    const style = {
        color: props.selectedItem === props.item ? 'blue' : 'black'
    }

    const handleListClick = function (event) {
        props.onListClick(event, props.list);
    }

    const handleEditModeInputChange = function (event) {
        props.onChangeItemEdit(event, props.list);
    }

    const handleEnterKeyPress = function (event) {
        console.log('handleEnterKeyPress() with event.key: ', event.key);
        if (event.key === 'Enter') {
            props.onBlur();
        }
    }

    return (
        <li onClick={handleListClick} style={style}>
            {
                props.editModeItem === props.list ? 
                <input 
                    type="text"
                    value={props.list.name}
                    onChange={handleEditModeInputChange}
                    onBlur={props.onBlur}
                    autoFocus={true}
                    onKeyPress={handleEnterKeyPress}
                /> 
                : <span onClick={handleListClick} onBlur={props.onBlur}>{props.list.name}</span>
            }
        </li>
    );
};

export default List;