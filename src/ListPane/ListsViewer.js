import React from 'react';
import List from './List';

const ListsViewer = function (props) {
    return (
        <div className="container bg-success m-1">
            #ListsViewer
            <ul>
                {
                    props.lists.map((list) => (
                        <List name={list.name} key={list.id}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default ListsViewer;