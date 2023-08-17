import { useSetRecoilState } from "recoil";
import {
  countriesState,
  loadingPageState,
  scoreState,
  timeoutState,
} from "../../recoilstate/atom";
import { countriesWithUrl } from "../../datas/flagsImage";
import LottieView from "react-native-web-lottie";

function useNewGame() {
  const setTimeoutState = useSetRecoilState(timeoutState);
  const setLoadingGame = useSetRecoilState(loadingPageState);
  const setScore = useSetRecoilState(scoreState);
  const setCountriesList = useSetRecoilState(countriesState);

  function newGame() {
    setTimeoutState(false);
    setLoadingGame(false);
    setScore(0);
    setCountriesList([...countriesWithUrl].sort((a, b) => 0.5 - Math.random()));
  }

  return newGame;
}

export default useNewGame;
