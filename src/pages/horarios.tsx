import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonText, IonTitle, IonToolbar, RefresherEventDetail } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import { Component, ReactNode } from "react";
import './horarios.scss';
import ViewHorarios from "./viewHorarios";

type IProps = {};
type IState = {
    viewHorariosShow: boolean;
    viewHorariosTitle: string;
};
export default class Horarios extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            viewHorariosShow: false,
            viewHorariosTitle: ''
        };
    }

    openModal() {
        this.setState({
            viewHorariosShow:true,
            viewHorariosTitle:''
        });
    }

    render(): ReactNode {
        return(<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton color="primary" />
                    </IonButtons>
                    <IonTitle>Horarios</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonCard class="custom-card2">
                    <IonCardHeader>
                        <IonCardTitle>Horarios 3°1</IonCardTitle>
                        <IonButton fill="clear" onClick={()=>this.openModal()}>
                            Ver
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonButton>
                    </IonCardHeader>
                </IonCard>
                <IonCard class="custom-card2">
                    <IonCardHeader>
                        <IonCardTitle>Horarios 3°2</IonCardTitle>
                        <IonButton fill="clear" onClick={()=>this.openModal()}>
                            Ver
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonButton>
                    </IonCardHeader>
                </IonCard>
                <IonCard class="custom-card2">
                    <IonCardHeader>
                        <IonCardTitle>Horarios 3°3</IonCardTitle>
                        <IonButton fill="clear" onClick={()=>this.openModal()}>
                            Ver
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonButton>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
            <ViewHorarios show={this.state.viewHorariosShow} title={this.state.viewHorariosTitle} close={()=>this.setState({ viewHorariosShow: false })} />
        </IonPage>);
    }
}
function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
}

