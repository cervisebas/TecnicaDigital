import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React, { Component } from "react";

type IProps = {};
type IState = {};
export default class OnlyActivity extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render(): React.ReactNode {
        return(<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="primary" onClick={()=>window.history.back()}>
                            <IonIcon slot="icon-only" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Registro de actividad</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
            </IonContent>
        </IonPage>);
    }
}