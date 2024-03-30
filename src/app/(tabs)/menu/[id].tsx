import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailScreen = () => {
  const id = useLocalSearchParams().id as string;
  return (
    <View>
      <Stack.Screen options={{ title: "Product Detail" }} />
      <Text>ProductDetailScreen {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
