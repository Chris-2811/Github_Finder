import React from 'react'
import {useContext} from 'react' // useEffect for right when site loads
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {

    const {users, loading,} = useContext(GithubContext)
   
    

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