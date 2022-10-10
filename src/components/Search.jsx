import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user'/>
            </div>
            <div className="userChat">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCgOHqiZoaFFNKeQ9aW3qRnUfK58MZsxOVA&usqp=CAU" alt="" />
                <div className="userChatInfo">
                    <span>Arun</span>
                </div>
            </div>
        </div>
    )
}

export default Search;