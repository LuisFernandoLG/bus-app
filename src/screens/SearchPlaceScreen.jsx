import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexContainer } from "../components/FlexContainer";

export const SearchPlaceScreen = () => {

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SafeAreaView>
      <FlexContainer pdHorizontal={30}>
        <Searchbar placeholder="Buscar..." value={searchQuery} onChangeText={txt=>setSearchQuery(txt)}/>
      </FlexContainer>
    </SafeAreaView>
  );
};
