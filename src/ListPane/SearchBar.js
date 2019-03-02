import React from 'react';

const SearchBar = function (props) {

    const onInputChange = (event) => {
        console.log('SearchBar Input: ', event.target.value);
        props.onChange(event);
    }

    return (
        <div className="row bg-secondary m-1">
            <input onChange={onInputChange} placeholder="Search..." value={props.search} ></input>
        </div>
    );
};

export default SearchBar;