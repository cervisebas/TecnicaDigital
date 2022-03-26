import { IonModal } from "@ionic/react";
import React, { Component } from "react";


type IProps = {};
type IState = {};
export default class Global extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render(): React.ReactNode {
        return(<div>
            <IonModal isOpen={true}>
                
            </IonModal>
        </div>);
    }
}