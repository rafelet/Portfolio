import React from "React"
import "../../styles/layout.scss"

const Layout = ({ children }) => {
    return (
        <div className="start">
            <div className="userlinks">
                <h1 className='logo'>
                    Rafa Leal - <span>Copywriter</span>
                </h1>
                {/* <img className="avatar" src="https://gifimage.net/wp-content/uploads/2018/11/lupita-nyong-16.gif"/> */}
                <nav className="menu">
                    {/* <a href="">logout</a>
                    <a href="">controls</a>
                    <a href="">alerts</a>
                    <a href="">messages</a>
                    <a href="">link</a> */}
                </nav>
                <div className="social-links">
                    <a href="https://www.behance.net/rafaleal" target="_blank" className="circletoggle behance" title="toggle site links"></a> 
                    <a href="https://www.instagram.com/rafelet3/" target="_blank" className="circletoggle instagram" title="toggle user links"></a>
                    <a href="https://www.linkedin.com/in/rafael-francisco-leal-verdú-746351239/" target="_blank" className="circletoggle linkedin" title="toggle user links"></a>
                </div>
            </div>
            {/* <main> */}
                <div id="normalstar"></div>
                <div id="star"></div>
                {children}
            {/* </main> */}
        </div>
    )
}

export default Layout