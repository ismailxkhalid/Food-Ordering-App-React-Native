import { StyleSheet, View, FlatList } from "react-native";
import ProductItemList from "@components/ProductItemList";
import products from "@assets/data/products";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <ProductItemList key={index} product={item} />
      )}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
