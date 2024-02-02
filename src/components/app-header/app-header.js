import React from "react";

import "./app-header.css";

const AppHeader = ({allPosts ,liked}) => {
    return (
        <div className="app-header d-flex" >
            <h1>Echeistov Ilya</h1>
            <h2>{allPosts} записей, их них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;