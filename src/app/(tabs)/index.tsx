import { StyleSheet, View } from "react-native";
import ProductItemList from "@components/ProductItemList";
import products from "@assets/data/products";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProductItemList product={products[0]} />
      <ProductItemList product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
