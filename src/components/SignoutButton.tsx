import { logOutOutline } from 'ionicons/icons';
import { auth } from '../firebaseConfig'; // Import the initialized Firebase auth
import { IonButton, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const SignOutButton: React.FC = () => {

  const history = useHistory();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('User signed out successfully!');
      history.push('/login');
    } catch (error: string | any) {
      console.error('Error signing out:', error.message);
    }
  };

  return (<IonButton onClick={handleSignOut} slot="end" fill='clear'>Logout
    <IonIcon icon={logOutOutline}></IonIcon>
  </IonButton>
  );
};

export default SignOutButton;