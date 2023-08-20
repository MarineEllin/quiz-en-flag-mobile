import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import variable from "../../assets/style/variable.style";
import { FontAwesome } from "@expo/vector-icons";
import useStopGame from "../../Hooks/useStopGame/useStopGame";

export default function Header() {
  const stopGame = useStopGame();
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../../public/logo.jpeg")}
          style={styles.logo}
        ></Image>
        <TouchableOpacity onPress={stopGame}>
          <FontAwesome name="power-off" style={styles.powerIcon} />
        </TouchableOpacity>
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
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
