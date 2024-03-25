import React from 'react';
import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, logInOutline, logOutOutline } from 'ionicons/icons';
import SignOutButton from './SignoutButton';
import { auth } from '../firebaseConfig';
import LoginButton from './LoginButton';

function Header() {
    return (
        <>
            <IonHeader color='standard'>
                <IonToolbar>
                    <IonTitle color='standard'>Calendar-M12</IonTitle>
                    <IonButton slot='start' fill='clear' href='/home'>
                        <IonIcon slot="icon-only" icon={homeOutline}></IonIcon>
                    </IonButton>
                    {auth.currentUser ? <SignOutButton /> : <LoginButton />}
                </IonToolbar>
            </IonHeader>
        </>
    );
}
export default Header;