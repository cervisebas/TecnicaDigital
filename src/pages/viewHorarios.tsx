import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import bowser from "bowser";
import { arrowBackOutline, searchOutline } from "ionicons/icons";
import { Component, ReactNode } from "react";
import CustomModal from "../components/CustomModal";
import CustomScrollBar from "../components/CustomScrollBar";
import "./viewHorarios.scss";

type IProps = {
    show: boolean;
    title: string;
    close: ()=>any;
};
type IState = {
    toggle: 'zooming normal' | 'zooming zoom';
};

export default class ViewHorarios extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            toggle: 'zooming normal'
        };
    }
    private modalRef: HTMLIonModalElement | null = null;
    private browser = bowser.getParser(window.navigator.userAgent);
    calculeModal() {
        if (this.browser.getPlatform().type == 'desktop') {
            var div: any = this.modalRef?.shadowRoot?.querySelector('div.modal-wrapper');
            div.style.height = '100%';
            div.style.width = '80%';
        }
    }
    render(): ReactNode {
        return(<CustomModal id={'view-horarios-content'} visible={this.props.show} refM={(e)=>this.modalRef = e} onShow={()=>this.calculeModal()} onClose={()=>this.props.close()}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={()=>this.props.close()}>
                            <IonIcon slot="icon-only" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Prueba titulo</IonTitle>
                    <IonButtons slot={'end'} style={{ display: (this.browser.getPlatform().type == 'mobile')? 'unset': 'none' }}>
                        <IonButton onClick={()=>this.setState({ toggle: (this.state.toggle == 'zooming zoom')? 'zooming normal': 'zooming zoom' })}>
                            <IonIcon slot={'icon-only'} icon={searchOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <CustomScrollBar>
                    <div className={this.state.toggle}>
                        <IonGrid>
                            <IonRow>
                                <IonCol><IonText>Horario de mañana</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText></IonText></IonCol>
                                <IonCol class="days">Lunes</IonCol>
                                <IonCol class="days">Martes</IonCol>
                                <IonCol class="days">Miercoles</IonCol>
                                <IonCol class="days">Jueves</IonCol>
                                <IonCol class="days">Viernes</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>7:30/8:30</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>8:40/9:40</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>9:50/10:50</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>11:00/12:00</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol><IonText>Horario de tarde</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>13:15/14:15</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>14:25/15:25</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>15:35/16:35</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><IonText>16:45/17:45</IonText></IonCol>
                                <IonCol><IonText>Matematicas</IonText></IonCol>
                                <IonCol><IonText>Literatura</IonText></IonCol>
                                <IonCol><IonText>Ciencias Sociales</IonText></IonCol>
                                <IonCol><IonText>Historia</IonText></IonCol>
                                <IonCol><IonText>Educacion Fisicas</IonText></IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </CustomScrollBar>
            </IonContent>
        </CustomModal>);
    }
}