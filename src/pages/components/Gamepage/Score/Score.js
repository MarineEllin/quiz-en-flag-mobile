import { View, Text, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { animateScoreState, scoreState } from "../../../../recoilstate/atom";
import variable from "../../../../assets/style/variable.style";
import ScoreAnimated from "../Score/ScoreAnimated/ScoreAnimated";

export default function Score() {
  const score = useRecoilValue(scoreState);
  const animateScore = useRecoilValue(animateScoreState);

  return (
    <View style={styles.scoreContainer}>
      {animateScore ? (
        <ScoreAnimated />
      ) : (
        <View style={styles.scoreContent}>
          <Image
            source={require("../../../../../public/star.png")}
            style={styles.star}
          ></Image>
          <Text style={styles.score}>{score}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    width: 60,
    height: 60,
    marginRight: 130,
  },
  scoreContent: {
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
