import React, { useState } from 'react';
import { IonContent, IonPage, IonDatetime, IonInput, IonTextarea, IonButton, IonDatetimeButton, IonText, IonButtons } from '@ionic/react';
import Header from '../components/Header';
import DateTimePicker from '../components/DateTimePicker';

import { useHistory } from 'react-router-dom';

import { auth, firestore } from '../firebaseConfig';

const MyForm: React.FC = () => {
    const [selectedDueDate, setSelectedDueDate] = useState<string>(new Date().toISOString());
    const [selectedTodoDate, setSelectedTodoDate] = useState<string>(new Date().toISOString());
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const history = useHistory();

    const handleDueDateChange = (newDueDate: string) => {
        setSelectedDueDate(newDueDate);
    };

    const handleTodoDateChange = (newTodoDate: string) => {
        setSelectedTodoDate(newTodoDate);
    };

    const handleTitleChange = (event: CustomEvent) => {
        setTitle(event.detail.value);
    };

    const handleDescriptionChange = (event: CustomEvent) => {
        setDescription(event.detail.value);
    };

    const handleSubmit = () => {
        console.log('Selected Todo Date:', selectedTodoDate)
        console.log('Selected Due Date:', selectedDueDate);
        console.log('Title:', title);
        console.log('Description:', description);
        addDataToFirestore({ title: title, description: description, date_to_do: selectedTodoDate, due_date: selectedDueDate});
        history.push('/todos');
    };

    const addDataToFirestore = async (data: {}) => {
        try {
          await firestore.collection('Users').doc(auth.currentUser?.uid).collection('posts').add(data);
          console.log('Data added to Firestore successfully!');
        } catch (error) {
          console.error('Error adding data to Firestore:', error);
        }
      };


    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonInput className='ion-margin'
                    placeholder="Title"
                    value={title}
                    onIonChange={handleTitleChange}
                />
                <IonInput className='ion-margin'
                    placeholder="Description"
                    value={description}
                    onIonChange={handleDescriptionChange}
                />
                <IonText class='ion-margin' color={'medium'}>Todo Date:</IonText>
                <DateTimePicker id="todo-date"  selectedDate={selectedTodoDate} onDateChange={handleTodoDateChange} />
                <IonText class='ion-margin' color={'medium'}>Due Date:</IonText>
                <DateTimePicker id="due-date" selectedDate={selectedDueDate} onDateChange={handleDueDateChange} />
                
                <IonButton fill='clear' onClick={handleSubmit}>
                    Submit
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default MyForm;