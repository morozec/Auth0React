import React, { useState, useEffect } from 'react'

const Profile = (props) => {

    const [userName, setUserName] = useState('noname')
    const [userSub, setUserSub] = useState('')
    const { auth0 } = props

    const hrc = async () => {
        const redirectResult = await auth0.handleRedirectCallback();
    }

    const getUser = async () => {        
        //logged in. you can get the user profile like this:
        const user = await auth0.getUser();
        console.log(user);
        setUserName(user.name)
        setUserSub(user.sub)

        const claims = await auth0.getIdTokenClaims()

        console.log(claims)
    }

    //in your callback route (<MY_CALLBACK_URL>)
    useEffect(() => {    
        hrc()    
        getUser()
    }, [])

    const addQqq = () => {
        const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1VWkJOa1UyTjBJNVJqRTBNRUpHT1RoRVFVVXpSVE5DTkVSQ056QTRSRVkzTlRKQ04wTkNPQSJ9.eyJpc3MiOiJodHRwczovL21vcm96ZWMuYXV0aDAuY29tLyIsInN1YiI6IkVqN1c2OGEzUHp6UkI0Z2Z1OU4xMTFjZEFlSmdGNmFHQGNsaWVudHMiLCJhdWQiOiJodHRwczovL21vcm96ZWMuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1Njc0OTYxMDIsImV4cCI6MTU2NzU4MjUwMiwiYXpwIjoiRWo3VzY4YTNQenpSQjRnZnU5TjExMWNkQWVKZ0Y2YUciLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.GLbQBsLF6jcBGsY47hpjdfjqhXdRutzYQZpEO7PHM82hNq-HOKMurKWvVK-iT04uPM2jik2Q_nE04nC9MH3kX4NfUQyXHkXZR4arXmxpPXOlu4x5N22co8UW3XnJIyjOZCiETBp2EpGP312jEWp97D_obD1wczve1ZBTWPkUzjIOqmGRfHfxiDZuuwANPc0F3IYK8Unm_3l1xyiXJ4rlGB8Kr6jc3ykyB_iErORvwCB0FUO25-XCBtBnEsyhy6_mPqRWIRfMYCIlzWJoHwS3ZJ3yTExEC67UQxJNs_xU65yj9ZkNPsHqOGGj-OK4Kmfoab7ifw6XPPdwHNVvqDEuPw'

        const user_metadata = {
            user_metadata: {
                home: '123 Main Street, Anytown, ST 12345'
            }
        }

        fetch(`https://morozec.auth0.com/api/v2/users/${userSub}`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json' },
            body: JSON.stringify(user_metadata)
        }).then(() => {
            getUser()
        });

    }

    return (
        <div>
            <p>{`I am profile of ${userName}`}</p>
            <button onClick={addQqq}>Add qqq</button>
        </div>

    )


}

export default Profile