import { Picker } from "@react-native-picker/picker";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCities } from "../services/api";

export const CitySelect = ({ selectCity, selectedCity }) => {
  const { isLoading, data, isError, error } = useQuery("allCities", getCities);

  useFocusEffect(
    useCallback(() => {
      if (!isLoading && !isError) selectCity(data.docs[0]);
    }, [])
  );

  return (
    <Picker
      mode="dropdown"
      selectedValue={selectedCity}
      onValueChange={(itemValue, itemIndex) => selectCity(itemValue)}
    >
      {isLoading
        ? null
        : data.docs.map((item) => {
            return <Picker.Item key={item.id} label={item.name} value={item} />;
          })}
    </Picker>
  );
};
