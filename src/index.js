import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ListData, ItemData} from './DataDef';

var lists = ['test1', 'test2', 'test3'];
lists = lists.map((listName) => (
    new ListData(listName)
));

lists.forEach((list) => {
    for (var i = 0; i < 5; i++) {
        list.items.push(new ItemData(`${list.name}: item${i}`));
    }
});


ReactDOM.render(<App lists={lists} />, document.getElementById('root'));