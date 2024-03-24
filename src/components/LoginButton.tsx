import React from 'react';
import { IonButton, IonIcon, } from '@ionic/react';
import { logInOutline } from 'ionicons/icons';

const LoginButton: React.FC = () => {

    return (
        <>
            <IonButton slot='end' fill='clear' href='./login'>Login
                <IonIcon icon={logInOutline}></IonIcon>
            </IonButton>
        </>
    );
}

export default LoginButton;