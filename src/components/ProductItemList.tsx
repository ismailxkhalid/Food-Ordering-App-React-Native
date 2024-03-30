import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Product } from "@/assets/types";
import { Link, Stack } from "expo-router";

export const pizzaDefaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
const ProductItemList = ({ product }: { product: Product }) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || pizzaDefaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductItemList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    maxWidth: "50%",
    padding: 5,
    margin: 5,
    borderRadius: 15,
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
