import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import variable from "../../assets/style/variable.style";
import { FontAwesome } from "@expo/vector-icons";
import useStopGame from "../../Hooks/useStopGame/useStopGame";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const stopGame = useStopGame();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../../public/logo.jpeg")}
            style={styles.logo}
          ></Image>
          <TouchableOpacity onPress={stopGame}>
            <FontAwesome name="power-off" style={styles.powerIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: variable.DARK_GREY,
    paddingTop: 10,
  },
  logo: {
    width: 250,
    resizeMode: "contain",
    marginRight: 20,
  },
  powerIcon: {
    color: variable.PRIMARY,
    fontSize: variable.FONT_SIZE_XXL,
    textAlign: "center",
  },
});
