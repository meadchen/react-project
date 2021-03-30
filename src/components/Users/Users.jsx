import React from 'react';
import s from './Users.module.css'

let Users = (props) =>{

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/236x/c3/94/de/c394de30177603f905dbb2b413e37875.jpg',
                followed: false,
                name: 'Anna',
                status: 'Hi, how are you? :)',
                location: 'Berlin'
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/236x/c3/94/de/c394de30177603f905dbb2b413e37875.jpg',
                followed: true,
                name: 'Bogdana',
                status: 'Viva la JS!',
                location: 'Lviv'
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/236x/c3/94/de/c394de30177603f905dbb2b413e37875.jpg',
                followed: true,
                name: 'Vova',
                status: 'No pasaran!',
                location: 'Nikolaiev'
            },
            {
                id: 4,
                photoUrl: 'https://i.pinimg.com/236x/c3/94/de/c394de30177603f905dbb2b413e37875.jpg',
                followed: false,
                name: 'Mama',
                status: 'Omnia mea mecum porto',
                location: 'Nikolaiev'
            }
        ])
    };

    return(
        <div>
            <div>All users</div>
            {
                props.users.map( u => <div className={ s.usersContainer } key={u.id}>
                    <div className={ s.usersLeft }>
                        <img src={u.photoUrl} alt=""/>
                        <div>
                            {u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.usersRight}>
                        <div>
                            <p>{u.name}</p>
                            <p>{u.status}</p>
                        </div>
                        <div>
                            <p>{u.location}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;