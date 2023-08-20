import { Constants } from "../constants/constants";
import { atom, selector } from "recoil";
import { countriesWithUrl } from "../datas/flagsImage";
import { Animated } from "react-native";
import { useRef, useState } from "react";

// Timer

export const timerState = atom({
  key: "timerState",
  default: Constants.TIMER_GAME_IN_MS,
});

export const timeoutState = atom({
  key: "timeoutState",
  default: false,
});

export const addTimeRightAnswerState = atom({
  key: "addTimeRightAnswerState",
  default: false,
});

// LoadingPage

export const loadingPageState = atom({
  key: "loadingPageState",
  default: true,
});

//Score

export const scoreState = atom({
  key: "scoreState",
  default: 0,
});

export const animateScoreState = atom({
  key: "animateScoreState",
  default: false,
});

//Countries and possible answers

export const countriesState = atom({
  key: "countriesState",
  default: countriesWithUrl,
});

export const selectedCountryState = selector({
  key: "selectedCountryState",
  get: ({ get }) => {
    const [...countriesWithUrl] = get(countriesState);
    const selectedCountrie =
      countriesWithUrl[Math.floor(countriesWithUrl.length * Math.random())];
    return selectedCountrie;
  },
});

export const possibleAnswersState = selector({
  key: "possibleAnswersState",
  get: ({ get }) => {
    const selectedCountry = get(selectedCountryState);

    const answer1 = [...countriesWithUrl].filter((c) => c !== selectedCountry)[
      Math.floor(countriesWithUrl.length * Math.random())
    ];

    const answer2 = [...countriesWithUrl].filter(
      (c) => c !== selectedCountry && c !== answer1
    )[Math.floor(countriesWithUrl.length * Math.random())];

    const possibleAnswers = [selectedCountry, answer1, answer2];
    const shuffledPossibleAnswers = possibleAnswers.sort(
      (a, b) => 0.5 - Math.random()
    );
    return shuffledPossibleAnswers;
  },
});

export const selectedCountryIndexState = selector({
  key: "selectedCountryIndexState",
  get: ({ get }) => {
    const possibleAnswers = get(possibleAnswersState);
    const selectedCountry = get(selectedCountryState);
    const selectedCountryIndex = possibleAnswers.findIndex(
      (answer) => answer.en === selectedCountry.en
    );
    return selectedCountryIndex;
  },
});

//checkAnswer
export const displayRightAnswerState = atom({
  key: "displayRightAnswerState",
  default: false,
});

//Active animations
export const displayFlagState = atom({
  key: "displayFlagState",
  default: true,
});
