import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { scoreState } from "../../../recoilstate/atom";
import useNewGame from "../../../Hooks/useNewGame/useNewGame";
import variable from "../../../assets/style/variable.style";

export default function LostPage() {
  const score = useRecoilValue(scoreState);
  const newGame = useNewGame();
  return (
    <View style={styles.lostpageContainer}>
      <Text style={styles.text}>Time Out !</Text>
      <Text style={styles.text}>
        Ne soyez pas triste, vous avez quand même donné
      </Text>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.text}>bonnes réponses !</Text>
      <TouchableOpacity onPress={newGame} style={styles.btn}>
        <Text style={styles.btnText}>Nouvelle partie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  lostpageContainer: {
    backgroundColor: variable.MID_GREY,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  text: {
    color: "white",
    fontSize: variable.FONT_SIZE_L,
    marginBottom: 20,
    textAlign: "center",
  },
  score: {
    color: variable.PRIMARY,
    fontSize: variable.FONT_SIZE_L,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: variable.PRIMARY,
    fontSize: variable.FONT_SIZE_L,
    borderRadius: variable.BORDER_RADIUS,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  btnText: {
    color: "white",
    fontSize: variable.FONT_SIZE_L,
  },
});
