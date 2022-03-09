import RootNavigationContainer from "./src/navigator";

import { APIClientProvider } from "./src/services";
import { useFonts } from "@use-expo/font";

const AppFonts = {
  "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
  "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  "Rajdhani-Regular": require("./src/assets/fonts/Rajdhani-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(AppFonts);

  const renderContainerUIs = () => {
    return (
      <APIClientProvider>
        <RootNavigationContainer />
      </APIClientProvider>
    );
  };

  return isLoaded ? renderContainerUIs() : null;
}
