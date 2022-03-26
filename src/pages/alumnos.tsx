import { IonAccordion, IonAccordionGroup, IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import { Component, ReactNode } from "react";
import CustomScrollBar from "../components/CustomScrollBar";
import './alumnos.scss';

type IProps = {};
type IState = {};
export default class ListAlumnos extends Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      for (let index = 0; index < 24; index++) {
        this.array.push(String(index));
      }
    }
    private array: string[] = [];
    render(): ReactNode {
        return(<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton color="primary" />
                    </IonButtons>
                    <IonTitle>Lista de alumnos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id="alumnos-content">
              <CustomScrollBar>
                <IonAccordionGroup value={['colors', 'numbers']}>
                  <IonAccordion value="colors">
                    <IonItem slot="header">
                      <IonLabel>3°1</IonLabel>
                    </IonItem>
                    <IonList slot="content">
                      {this.array.map((value, index)=><IonItem lines={(index == this.array.length - 1)? 'none': undefined}>
                        <IonThumbnail slot="start">
                            <img style={{ borderRadius: '50%' }} src={'./assets/peppa.jpg'} />
                        </IonThumbnail>
                        <IonLabel>Alumno {String(index)}</IonLabel>
                      </IonItem>)}
                    </IonList>
                  </IonAccordion>
                  <IonAccordion value="shapes">
                    <IonItem slot="header">
                      <IonLabel>3°2°</IonLabel>
                    </IonItem>
                    <IonList slot="content">
                    {this.array.map((value, index)=><IonItem lines={(index == this.array.length - 1)? 'none': undefined}>
                        <IonThumbnail slot="start">
                            <img style={{ borderRadius: '50%' }} src={'./assets/peppa.jpg'} />
                        </IonThumbnail>
                        <IonLabel>Alumno {String(index)}</IonLabel>
                      </IonItem>)}
                    </IonList>
                  </IonAccordion>
                  <IonAccordion value="numbers">
                    <IonItem slot="header">
                      <IonLabel>3°3°</IonLabel>
                    </IonItem>
                    <IonList slot="content">
                    {this.array.map((value, index)=><IonItem lines={(index == this.array.length - 1)? 'none': undefined}>
                        <IonThumbnail slot="start">
                            <img style={{ borderRadius: '50%' }} src={'./assets/peppa.jpg'} />
                        </IonThumbnail>
                        <IonLabel>Alumno {String(index)}</IonLabel>
                      </IonItem>)}
                    </IonList>
                  </IonAccordion>
                </IonAccordionGroup>
              </CustomScrollBar>
            </IonContent>
        </IonPage>);
    }
}