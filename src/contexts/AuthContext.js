import React, {useState, useEffect} from 'react';
import firebaseConfig from '../firebase';

// define context 
export const AuthContext = React.createContext();

// define logic

export const AuthProvider = ({children}) => {
    const [load, setLoad] = useState(true);
    const [currUser, setCurrUser] = useState(null);

    useEffect(() => {
        // check who is already logged in
        firebaseConfig.auth().onAuthStateChanged((user) => {
            setCurrUser(user);
            setLoad(false)
        });
    }, []);

    if(load) {
        return <p className='loading'>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{
            currUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

