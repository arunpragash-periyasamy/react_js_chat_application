import React from 'react';

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCgOHqiZoaFFNKeQ9aW3qRnUfK58MZsxOVA&usqp=CAU" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCgOHqiZoaFFNKeQ9aW3qRnUfK58MZsxOVA&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default Message;