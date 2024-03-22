import { IonPage, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton, IonText, IonList, IonContent, IonItem, IonFab, IonFabButton, IonIcon, IonToolbar, IonButtons, IonRouterLink } from "@ionic/react";
import './ToDos.css';

import AddToDoButton from '../components/AddToDo';
import { add } from "ionicons/icons";
import Header from "../components/Header";
import CreateToDo from "./CreateToDo";


function ToDos() {

  const posts: Post[] = [
    {
      id: '1',
      title: 'Cruises are sailing again',
      description: 'Cruise ships are back in the water, and they are ready to take you on a journey.'
    },
    {
      id: '2',
      title: 'Things to do when visiting Bali',
      description: 'Bali is a beautiful place to visit, and there are many things to do while you are there.'
    },
    {
      id: '3',
      title: '10 Best Islands to travel to in 2022',
      description: 'If you are looking for a great island to visit in 2022, here are 10 of the best.'
    },
    {
      id: '4',
      title: 'Cruises are sailing again',
      description: 'Cruise ships are back in the water, and they are ready to take you on a journey.'
    },
    {
      id: '5',
      title: 'Things to do when visiting Bali',
      description: 'Bali is a beautiful place to visit, and there are many things to do while you are there.'
    },
    {
      id: '6',
      title: '10 Best Islands to travel to in 2022',
      description: 'If you are looking for a great island to visit in 2022, here are 10 of the best.'
    },
    {
      id: '7',
      title: 'Cruises are sailing again',
      description: 'Cruise ships are back in the water, and they are ready to take you on a journey.'
    },
    {
      id: '8',
      title: 'Things to do when visiting Bali',
      description: 'Bali is a beautiful place to visit, and there are many things to do while you are there.'
    },
    {
      id: '9',
      title: '10 Best Islands to travel to in 2022',
      description: 'If you are looking for a great island to visit in 2022, here are 10 of the best.'
    }
  ];
  const addToDo = () => {
    return <CreateToDo />;
  };

  return (
    <IonPage>
      <Header />
      <IonFab slot='fixed' vertical="bottom" horizontal="end">
        <IonFabButton size='small' onClick={addToDo}>
          <IonIcon icon={add} />
          <IonRouterLink href="../create-todo" />
        </IonFabButton>
      </IonFab>
      <IonList className="list-margin">
        {posts.map((post) => (
          <IonItem
            key={'card-' + post.id}
            lines="none"
          >
            <IonCard className="card">
              <IonCardHeader><IonText><h2>{post.title}</h2></IonText></IonCardHeader>
              <IonCardContent>{post.description}</IonCardContent>
              <IonToolbar><IonButtons slot="end">
                <IonButton>Edit</IonButton>
              </IonButtons></IonToolbar>
            </IonCard>
          </IonItem>
        ))}
      </IonList>
    </IonPage>
  );
}
export default ToDos;