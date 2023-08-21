import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  addTimeRightAnswerState,
  animateScoreState,
  displayFlagState,
  possibleAnswersState,
  scoreState,
  selectedCountryIndexState,
} from "../../../../recoilstate/atom";
import variable from "../../../../assets/style/variable.style";
import { useState } from "react";
import useNextFlag from "../../../../Hooks/useNextFlag/useNextFlag";
import { Constants } from "../../../../constants/constants";

export default function Answers() {
  const possibleAnswers = useRecoilValue(possibleAnswersState);
  const countryIndex = useRecoilValue(selectedCountryIndexState);
  const [selectedIndex, setSelectedIndex] = useState();
  const [disableBtn, setDisableBtn] = useState(false);
  const [score, setScore] = useRecoilState(scoreState);
  const nextFlag = useNextFlag();
  const setDisplayFlag = useSetRecoilState(displayFlagState);
  const setaddTimeRightAnswer = useSetRecoilState(addTimeRightAnswerState);
  const setAnimateScore = useSetRecoilState(animateScoreState);

  const checkAnswer = (index) => {
    setSelectedIndex(index);
    setDisableBtn(true);
    if (index === countryIndex) {
      setScore(score + 1);
      setaddTimeRightAnswer(true);
      setAnimateScore(true);
    }
    setDisplayFlag(false);
    setTimeout(() => {
      setAnimateScore(false);
      setSelectedIndex();
      setDisableBtn(false);
      nextFlag();
    }, Constants.DURATION_ANIMATION_FLAGS_AND_ANSWERS_IN_OUT);
  };

  const buttonStyle = (index) => {
    if (index === selectedIndex && index === countryIndex) {
      return styles.btnRightAnswer;
    }
    if (index === selectedIndex && index != countryIndex) {
      return styles.btnWrongAnswer;
    }
    if (
      index != selectedIndex &&
      index === countryIndex &&
      selectedIndex != undefined
    ) {
      return styles.btnRightAnswer;
    }
    return styles.btnAnswer;
  };

  return (
    <View style={styles.answersContainer}>
      {possibleAnswers.map((answer) => (
        <TouchableOpacity
          key={possibleAnswers.findIndex((a) => a === answer)}
          style={buttonStyle(possibleAnswers.findIndex((a) => a === answer))}
          onPress={() =>
            checkAnswer(possibleAnswers.findIndex((a) => a === answer))
          }
          disabled={disableBtn}
        >
          <Text style={styles.btnText}>{answer.fr}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  answersContainer: {},
  btnAnswer: {
    backgroundColor: variable.PRIMARY,
    width: 250,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: variable.BORDER_RADIUS,
    marginBottom: 20,
    borderColor: variable.PRIMARY,
    borderWidth: 4,
  },
  btnRightAnswer: {
    backgroundColor: variable.PRIMARY,
    width: 250,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: variable.BORDER_RADIUS,
    marginBottom: 20,
    borderColor: variable.GREEN,
    borderWidth: 4,
  },
  btnWrongAnswer: {
    backgroundColor: variable.PRIMARY,
    width: 250,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: variable.BORDER_RADIUS,
    marginBottom: 20,
    borderColor: variable.RED,
    borderWidth: 4,
  },
  btnText: {
    color: variable.TEXT_COLOR,
    fontSize: variable.FONT_SIZE,
    textAlign: "center",
  },
});
