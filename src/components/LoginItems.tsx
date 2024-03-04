import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function LoginPage() {
    return (
        <IonItem>
            <IonItem>
                <IonInput label="Enter a username" labelPlacement="floating" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Enter a password" labelPlacement="floating" placeholder="Enter text"></IonInput>
            </IonItem>
        </IonItem>
    );
}
export default LoginPage;