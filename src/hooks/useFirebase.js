import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, getIdToken } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);


                // Send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    history.replace('/');
                }).catch((error) => {

                });

            })
            .catch((error) => {
                // ..
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            setUser(user);
            getIdToken(user)
                .then(token => {
                    localStorage.setItem('token', token)

                })

            setIsLoading(false);
            console.log(user);

        });
    }, [auth])


    return {
        user,
        isLoading,
        registerUser,
    }
};

export default useFirebase;