import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
