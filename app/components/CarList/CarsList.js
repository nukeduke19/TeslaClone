import React from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";
import cars from "./cars";
import CarItem from "./../CarItem";

function CarsList(props) {
  return (
    <FlatList
      data={cars}
      keyExtractor={(cars) => cars.name}
      renderItem={({ item }) => (
        <CarItem
          title={item.name}
          subtitle={item.tagline}
          taglineCTA={item.taglineCTA}
          image={item.image}
        />
      )}
      showsVerticalScrollIndicator={false} //hides the scrollbar
      //centers the lists
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").height}
    />
  );
}

export default CarsList;
