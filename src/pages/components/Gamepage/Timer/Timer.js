import { View, Text, StyleSheet, Animated } from "react-native";
import variable from "../../../../assets/style/variable.style";
import { useEffect, useState } from "react";
import { Constants } from "../../../../constants/constants";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  addTimeRightAnswerState,
  displayFlagState,
  timeoutState,
  timerState,
} from "../../../../recoilstate/atom";

export default function Timer() {
  const [timer, setTimer] = useRecoilState(timerState);
  const setTimeoutState = useSetRecoilState(timeoutState);
  const [addTimeRightAnswer, setAddTimeRightAnswer] = useRecoilState(
    addTimeRightAnswerState
  );
  const setDisplayFlag = useSetRecoilState(displayFlagState);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (timer > 0 && addTimeRightAnswer) {
        setTimer(
          timer - Constants.TIME_DECREASE + Constants.TIMER_INCREASE_GOOD_ANSWER
        );
      } else if (timer > 0 && !addTimeRightAnswer) {
        setTimer(timer - Constants.TIME_DECREASE);
      } else if (timer <= 0) {
        setDisplayFlag(false);
        setTimeout(() => {
          setTimeoutState(true);
        }, Constants.DURATION_ANIMATION_FLAGS_AND_ANSWERS_IN_OUT);
      }
      setAddTimeRightAnswer(false);
    }, Constants.TIMER_UPDATE);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [
    timer,
    setTimer,
    addTimeRightAnswer,
    setAddTimeRightAnswer,
    setTimeoutState,
  ]);

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
          backgroundColor:
            timer > Constants.TIMER_ALERT ? variable.PRIMARY : variable.RED,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: (timer / Constants.CONVERT_MS_AND_S) * 2,
        }}
      ></View>
      {addTimeRightAnswer ? (
        <View>
          <Text>+1s</Text>
        </View>
      ) : (
        ""
      )}
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
