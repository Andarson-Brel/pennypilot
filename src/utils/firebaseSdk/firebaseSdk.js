import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

// Your web app's Firebase configuration from environment variables

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Set up the Google Auth provider
const provider = new GoogleAuthProvider();

// Functions for authentication (unchanged)
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return { user, token };
  } catch (error) {
    throw new Error(error.message);
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    return "Signed out successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return "Password reset email sent successfully.";
  } catch (error) {
    throw new Error(error.message);
  }
};
const signUpWithEmailPassword = async (
  email,
  password,
  displayName,
  phoneNumber
) => {
  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update user profile with displayName
    await updateProfile(user, { displayName, phoneNumber });

    // // Store phone number and additional data in Firestore
    // await setDoc(doc(firestore, "users", user.uid), {
    //   displayName: displayName,
    //   phoneNumber: phoneNumber,
    // });

    // Send email verification
    await sendEmailVerification(user);
    // console.log(user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  auth,
  signInWithGoogle,
  signOutUser,
  signUpWithEmailPassword,
  signInWithEmailPassword,
  resetPassword,
};
