import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "./app-navigator";

export default RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
