import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import './universal.scss';
import './registros.module.scss';

export default function () {
    return(<IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton color="primary" />
                </IonButtons>
                <IonTitle>Registros</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard class="custom-card">
                <IonCardHeader>
                    <IonCardTitle>Hola</IonCardTitle>
                    <IonText>24/03/2022 13:00hs</IonText>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    </IonPage>);
}