import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import SettingsProvier from "./src/context/SettingsContext";
import { Tabs } from "./src/Tabs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <SettingsProvier>
            <Tabs />
          </SettingsProvier>
        </PaperProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
