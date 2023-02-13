import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useState } from "react";
import { ActivityIndicator, List } from "react-native-paper";
import { useQuery, useQueryClient } from "react-query";
import { routes } from "../constants/mockups/routes";
import { settingsContext } from "../context/SettingsContext";
import { getRoutesByCity } from "../services/api";

export const RouteList = ({ selectRoute }) => {
  const { city } = useContext(settingsContext);
  const [places, setPlaces] = useState();
  const queryClient = useQueryClient();

  const { error, isError, data, isLoading } = useQuery({
    queryKey: ["routes", city.id],
    queryFn: getRoutesByCity,
  });


  const formatPlacesToString = ({ places }) => {
    const onlyPlacesNames = places.map((item) => item.place);
    return onlyPlacesNames.toString();
  };

  if (isLoading) return <ActivityIndicator animating={true} />;
  if (isLoading || isError) return null;

  return (
    <List.Section>
      <List.Subheader>Rutas</List.Subheader>
      {data.docs.map((route) => (
        <List.Item
          key={route.id}
          style={{
            borderBottomColor: "#efefef",
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
          left={() => <List.Icon icon="map-marker" />}
          title={route.name}
          description={formatPlacesToString({ places: route.places })}
          onPress={() => {
            selectRoute(route);
          }}
        />
      ))}
    </List.Section>
  );
};
