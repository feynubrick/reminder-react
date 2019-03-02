import React from 'react';
import ListItem from './ListItem';

const ListItemsViewer = function (props) {
    console.log('props.list: ', props.currList);
    return (
        <div className="container">
            <ul className="list-group">
                {
                    props.items.filter(
                        (item) => (item.list === props.currList && item.done === false)
                    ).map(
                        (item) => (<ListItem
                                item={item}
                                key={item.id}
                                onCheckboxClick={props.onCheckboxClick}
                                onItemClick={props.onItemClick}
                                selectedItem={props.selectedItem}
                                editModeItem={props.editModeItem}
                                onChangeItemEdit={props.onChangeItemEdit}
                                onBlur={props.onBlur}
                                onDelete={props.onDelete}
                            />)
                    )
                }
            </ul>
        </div>
    );
};

export default ListItemsViewer;