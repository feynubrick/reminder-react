var itemId = 0;
var listId = 0;

const ListData = function (name) {
    this.id = listId++;
    this.name = name;
    this.items = [];
}

const ItemData = function (text, done, list) {
    this.id = itemId++;
    this.text = text;
    this.done = done ? true : false;
    this.list = list;
}

export { ListData, ItemData };