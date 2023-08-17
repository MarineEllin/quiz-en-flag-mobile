import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  countriesState,
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

  const checkAnswer = (index) => {
    setSelectedIndex(index);
    setDisableBtn(true);
    if (index === countryIndex) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedIndex();
      setDisableBtn(false);
      nextFlag();
    }, Constants.TIMER_NEXT_FLAG);
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
          style={buttonStyle(
            possibleAnswers.findIndex((a) => a.en === answer.en)
          )}
          onPress={() =>
            checkAnswer(possibleAnswers.findIndex((a) => a.en === answer.en))
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
