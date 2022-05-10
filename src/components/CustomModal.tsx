import { IonModal } from "@ionic/react";
import React, { Component } from "react";

type IProps = {
    visible: boolean;
    onClose?: ()=>any;
    onShow?: ()=>any;
    refM?: (ref: HTMLIonModalElement | null)=>any;
    id?: string;
    style?: HTMLStyleElement;
};
type IState = {};

export default class CustomModal extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render(): React.ReactNode {
        return(<IonModal
                isOpen={this.props.visible}
                ref={(ref)=>(this.props.refM)&&this.props.refM(ref)}
                onWillDismiss={()=>(this.props.onClose)&&this.props.onClose()}
                onWillPresent={()=>(this.props.onShow)&&this.props.onShow()}
                id={this.props.id}
                style={this.props.style}
                backdropDismiss={true}
                swipeToClose={true}>
            {this.props.children}
        </IonModal>);
    }
}