import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { Link, useLocation } from 'react-router-dom';
import { copyOutline, copySharp, listOutline, listSharp, newspaperOutline, personCircleOutline, timeOutline, timeSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Registros',
    url: '/pages/registros',
    iosIcon: copyOutline,
    mdIcon: copySharp
  },
  {
    title: 'Horarios',
    url: '/pages/horarios',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'Lista de alumnos',
    url: '/pages/alumnos',
    iosIcon: listOutline,
    mdIcon: listSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Temario Virtual</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton>
              <IonIcon slot='start' icon={personCircleOutline} size={'large'} />
              Perfil
            </IonButton>
          </IonButtons>
          <IonButtons slot='end'>
            <Link to={'/pages/onlyactivity'}>
              <IonButton>
                <IonIcon slot='icon-only' icon={newspaperOutline} color={'primary'} />
              </IonButton>
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default Menu;
