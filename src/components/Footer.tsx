import React from 'react';
import { IonButton, IonFooter, IonIcon, IonToolbar } from '@ionic/react';
import { listOutline, todayOutline } from 'ionicons/icons';

function Footer() {
    return (
        <>
            <IonFooter>
                <IonToolbar slot='fixed'>
                    <IonButton fill='clear' href='../todos'>
                        <IonIcon slot="icon-only" icon={listOutline}></IonIcon>
                    </IonButton>
                    <IonButton fill='clear' href='../calendar-view'>
                        <IonIcon slot="icon-only" icon={todayOutline}></IonIcon>
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </>
    );
}
export default Footer;