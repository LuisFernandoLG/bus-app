import { List } from "react-native-paper";
import { routes } from "../constants/mockups/routes";

export const RouteList = ({selectRoute}) => {
  return (
    <List.Section>
      <List.Subheader>Rutas</List.Subheader>
      {routes.map((route) => (
        <List.Item
          key={route.id}
          style={{borderBottomColor:"#efefef", borderBottomWidth:1, paddingBottom:10}}
          left={() => <List.Icon icon="map-marker" />}
          title={route.name}
          description={route.places.toString()}
          onPress={()=>{selectRoute(route)}}
        />
      ))}
    </List.Section>
  );
};
