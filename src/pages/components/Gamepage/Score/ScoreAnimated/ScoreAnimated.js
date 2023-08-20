import { Image, Text, StyleSheet, View } from "react-native";
import Animated, { withTiming } from "react-native-reanimated";
import { Constants } from "../../../../../constants/constants";
import variable from "../../../../../assets/style/variable.style";
import { useRecoilValue } from "recoil";
import { scoreState } from "../../../../../recoilstate/atom";

export default function ScoreAnimated() {
  const score = useRecoilValue(scoreState);
  const duration = Constants.DURATION_ANIMATION_SCORE;

  const entering = () => {
    "worklet";
    const animations = {
      transform: [
        {
          scale: withTiming(1, {
            duration,
          }),
        },
      ],
    };
    const initialValues = {
      transform: [{ scale: 0.1 }],
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <Animated.View style={styles.scoreContainer} entering={entering}>
      <Image
        source={require("../../../../../../public/star.png")}
        style={styles.star}
      ></Image>
      <Text style={styles.score}>{score}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  scoreContainerEmpty: {
    width: 60,
    height: 60,
  },
  scoreContainer: {
    position: "absolute",
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
