import { View, Text, StyleSheet } from "react-native";
import Score from "./Score/Score";
import Timer from "./Timer/Timer";
import Flags from "./Flags/Flags";
import Answers from "./Answers/Answers";
import variable from "../../../assets/style/variable.style";
import { displayFlagState, timeoutState } from "../../../recoilstate/atom";
import LostPage from "../LostPage/LostPage";
import { useRecoilValue } from "recoil";
export default function Gamepage() {
  const timeout = useRecoilValue(timeoutState);
  const displayFlag = useRecoilValue(displayFlagState);
  return (
    <View>
      {timeout ? (
        <LostPage />
      ) : (
        <View style={styles.gamepageContainer}>
          <View style={styles.scoreContainer}>
            <Score />
            <Timer />
          </View>
          <View style={styles.flagsContainer}>
            {displayFlag ? <Flags /> : <View style={styles.flagEmpty} />}
            <Answers />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gamepageContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 20,
    padding: 20,
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  flagsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderColor: variable.PRIMARY,
    borderStyle: "solid",
    borderWidth: 2,
    margin: 30,
    borderRadius: variable.BORDER_RADIUS,
    padding: 30,
    width: "100%",
    overflow: "hidden",
  },
  flagEmpty: { width: 180, height: 180, marginBottom: 50 },
  answersEmpty: {
    height: 600,
    width: 400,
  },
});
