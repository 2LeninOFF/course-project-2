import React, {useState} from 'react'
import Users from './components/users'
import api from './api'
import SearchStatus from './components/searchStatus'



const App = () => {

  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {

    setUsers((prevState) =>
      prevState.filter((item) => {
        return item._id !== userId;
      })
    );
  };
  const handleToggleBookmark = (id) => {
    setUsers((prevState) => 
        prevState.map((user) =>
            user._id === id ? {...user, bookmark: !user.bookmark} : user
        )
    )
  }
    return (
        <>
            <SearchStatus length={users.length} />
            {users.length > 0 && (
                <Users 
                    users={users} 
                    onDelete = {handleDelete} 
                    onToggleBookmark = {handleToggleBookmark}
                />)}
        </>
        
    )
}

export default App