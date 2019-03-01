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

    const handleEnterKeyPress = function (event) {
        console.log('handleEnterKeyPress() with event.key: ', event.key);
        if (event.key === 'Enter') {
            props.onBlur();
        }
    }

    return (
        <li style={style}>
            <input type="checkbox" checked={props.item.done} onChange={handleCheckboxOnChange}/>
            {
                props.editModeItem === props.item ? 
                <input type="text" value={props.item.text} onChange={handleEditModeInputChange} onBlur={props.onBlur} autoFocus={true} onKeyPress={handleEnterKeyPress}/> 
                : <span onClick={handleItemOnClick} onBlur={props.onBlur}>{props.item.text}</span>
            }
        </li>
    );
};

export default ListItem;