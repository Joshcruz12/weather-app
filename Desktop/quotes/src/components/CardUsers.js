import users from '../users.json';
import React, { useState } from 'react';


const User = () => {

    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

    const randomIndex = Math.floor(Math.random() * users.length);

    const [index, setIndex] = useState(0);
    
    const changeUser = () => {

        const randomIndex = Math.floor(Math.random() * users.length);

        setIndex(randomIndex);
    }
    const changeColor = () => {

        const randomColor = Math.floor(Math.random() * colors.length);

    }
    document.body.style = `background-color: ${colors[randomIndex]}`;

    return (
        <div className="container">
            <div className="cardUser">
                <h1 className="userName">{users[index].name.title} {users[index].name.first} {users[index].name.last}</h1>
                <img className="userImg" src={users[index].picture.large} alt="userImg" />
                <div className="cardFooter">
                    <ul className="cardList">
                        <li className="listItem"><i class="fa-solid fa-envelope-circle-check"></i> {users[index].email}</li>
                        <li className="listItem"><i class="fa-solid fa-location-dot"></i> {users[index].location.street.name} {users[index].location.street.number}</li>
                        <li className="listItem"><i class="fa-solid fa-phone"></i> {users[index].phone}</li>
                    </ul>
                    <button style={{color: colors[index] }} className="btn" onClick={changeUser}>Next User</button></div>

            </div>
        </div>

    );
}

export default User