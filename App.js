import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { Tabs } from "./src/Tabs";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <Tabs />
        </PaperProvider>
    </GestureHandlerRootView>
  );
}
