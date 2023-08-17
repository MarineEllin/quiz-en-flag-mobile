import { View, Text, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { scoreState } from "../../../../recoilstate/atom";
import variable from "../../../../assets/style/variable.style";

export default function Score() {
  const score = useRecoilValue(scoreState);

  return (
    <View style={styles.scoreContainer}>
      <Image
        source={require("../../../../../public/star.png")}
        style={styles.star}
      ></Image>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    position: "relative",
    overflow: "hidden",
  },
  star: {
    width: 60,
    height: 60,
  },
  score: {
    position: "absolute",
    width: 60,
    height: 60,
    fontSize: variable.FONT_SIZE_L,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
