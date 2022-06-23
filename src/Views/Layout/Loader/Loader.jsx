import React from 'react'
import "./Loader.scss";
function Loader() {
    return (
        <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <div className="double-bounce1" />
                    <div className="double-bounce2" />
                </div>
            </div>
        </div>
    )
}

export default Loader
