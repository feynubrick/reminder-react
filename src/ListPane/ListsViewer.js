import React from 'react';
import List from './List';

const ListsViewer = function (props) {
    return (
        <div className="container">
            <ul className="list-group list-group-flush">
                {
                    props.lists.map((list) => (
                        <List 
                            list={list}
                            key={list.id}
                            onListClick={props.onListClick}
                            selectedItem={props.selectedItem}
                            editModeItem={props.editModeItem}
                            onChangeItemEdit={props.onChangeItemEdit}
                            onBlur={props.onBlur}
                            onDelete={props.onDelete}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default ListsViewer;