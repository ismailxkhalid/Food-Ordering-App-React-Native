import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Product } from "@/assets/types";

export const pizzaDefaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
const ProductItemList = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || pizzaDefaultImage }}
        style={styles.image}
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductItemList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
  },
});
