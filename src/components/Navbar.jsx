import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Chat App</span>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCgOHqiZoaFFNKeQ9aW3qRnUfK58MZsxOVA&usqp=CAU" alt="" />
                <span>Arun</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;