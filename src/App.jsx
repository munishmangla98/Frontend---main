// import React from 'react'
import Home from "./home/Home"
import Allblogs from "./Allblogs/Allblogs"
import {Navigate, Route, Routes } from "react-router-dom"
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Blogdetails from "./components/Blogdetails";
import Addcomment from "./components/Addcomment";
// import UserProfile from "./components/UserProfile"
import WriteBlog from "./components/Writebolgs";
import { useAuth } from "./context/AuthProvider";
import UserProfile from "./Userprofile/UserProfile";
import Userblogupdate from "./components/Userblogupdate";
import Userblogupdateform from "./components/Userblogupdateform";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser,setAuthUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allblogs" element={<Allblogs />} />
        {/* <Route path="/Userprofile" element={<UserProfile />} /> */}
        <Route path="/UserProfile" element={ authUser ? <UserProfile /> : <Navigate to="/signup" /> } />
        <Route path="/Blogdetails/:id" element={authUser ? <Blogdetails />: <Navigate to="/signup" /> } />
        <Route path="/Userblogupdate/:id"  element={authUser ? <Userblogupdate /> : <Navigate to="/signup" /> }/>
        <Route path="/Userblogupdateform" element={authUser ? <Userblogupdateform />: <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Addcomments" element={authUser ? <Addcomment /> : <Navigate to="/signup" /> }/>
        <Route path="/writeblog"
          element={authUser ? <WriteBlog /> : <Navigate to="/signup" />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Toaster />
    </>
  )
}

export default App
