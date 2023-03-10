// import Form from "react-bootstrap/Form";
// import React, {useEffect, useState} from "react";
// import Button from "react-bootstrap/Button";
// import {UserInfoComponent} from "../../components/UserInfoComponent";
//
// export function TestLoginPage() {
//     const [username, setUsername] = useState('')
//     const [userPassword, setUserPassword] = useState('')
//
//     const showAlert = () => {
//         alert(`${username} ${userPassword}`)
//     }
//     const onChangeUsername = (e) => {
//         setUsername(e.target.value)
//     }
//     const onChangeUserPassword = (e) => {
//         setUserPassword(e.target.value)
//     }
//     useEffect(()=>{
//         document.title = `Hi ${username}!`
//     }, [username])
//     return (
//         <>
//             <form onSubmit={showAlert}>
//                 <h6>name</h6>
//                 <input placeholder='enter your name' onChange={onChangeUsername}/>
//                 <h6>password</h6>
//                 <input type='password' placeholder='enter password' onChange={onChangeUserPassword}/>
//                 <button>Submit</button>
//             </form>
//             <UserInfoComponent username={username} password={userPassword}></UserInfoComponent>
//         </>
//
//
//     )
// }
