import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonText, IonTitle, IonToolbar, RefresherEventDetail } from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';
import './universal.scss';
import './registros.scss';

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
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <IonCard class="custom-card">
                <IonCardHeader>
                    <IonCardTitle>Registro 3°1</IonCardTitle>
                    <IonText>24/03/2022 13:00hs</IonText>
                </IonCardHeader>
                <IonCardContent>
                    <IonButton fill="clear">
                        Confirmar
                        <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonButton>
                    <IonChip outline class="false">
                        <IonLabel>Sin confirmar</IonLabel>
                    </IonChip>
                </IonCardContent>
            </IonCard>
            <IonCard class="custom-card">
                <IonCardHeader>
                    <IonCardTitle>Registro 3°2</IonCardTitle>
                    <IonText>24/03/2022 13:00hs</IonText>
                </IonCardHeader>
                <IonCardContent>
                    <IonButton fill="clear" disabled>
                        Confirmar
                        <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonButton>
                    <IonChip outline class="true">
                        <IonLabel>Confirmado</IonLabel>
                    </IonChip>
                </IonCardContent>
            </IonCard>
            <IonCard class="custom-card">
                <IonCardHeader>
                    <IonCardTitle>Registro 3°3</IonCardTitle>
                    <IonText>24/03/2022 13:00hs</IonText>
                </IonCardHeader>
                <IonCardContent>
                    <IonButton fill="clear" disabled>
                        Confirmar
                        <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonButton>
                    <IonChip outline class="true">
                        <IonLabel>Confirmado</IonLabel>
                    </IonChip>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>);
}

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
}