import { StyleSheet } from "react-native";

// NOTE: Styles of ProductDetailScreen
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: { width: "100%", height: "100%" },
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    color: "#888",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  description: {
    marginHorizontal: 20,
    textAlign: "justify",
    fontFamily: "open-sans",
  },
});

export default styles;
