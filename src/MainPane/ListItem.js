import React from 'react';

const ListItem = function (props) {
    // console.log('ListItem()\nprops.item: ', props.item);
    const style = {
        textDecoration: props.item.done ? 'line-through' : 'none',
        // color: props.selectedItem === props.item ? 'blue' : 'black'
    }

    let className = 'list-group-item';
    className += props.selectedItem === props.item ? ' active' : '';
    className += props.item.done ? ' list-group-item-light' : '';

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

        if (event.key === 'Escape') {
            props.onDelete(event, props.item);
        }
    }

    return (
        <li style={style} className={className}>
            <input className="mr-3" type="checkbox" checked={props.item.done} onChange={handleCheckboxOnChange}/>
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
                    onKeyDown={handleKeyEvent} 
                    tabIndex="0"
                /> 
                : <span 
                    onClick={handleItemOnClick} 
                    onBlur={props.onBlur} 
                    onKeyDown={handleKeyEvent} 
                    tabIndex="0">
                        {props.item.text}
                </span>
            }
        </li>
    );
};

export default ListItem;