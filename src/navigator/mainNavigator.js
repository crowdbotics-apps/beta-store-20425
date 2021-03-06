import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps103888Navigator from '../features/Maps103888/navigator';
import CalendarView103887Navigator from '../features/CalendarView103887/navigator';
import Camera103886Navigator from '../features/Camera103886/navigator';
import Dashboard1103875Navigator from '../features/Dashboard1103875/navigator';
import EmailAuth103871Navigator from '../features/EmailAuth103871/navigator';
import Messaging103870Navigator from '../features/Messaging103870/navigator';
import Maps103852Navigator from '../features/Maps103852/navigator';
import Add-Item103851Navigator from '../features/Add-Item103851/navigator';
import Maps103847Navigator from '../features/Maps103847/navigator';
import UserProfile103843Navigator from '../features/UserProfile103843/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps103888: { screen: Maps103888Navigator },
CalendarView103887: { screen: CalendarView103887Navigator },
Camera103886: { screen: Camera103886Navigator },
Dashboard1103875: { screen: Dashboard1103875Navigator },
EmailAuth103871: { screen: EmailAuth103871Navigator },
Messaging103870: { screen: Messaging103870Navigator },
Maps103852: { screen: Maps103852Navigator },
Add-Item103851: { screen: Add-Item103851Navigator },
Maps103847: { screen: Maps103847Navigator },
UserProfile103843: { screen: UserProfile103843Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
