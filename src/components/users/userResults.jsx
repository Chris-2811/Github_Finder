import React from 'react'
import {useEffect, useState} from 'react' // useEffect for right when site loads
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        setUsers(data)
        setLoading(false)
    }


    // xl: = on large screens


    if(!loading) {
        return (
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {users.map((user) => (
                  <UserItem key={user.id} user={user} />
              )
              )}
          </div>
        )
    } else {
        return <Spinner />
    }
}

export default UserResults