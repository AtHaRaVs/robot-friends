import React from "react";

const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--black bg-light-yellow"
                type="serach"
                placeholder="Search Robots" 
                onChange={searchChange}/>
        </div>
    );
}
export default Searchbox;