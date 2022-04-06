import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import bowser from "bowser";
import { arrowBackOutline } from "ionicons/icons";
import { Component, ReactNode } from "react";
import userDefault from '../assets/userDefault.svg';

type IProps = {
    show: boolean;
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
        return(<IonModal ref={(ref)=>this.modalRef = ref} isOpen={this.props.show} backdropDismiss={true} onDidPresent={()=>this.calculeModal()}>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton>
                                <IonIcon slot="icon-only" color="primary" icon={arrowBackOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Nombre del alumno</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <div style={{ width: '100%', height: 256, margin: 12 }}>
                        <IonAvatar>
                            <IonImg src={userDefault} />
                        </IonAvatar>
                    </div>
                </IonContent>
            </IonPage>
        </IonModal>);
    }
}