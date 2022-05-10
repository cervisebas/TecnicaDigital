import { IonAccordion, IonAccordionGroup, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonThumbnail, IonTitle, IonToolbar, RefresherEventDetail } from "@ionic/react";
import { add } from "ionicons/icons";
import { Component, ReactNode } from "react";
import CustomScrollBar from "../components/CustomScrollBar";
import './alumnos.scss';
import StudentDetails from "./studentDetails";

type IProps = {};
type IState = {
  showDetails: boolean;
};
export default class ListAlumnos extends Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        showDetails: false
      };
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
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <CustomScrollBar>
              <IonAccordionGroup value={['colors', 'numbers']}>
                <IonAccordion value="colors">
                  <IonItem slot="header">
                    <IonLabel>3°1</IonLabel>
                  </IonItem>
                  <IonList slot="content">
                    {this.array.map((value, index)=><IonItem key={index.toString()} onClick={()=>this.setState({ showDetails: true })} button={true} lines={(index == this.array.length - 1)? 'none': undefined}>
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
                  {this.array.map((value, index)=><IonItem key={index.toString()} lines={(index == this.array.length - 1)? 'none': undefined}>
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
                  {this.array.map((value, index)=><IonItem key={index.toString()} lines={(index == this.array.length - 1)? 'none': undefined}>
                      <IonThumbnail slot="start">
                          <img style={{ borderRadius: '50%' }} src={'./assets/peppa.jpg'} />
                      </IonThumbnail>
                      <IonLabel>Alumno {String(index)}</IonLabel>
                    </IonItem>)}
                  </IonList>
                </IonAccordion>
              </IonAccordionGroup>
            </CustomScrollBar>
            <IonFab vertical={'bottom'} horizontal="end" slot="fixed">
              <IonFabButton>
                <IonIcon icon={add} />
              </IonFabButton>
            </IonFab>
          </IonContent>
          <>
            <StudentDetails show={this.state.showDetails} close={()=>this.setState({ showDetails: false })} />
          </>
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