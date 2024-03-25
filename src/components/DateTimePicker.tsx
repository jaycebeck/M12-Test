import React from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

function DateTimePicker({ id, selectedDate, onDateChange }: { id: string, selectedDate: string, onDateChange: (value: string | any) => void }) {
    return (
        <>
            <IonDatetimeButton className='ion-margin' datetime={id}></IonDatetimeButton>

            <IonModal keepContentsMounted={true}>
                <IonDatetime
                    id={id}
                    presentation="date"
                    value={selectedDate}
                    onIonChange={(e) => onDateChange(e.detail.value)}
                ></IonDatetime>
            </IonModal>
        </>
    );
}
export default DateTimePicker;