import { View, Text, StyleSheet } from "react-native";
import variable from "../../../../assets/style/variable.style";
import { useEffect, useState } from "react";
import { Constants } from "../../../../constants/constants";
import { useSetRecoilState } from "recoil";
import { timeoutState } from "../../../../recoilstate/atom";

export default function Timer() {
  const [timer, setTimer] = useState(Constants.TIMER_GAME_IN_MS);
  const setTimeoutState = useSetRecoilState(timeoutState);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - Constants.TIME_DECREASE);
    }, Constants.TIMER_UPDATE);

    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  useEffect(() => {
    if (timer <= 0) {
      setTimeoutState(true);
    }
  });

  return (
    <View style={styles.timerContainer}>
      <Text
        style={{
          fontSize: variable.FONT_SIZE_L,
          fontWeight: 700,
        }}
      >
        {timer / Constants.CONVERT_MS_AND_S}
      </Text>
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          bottom: 0,
          backgroundColor: variable.PRIMARY,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: (timer / Constants.CONVERT_MS_AND_S) * 2,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 50,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: variable.PRIMARY,
  },
});
