import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

import './App.scss';

import Registros from './pages/registros';
import P404 from './pages/P404'
import SplashScreen from './pages/SplashScreen';
import Horarios from './pages/horarios';
import ListAlumnos from './pages/alumnos';
import OnlyActivity from './pages/onlyactivity';
import { GenerateCredential } from './scripts/generateCredential';

setupIonicReact();

const App: React.FC = ()=>{
  document.addEventListener('contextmenu', (e)=>e.preventDefault());
  return (<IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
            <Redirect to="/pages/registros" />
          </Route>
          <Route path="/pages/registros" exact={true}>
            <Registros />
          </Route>
          <Route path="/pages/horarios" exact={true}>
            <Horarios />
          </Route>
          <Route path="/pages/alumnos" exact={true}>
            <ListAlumnos />
          </Route>
          <Route path="/pages/onlyactivity" exact={true}>
            <OnlyActivity />
          </Route>
          <Route path="/404" exact={true}>
            <P404 />
          </Route>
          <Redirect to='/404' />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
    <SplashScreen />
    <GenerateCredential />
  </IonApp>);
};

export default App;
