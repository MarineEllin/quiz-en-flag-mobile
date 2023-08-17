import { View, Text, StyleSheet } from "react-native";
import Score from "./Score/Score";
import Timer from "./Timer/Timer";
import Flags from "./Flags/Flags";
import Answers from "./Answers/Answers";
import variable from "../../../assets/style/variable.style";
import { timeoutState } from "../../../recoilstate/atom";
import LostPage from "../LostPage/LostPage";
import { useRecoilValue } from "recoil";
export default function Gamepage() {
  const timeout = useRecoilValue(timeoutState);
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
            <Flags />
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  },
});
