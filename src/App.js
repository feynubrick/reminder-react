import React from 'react';
import SearchBar from './SearchBar';
import ListPane from './ListPane/ListPane';
import MainPane from './MainPane/MainPane';

const App = function () {
    return (
        <div className="container bg-primary">
            <SearchBar />
            <ListPane />
            <MainPane />
        </div>
    );
}

export default App;