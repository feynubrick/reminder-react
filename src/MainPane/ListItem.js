import React from 'react';

const ListItem = function (props) {
    // console.log('ListItem()\nprops.item: ', props.item);
    const style = {
        textDecoration: props.item.done ? 'line-through' : 'none',
        color: props.selectedItem === props.item ? 'blue' : 'black'
    }

    const handleItemOnClick = function (event) {
        if(props.selectedItem !== undefined) {
            props.onItemClick(event, props.item);
        }
    }

    const handleCheckboxOnChange = function (event) {
        props.onCheckboxClick(event, props.item);
    }

    const handleEditModeInputChange = function (event) {
        props.onChangeItemEdit(event, props.item);
    }

    const handleKeyEvent = function (event) {
        console.log('handleKeyPress() with event.key: ', event.key);
        if (event.key === 'Enter' && props.editModeItem === props.item) {
            props.onBlur();
        }

        if (event.key === 'Escape' && props.editModeItem !== props.item) {
            props.onDelete(event, props.item);
        }
    }

    return (
        <li style={style}>
            <input type="checkbox" checked={props.item.done} onChange={handleCheckboxOnChange}/>
            {
                props.editModeItem === props.item ? 
                <input 
                    type="text" 
                    value={props.item.text} 
                    onChange={handleEditModeInputChange} 
                    onBlur={props.onBlur} 
                    autoFocus={true} 
                    onKeyPress={handleKeyEvent}
                    size="auto"
                    outline="none"
                /> 
                : <span 
                    onClick={handleItemOnClick} 
                    onBlur={props.onBlur} 
                    onKeyDown={handleKeyEvent} 
                    tabIndex="0">{props.item.text}</span>
            }
        </li>
    );
};

export default ListItem;