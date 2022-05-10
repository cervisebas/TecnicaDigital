import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import bowser from "bowser";
import { arrowBackOutline, cloudDownloadOutline, eyeOutline } from "ionicons/icons";
import { Component, ReactNode } from "react";
import userDefault from '../assets/userDefault.svg';
import CustomModal from "../components/CustomModal";
import './studentDetails.scss';

type IProps = {
    show: boolean;
    close: ()=>any;
};
type IState = {};
export default class StudentDetails extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    private modalRef: HTMLIonModalElement | null = null;
    calculeModal() {
        var browser = bowser.getParser(window.navigator.userAgent);
        if (browser.getPlatform().type == 'desktop') {
            var div: any = this.modalRef?.shadowRoot?.querySelector('div.modal-wrapper');
            div.style.height = '100%';
        }
    }
    render(): ReactNode {
        return(<CustomModal id={'studentDetailsPage'} refM={(ref)=>this.modalRef = ref} visible={this.props.show} onClose={()=>this.props.close()} onShow={()=>this.calculeModal()}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={()=>this.props.close()}>
                            <IonIcon slot="icon-only" color="primary" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Nombre del alumno</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={'present'}>
                    <IonAvatar>
                        <img src={userDefault} />
                    </IonAvatar>
                    <div className="details">
                        <h2>Nombre del alumno de la escuela tecnica numero 1 de miramar de general alvarado buenos aires argentina</h2>
                    </div>
                </div>
                <IonCard class="information">
                    <IonCardHeader>
                        <IonCardTitle>Información</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Curso: <b>3°1</b></p>
                            <p>Fecha de nacimiento: <b>28/04/2004 (13 años)</b></p>
                            <p>D.N.I: <b>45579177</b></p>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Tarjeta de ingreso</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonToolbar>
                            <IonButtons slot="end">
                                <IonButton color="primary">
                                    <IonIcon slot="start" icon={cloudDownloadOutline} />
                                    Descargar
                                </IonButton>
                                <IonButton color="primary">
                                    <IonIcon slot="start" icon={eyeOutline} />
                                    Ver
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </CustomModal>);
    }
}