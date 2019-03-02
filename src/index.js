import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ListData, ItemData} from './DataDef';

var lists = ['할 일', '쇼핑 목록'];
lists = lists.map((listName) => (
    new ListData(listName)
));


var items = [];
var todoList = ['책 읽기', 'React 공부', '가족 여행계획!'];
for (let i = 0; i < todoList.length; i++) {
    items.push(new ItemData(`${todoList[i]}`, i % 3 === 0 ? true : false, lists[0]));
}
var shoppingList = ['모니터', '남이 사준 맥북', '의자', '무접점 키보드'];
for (let i = 0; i < shoppingList.length; i++) {
    items.push(new ItemData(`${shoppingList[i]}`, i % 3 === 0 ? true : false, lists[1]));
}

ReactDOM.render(<App lists={lists} items={items}/>, document.getElementById('root'));