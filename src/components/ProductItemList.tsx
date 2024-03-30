import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const ProductItemList = ({ product }: { product: any }) => {
  return (
    <View>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductItemList;

const styles = StyleSheet.create({
  container: {},
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
