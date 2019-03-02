import React from 'react';

const SearchBar = function (props) {

    const onInputChange = (event) => {
        console.log('SearchBar Input: ', event.target.value);
        props.onChange(event);
    }

    return (
        <div className="input-group">
            <input className="m-2 input-group-text" onChange={onInputChange} placeholder="Search..." value={props.search} ></input>
        </div>
    );
};

export default SearchBar;