import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

function AddToDoButton() {
    return (
        <IonFab slot='fixed' vertical="bottom" horizontal="end">
            <IonFabButton size='small'>
                <IonIcon icon={add}></IonIcon>
            </IonFabButton>
        </IonFab>
    );
}
export default AddToDoButton;