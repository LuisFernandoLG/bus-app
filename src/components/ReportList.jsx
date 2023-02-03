import React from "react";
import { ScrollView } from "react-native";
import { Badge, List } from "react-native-paper";
import { reports } from "../constants/mockups/reports";

export const ReportList = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Lista de quejas</List.Subheader>

        {reports.map(({ title, description, status }, index) => (
          <List.Item
            key={index}
            left={() => <List.Icon icon="speedometer" />}
            right={() => (
              <Badge style={{ backgroundColor: "gray" }}>{status}</Badge>
            )}
            title={title}
            description={description}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
};
