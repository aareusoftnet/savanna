import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppColors, AppFonts, AppStrings, AppStyles } from "../constants";

import CheckIns from "../screens/check-ins";
import Submit from "../screens/submit";

const TabScreensNavigator = () => {
  const TabScreens = {
    Submit: {
      name: "Submit",
    },
    CheckIns: {
      name: "CheckIns",
    },
  };
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: AppColors.app171A1F,
        },
        tabBarLabelStyle: {
          ...AppStyles.FontStyles.bold(14, AppFonts.nunito.bold),
        },
        tabBarInactiveTintColor: AppColors.app5E6279,
        tabBarActiveTintColor: AppColors.app000000,
      }}
    >
      <Tab.Screen
        name={TabScreens.Submit.name}
        component={Submit}
        options={{
          tabBarLabel: AppStrings.tab1.title,
        }}
      />
      <Tab.Screen
        name={TabScreens.CheckIns.name}
        component={CheckIns}
        options={{ tabBarLabel: AppStrings.tab2.title }}
      />
    </Tab.Navigator>
  );
};

export default AppStackNavigator = () => {
  const AppScreens = {
    TabScreens: {
      name: "TabScreens",
    },
  };
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator
      initialRouteName={AppScreens.TabScreens.name}
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: AppStrings.title,
        headerStyle: { backgroundColor: AppColors.appFFFFFF },
        headerTitleStyle: {
          ...AppStyles.FontStyles.bold(18, AppFonts.nunito.bold),
        },
      }}
    >
      <AppStack.Screen
        name={AppScreens.TabScreens.name}
        component={TabScreensNavigator}
      />
    </AppStack.Navigator>
  );
};
