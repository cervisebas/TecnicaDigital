import { IonContent, IonImg, IonModal, IonTitle } from "@ionic/react";
import { Component, CSSProperties, ReactNode, Ref } from "react";
import bowser from 'bowser';
import Logo from '../assets/logo.svg';
import './SplashScreen.scss';

type IProps = {};
type IState = {
    modalShow: boolean;
};
export default class SplashScreen extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            modalShow: true
        };
    }
    componentDidMount() {
        setTimeout(()=>this.setState({ modalShow: false }), 3500);
    }
    private modalRef: HTMLIonModalElement | null = null;
    private styleContent: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    };
    calculeModal() {
        var browser = bowser.getParser(window.navigator.userAgent);
        if (browser.getPlatform().type == 'desktop') {
            var div: any = this.modalRef?.shadowRoot?.querySelector('div.modal-wrapper');
            div.style.height = '100%';
        }
    }
    render(): ReactNode {
        return(<IonModal isOpen={this.state.modalShow} ref={(e)=>this.modalRef = e} backdropDismiss={false}>
            <IonContent>
                <div style={this.styleContent}>
                    <img src={Logo} alt="Logo de la escuela" onLoad={()=>this.calculeModal()} style={{ width: '40%', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,.7))' }}/>
                    <h3 style={{ marginTop: 40, fontSize: 24 }}>Cargando...</h3>
                </div>
            </IonContent>
        </IonModal>);
    }
}