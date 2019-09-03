import React, { useState, useEffect } from 'react'

const Profile = (props) => {

    const [userName, setUserName] = useState('noname') 
    const { auth0 } = props

    //in your callback route (<MY_CALLBACK_URL>)
    useEffect(() => {
        const getUser = async () => {
            const redirectResult = await auth0.handleRedirectCallback();
            //logged in. you can get the user profile like this:
            const user = await auth0.getUser();
            console.log(user);
            setUserName(user.name)
        }
        getUser()
    }, [])


    return <div>{`I am profile of ${userName}`}</div>
}

export default Profile