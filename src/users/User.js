import React from 'react';
import Users from './Users';

// const testData = [
//     { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
//     { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
//     { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
// ];

const User = (props) => {
    return <div>
        {props.profiles.map((item,index) => <Users key={index} {...item} />)}
    </div>
}

export default User;

