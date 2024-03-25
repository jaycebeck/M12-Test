import { IonPage, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton, IonText, IonList, IonContent, IonItem, IonFab, IonFabButton, IonIcon, IonToolbar, IonButtons, IonRouterLink, IonDatetime } from "@ionic/react";
import './ToDos.css';

import AddToDoButton from '../components/AddToDo';
import { add, trashBinOutline, trashOutline } from "ionicons/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";


import { useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseConfig';

function ToDos() {

  const [posts, setPosts] = useState<{ id: string, title: string, description: string, date_to_do: string, due_date: string }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = firestore.collection('Users').doc(auth.currentUser?.uid).collection('posts');
      const snapshot = await postsRef.get();
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date_to_do: doc.data().date_to_do,
        due_date: doc.data().due_date
      }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  // Function to delete a post
  const deletePost = async (postId: string) => {
    await firestore.collection('Users').doc(auth.currentUser?.uid).collection('posts').doc(postId).delete();
    setPosts(posts.filter(post => post.id !== postId));
  };

  const editPost = (postId: string) => {
    console.log('Editing post with ID:', postId);
  };

  const posts1: { id: number, title: string, description: string, date_to_do: string, due_date: string }[] = [
    {
      id: 1,
      title: "English Essay",
      description: "Write a 3-page essay on the themes of friendship and betrayal in Shakespeare's 'Macbeth'.",
      date_to_do: "2024-03-25T18:00:00",
      due_date: "2024-03-18T18:00:00"
    },
    {
      id: 2,
      title: "History Research",
      description: "Research and summarize the events leading to the American Revolutionary War. Provide at least 5 reliable sources.",
      date_to_do: "2024-03-26T20:00:00",
      due_date: "2024-03-19T20:00:00"
    },
    {
      id: 3,
      title: "English Poetry Analysis",
      description: "Analyze Robert Frost's poem 'The Road Not Taken' and discuss its themes and symbolism.",
      date_to_do: "2024-03-27T17:00:00",
      due_date: "2024-03-20T17:00:00"
    },
    {
      id: 4,
      title: "History Presentation",
      description: "Prepare a presentation on the causes and consequences of World War I. Include visual aids.",
      date_to_do: "2024-03-28T15:00:00",
      due_date: "2024-03-21T15:00:00"
    },
    {
      id: 5,
      title: "English Vocabulary Quiz",
      description: "Study and prepare for a quiz on vocabulary words from the novel 'To Kill a Mockingbird'.",
      date_to_do: "2024-03-29T10:00:00",
      due_date: "2024-03-22T10:00:00"
    },
    {
      id: 6,
      title: "History Essay",
      description: "Write an essay discussing the impact of the French Revolution on European society and politics.",
      date_to_do: "2024-03-30T16:00:00",
      due_date: "2024-03-23T16:00:00"
    },
    {
      id: 7,
      title: "English Reading Assignment",
      description: "Read Chapters 5-8 of '1984' by George Orwell and write a summary highlighting key themes.",
      date_to_do: "2024-04-01T12:00:00",
      due_date: "2024-03-25T12:00:00"
    },
    {
      id: 8,
      title: "History Debate",
      description: "Prepare arguments for a debate on whether the Industrial Revolution had a positive or negative impact on society.",
      date_to_do: "2024-04-02T14:00:00",
      due_date: "2024-03-26T14:00:00"
    },
    {
      id: 9,
      title: "English Grammar Exercises",
      description: "Complete exercises on subject-verb agreement and punctuation.",
      date_to_do: "2024-04-03T09:00:00",
      due_date: "2024-03-27T09:00:00"
    },
    {
      id: 10,
      title: "History Exam Review",
      description: "Review key concepts and events for the upcoming history exam.",
      date_to_do: "2024-04-04T19:00:00",
      due_date: "2024-03-28T19:00:00"
    }
  ];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' });
  };


  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList className="list-margin">
          {posts.map((post) => (
            <IonItem
              key={'card-' + post.id}
              lines="none"
            >
              <IonCard className="card">
                <IonCardHeader><IonText><h2>{post.title}</h2></IonText></IonCardHeader>
                <IonCardContent>{post.description}</IonCardContent>
                <IonToolbar>
                  <IonText class="ion-padding">Due Date: {formatDate(post.due_date)}</IonText>
                  <IonButtons slot="end">
                    <IonButton onClick={() => { editPost(post.id) }}>Edit</IonButton>
                    <IonButton onClick={() => { deletePost(post.id) }}><IonIcon size="small" slot="icon-only" icon={trashOutline}></IonIcon></IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <AddToDoButton />
      <Footer />
    </IonPage>
  );
}
export default ToDos;