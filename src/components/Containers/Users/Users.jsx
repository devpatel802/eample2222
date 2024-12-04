import React from 'react'
import style from "./Users.module.css";
import MainCon from '../../../skeletons/MainCon/MainCon';
import UserContainer from '../../../skeletons/UserContainer/UserContainer';
import { users } from '../../../Data/User';


function Users() {
    return (
        <MainCon>
            {/* Users */}
            <h3 className={style.users}>Users</h3>

            {/* selection*/}
            <select name="user-selection" id="user-selection" className={style.select}>
                <option value="Property List (30 Char)/All Users Option">Property List (30 Char)/All Users Option</option>
                <option value="Active Users (15 Char) / User List Option">Active Users (15 Char) / User List Option</option>
                <option value="Recent Users (20 Char) / User Activity Option">Recent Users (20 Char) / User Activity Option</option>
                <option value="VIP Users (18 Char) / Premium Access Option">VIP Users (18 Char) / Premium Access Option</option>
                <option value="Guest Users (25 Char) / Guest Access Option">Guest Users (25 Char) / Guest Access Option</option>
            </select>


            {/* Adresses */}

            {users.map(user => (
                <UserContainer
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    pin={user.pin}
                    addr={user.addr}
                    mcolor={user.mcolor}
                    pcolor={user.pcolor}
                    lcolor={user.lcolor}
                    acolor={user.acolor}
                />
            ))}
        </MainCon>
    )
}

export default Users
