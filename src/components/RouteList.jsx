import { List } from "react-native-paper";
import { routes } from "../constants/mockups/routes";

export const RouteList = () => {
  return (
    <List.Section>
      <List.Subheader>Rutas</List.Subheader>
      {routes.map(({ id, name, places }) => (
        <List.Item
          key={id}
          style={{borderBottomColor:"#efefef", borderBottomWidth:1, paddingBottom:10}}
          left={() => <List.Icon icon="map-marker" />}
          title={name}
          description={places.toString()}
          
          onPress={()=>console.log("holis")}
        />
      ))}
    </List.Section>
  );
};
