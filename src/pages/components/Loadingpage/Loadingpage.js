import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import variable from "../../../assets/style/variable.style";
import useNewGame from "../../../Hooks/useNewGame/useNewGame";

export default function Loadingpage() {
  const newGame = useNewGame();

  return (
    <View style={styles.loadingContainer}>
      <Image
        source={require("../../../../public/flagsHeart.png")}
        style={styles.heart}
      ></Image>
      <TouchableOpacity onPress={newGame}>
        <Text style={styles.btn}>Nouvelle partie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: variable.DARK_GREY,
    margin: 30,
    borderRadius: variable.BORDER_RADIUS,
    padding: 30,
  },
  heart: {
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  btn: {
    backgroundColor: variable.PRIMARY,
    fontSize: variable.FONT_SIZE_L,
    borderRadius: variable.BORDER_RADIUS,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
