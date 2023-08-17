import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import variable from "../../assets/style/variable.style";
import { FontAwesome } from "@expo/vector-icons";
import useStopGame from "../../Hooks/useStopGame/useStopGame";

export default function Header() {
  const stopGame = useStopGame();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: variable.DARK_GREY,
    paddingTop: 10,
  },
  logo: {
    width: 300,
    resizeMode: "contain",
  },
  powerIcon: {
    color: variable.PRIMARY,
    fontSize: variable.FONT_SIZE_XXL,
    textAlign: "center",
    marginBottom: 10,
  },
});
