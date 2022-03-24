import React from 'react';
import { IonButton, IonContent, IonPage, IonTitle } from '@ionic/react';
import Icon404 from '../assets/404.svg';
import { Link } from 'react-router-dom';

export default function () {
    return(<IonPage>
        <IonContent>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={Icon404} style={{ width: '50%' }} />
                    <IonTitle style={{ marginTop: '32px' }}>No se encontró el lugar donde desear ir</IonTitle>
                    <Link to="/pages/registros">
                        <IonButton style={{ marginTop: '48px' }}>Ir a registros</IonButton>
                    </Link>
                </div>
            </div>
        </IonContent>
    </IonPage>);
};