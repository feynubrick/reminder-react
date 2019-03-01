import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ListData, ItemData} from './DataDef';

var lists = ['odd', 'even'];
lists = lists.map((listName) => (
    new ListData(listName)
));


var items = [];
for (var i = 0; i < 10; i++) {
    items.push(new ItemData(`${lists[i % 2].name}: item${i}`, false, lists[i % 2]));
}

ReactDOM.render(<App lists={lists} items={items}/>, document.getElementById('root'));