import React, { useState } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
        const firstDayOfMonth = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
      
        const days = [];
        let day = 1;
        let rowCount = 0;
      
        const handleDayClick = (clickedDay: number) => {
          const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), clickedDay);
          console.log('Selected date:', selectedDate);
          // You can perform any action here when a day is clicked
        };
      
        for (let i = 0; i < 6; i++) {
          const cols = [];
          for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfMonth) || (day > daysInMonth)) {
              cols.push(<IonCol key={`empty-${i}-${j}`} />);
            } else {
              cols.push(
                <IonCol
                  key={`day-${day}`}
                  className="ion-text-center"
                  onClick={() => handleDayClick(day)}
                  style={{ cursor: 'pointer' }}
                >
                  {day}
                </IonCol>
              );
              day++;
            }
          }
          days.push(<IonRow key={`row-${rowCount}`}>{cols}</IonRow>);
          rowCount++;
          if (day > daysInMonth) break;
        }
      
        return days;
      };

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size="3">
                        <IonButton onClick={prevMonth}>
                            <IonIcon icon={arrowBackOutline} />
                        </IonButton>
                    </IonCol>
                    <IonCol size="6" className="ion-text-center">
                        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                    </IonCol>
                    <IonCol size="3">
                        <IonButton onClick={nextMonth}>
                            <IonIcon icon={arrowForwardOutline} />
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">Sun</IonCol>
                    <IonCol className="ion-text-center">Mon</IonCol>
                    <IonCol className="ion-text-center">Tue</IonCol>
                    <IonCol className="ion-text-center">Wed</IonCol>
                    <IonCol className="ion-text-center">Thu</IonCol>
                    <IonCol className="ion-text-center">Fri</IonCol>
                    <IonCol className="ion-text-center">Sat</IonCol>
                </IonRow>
                {renderCalendar()}
            </IonGrid>
        </IonContent>
    );
};

export default Calendar;