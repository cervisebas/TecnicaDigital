import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bookmarkOutline, copyOutline, copySharp, listOutline, listSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, timeOutline, timeSharp } from 'ionicons/icons';
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
      </IonHeader><IonContent>
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
    </IonMenu>
  );
};

export default Menu;
