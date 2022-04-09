import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, getIdToken, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert';

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                //Add user to db
                saveUserToDb(email, name, 'POST');

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
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(token => {
                        localStorage.setItem('token', token)

                    })
            }

            setIsLoading(false);
            console.log(user);

        });
    }, [auth])

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                //Add user to db
                saveUserToDb(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //Using location to redirect the user to his/her desired destination if the user was redirected to login page by the system. Doing this to improve the UX of the user.
                const destination = location?.state?.from || '/';
                history.replace(destination);

            })
            .catch((error) => {
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    swal("Invalid Password!", "Please check your email & password and then try again", "error");
                }
                else if (error.message === "Firebase: Error (auth/user-not-found).") {
                    swal("User Not Found!", "Please check your email & password and then try again", "warning");
                }
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    //Function to add users to database
    const saveUserToDb = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;