import { useState } from 'react';
import { auth, firestore } from '../firebaseConfig'; 
import { IonInput, IonButton, IonTitle, IonHeader, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SignUpIn.css';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory();

    const addDataToFirestore = async (data: {username: string, email: string}) => {
        try {
          await firestore.collection('Users').doc(auth.currentUser?.uid).set(data);
          console.log('Data added to Firestore successfully!');
        } catch (error) {
          console.error('Error adding data to Firestore:', error);
        }
      };


    const handleSignUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log('User signed up successfully!');
            history.push('/login');
        } catch (error: string | any) {
            console.error('Error signing up:', error.message);
        }
    };

    addDataToFirestore({ username: username, email: email});
    
    return (
        <>
            <IonHeader>
            <IonTitle><h1>Sign Up</h1></IonTitle>
            </IonHeader>
            <IonInput className='input' fill='solid' type="text" value={username} onIonChange={(e) => setUsername(e.detail.value!)} placeholder="Username" />
            <IonInput className='input' fill='solid' type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} placeholder="Email" />
            <IonInput className='input' fill='solid' type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} placeholder="Password" />
            <IonButton expand="block" onClick={handleSignUp}>Sign Up</IonButton>
            <IonText>Already have an account? <a href="/login">Log in</a></IonText>
        </>
    );
};

export default SignUp;