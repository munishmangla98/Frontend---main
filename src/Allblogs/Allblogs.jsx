// import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Allblog from "../components/Allblog"
function Allblogs() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen">
                <Allblog/>
            </div>

            <Footer />
        </>
    )
}

export default Allblogs
