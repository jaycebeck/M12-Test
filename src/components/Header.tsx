import React from 'react';
import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, logOutOutline } from 'ionicons/icons';

function Header() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Calendar-M12</IonTitle>
                    <IonButton slot='start' fill='clear' href='../'>
                        <IonIcon slot="icon-only" icon={homeOutline}></IonIcon>
                    </IonButton>
                    <IonButton slot="end" fill='clear'>
                        <IonIcon slot="icon-only" icon={logOutOutline}></IonIcon>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
        </>
    );
}
export default Header;