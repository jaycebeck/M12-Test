import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonRouterLink } from '@ionic/react';
import { add } from 'ionicons/icons';
import CreateToDo from '../pages/CreateToDo';

function AddToDoButton() {
    const addToDo = () => {
        return <CreateToDo />;
    };
    return (
        <IonFab slot='fixed' vertical="bottom" horizontal="end">
        <IonRouterLink href="../create-todo">
          <IonFabButton size='small'>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonRouterLink>
      </IonFab>
    );
}
export default AddToDoButton;