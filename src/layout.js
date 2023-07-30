import React from "react";

const Layout =() =>{
    return (
        <div className="full-ht full-wid">
            <div className="full-ht base-grid">
                <div className="content-grid">
                    <div className="sidebar">
                        <div className="centered-flex" style={{backgroundColor: 'cadetblue'}}>Menu</div>
                        <div className="centered-flex" style={{backgroundColor: 'brown'}}>Lirary</div>
                    </div>
                    <div className="centered-flex" style={{backgroundColor: 'darkmagenta'}}>Content</div>
                </div>
                <div className="centered-flex" style={{backgroundColor: 'blueviolet'}}>player</div>
            </div>
        </div>
    )
}

export default Layout