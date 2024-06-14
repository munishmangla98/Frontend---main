import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Userblogs from "../components/Userblogs";
import Bolgs from "../components/Bolgs";

function UserProfile() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUsername(user.username);
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2x1 container mx-auto md:px-10 px-4 flex flex-col md:flex-row my-1 justify-center items-center">
                <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center items-center">
                    <p className="text-center">{username ? `Welcome: ${username}` : 'Loading...'}</p>
                </div>
            </div>
            <div className="min-h-screen">
                <Userblogs />
            </div>
            <Bolgs />
            <Footer />
        </>
    );
}

export default UserProfile;
