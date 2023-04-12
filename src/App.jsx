// import logo from './logo.svg'
// import './App.css'
// import { Users } from './Users'
// import { useState } from 'react'
// import Table from './Table'

// function App() {
//   const [query, setQuery] = useState('')

//   const keys = ['firstName', 'lastName', 'id', 'title']

//   const search = (data) => {
//     return data.filter(
//       (item) => keys.some((key) => item[key].toLowerCase().includes(query)),
//       <img
//         src={item.picture}
//         alt="Profile Picture"
//         style={{ width: '100px', height: '100px' }}
//       />,
//     )
//   }

//   // const search = (data) => {
//   //   return data.filter(
//   //     (item) =>
//   //       item.firstName.toLowerCase().includes(query) ||
//   //       item.lastName.toLowerCase().includes(query) ||
//   //       item.id.toString().toLowerCase().includes(query) ||
//   //       item.title.toLowerCase().includes(query),
//   //   )
//   // }

//   return (
//     <div className="App">
//       <input
//         type="text "
//         placeholder="Search..."
//         className="search"
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       <Table data={search(Users)} />
//       {/* <ul className="list">
//         {Users.filter((user) =>
//           user.firstName.toLowerCase().includes(query),
//         ).map((user) => (
//           <li key={user.firstName} className="listItem">
//             {user.firstName}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import './App.css'
// import { Users } from './users'

// function App() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const filteredUsers = users.filter(
//     (user) =>
//       user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   return (
//     <div className="App">
//       <h1>Profile Search</h1>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredUsers.map((user) => (
//         <div className="user" key={user.id}>
//           <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} />
//           <p>
//             {user.title} {user.firstName} {user.lastName}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Users from './Users'
// import './App.css'

// function UserProfile({ user }) {
//   return (
//     <div className="user-profile">
//       <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} />
//       <h2>{`${user.firstName} ${user.lastName}`}</h2>
//       <p>{`${user.title}.`}</p>
//     </div>
//   )
// }

// function App() {
//   const [searchQuery, setSearchQuery] = useState('')

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value)
//   }

//   const filteredUsers = Users.filter(
//     (user) =>
//       user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.lastName.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   return (
//     <div className="app">
//       <h1>Profile Search</h1>
//       <input type="text" placeholder="Search by name" onChange={handleSearch} />
//       <div className="user-list">
//         {filteredUsers.map((user) => (
//           <UserProfile key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import Users from './Users'
import './App.css'
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img
        className="profile-image"
        src={user.picture}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div className="profile-info">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>ID: {user.id}</p>
      </div>
    </div>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredUsers = Users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="app">
      <h1>Profile Search</h1>
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
      <div className="user-list">
        {filteredUsers.map((user) => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App

// import React, { useState } from 'react'
// import Users from './Users'
// import './App.css'

// function UserProfile({ user }) {
//   return (
//     <div className="user-profile">
//       <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} />
//       <h2>{`${user.firstName} ${user.lastName}`}</h2>
//       <p>{`${user.title}.`}</p>
//     </div>
//   )
// }

// function App() {
//   const [searchQuery, setSearchQuery] = useState('')

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value)
//   }

//   const filteredUsers = Users.filter(
//     (user) =>
//       user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.lastName.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   return (
//     <div className="app">
//       <h1>Profile Search</h1>
//       <input type="text" placeholder="Search by name" onChange={handleSearch} />
//       <div className="user-list">
//         {filteredUsers.map((user) => (
//           <UserProfile key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App
