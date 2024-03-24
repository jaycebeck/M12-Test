import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


import Home from './pages/Home';
import ToDos from './pages/ToDos';
import CreateToDo from './pages/CreateToDo';
import CalendarView from './pages/CalendarView';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import { auth, firestore } from './firebaseConfig';
import { useState, useEffect } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null); // State to store authenticated user

  useEffect(() => {
    // Add an authentication state observer
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the authenticated user in state
    });

    return () => {
      unsubscribe(); // Unsubscribe from the authentication state observer
    };
  }, []);

  return (<IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" render={Home} />
        <Route path="/todos" render={() => (user ? <ToDos/> : <Login />)} />
        <Route path="/create-todo" render={() => (user ? <CreateToDo /> : <Login />)} />
        <Route path="/calendar-view" render={() => (user ? <CalendarView /> : <Login />)}  />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect exact from="/" to="/login" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
