import { useRecoilState, useSetRecoilState } from "recoil";
import {
  countriesState,
  displayFlagState,
  flagAnimationActivatedState,
  loadingPageState,
  scoreState,
  timeoutState,
  timerState,
} from "../../recoilstate/atom";
import { countriesWithUrl } from "../../datas/flagsImage";
import { Constants } from "../../constants/constants";

function useNewGame() {
  const setTimeoutState = useSetRecoilState(timeoutState);
  const setLoadingGame = useSetRecoilState(loadingPageState);
  const setScore = useSetRecoilState(scoreState);
  const setTimer = useSetRecoilState(timerState);
  const setCountriesList = useSetRecoilState(countriesState);
  const [displayFlag, setDisplayFlag] = useRecoilState(displayFlagState);

  function newGame() {
    setDisplayFlag(true);
    setTimeoutState(false);
    setLoadingGame(false);
    setScore(0);
    setTimer(Constants.TIMER_GAME_IN_MS);
    setCountriesList([...countriesWithUrl].sort((a, b) => 0.5 - Math.random()));
  }

  return newGame;
}

export default useNewGame;
