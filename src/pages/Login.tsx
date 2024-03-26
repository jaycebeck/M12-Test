import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { IonInput, IonButton, IonTitle, IonHeader, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SignUpIn.css';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log('User signed in successfully!');
            history.push('/home');

        } catch (error: string | any) {
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <>
            <IonHeader>
                <IonTitle><h1>Login</h1></IonTitle>
            </IonHeader>
            <IonInput className='input' fill="solid" type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} placeholder="Email" />
            <IonInput className='input' fill='solid' type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} placeholder="Password" />
            <IonButton expand='block' onClick={handleSignIn}>Log In</IonButton>
            <IonText>Haven't made an account? <a href="/signup">Sign up</a></IonText>
        </>
    );
};

export default SignIn;