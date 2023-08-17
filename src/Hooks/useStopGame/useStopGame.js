import { useSetRecoilState } from "recoil";
import {
  loadingPageState,
  scoreState,
  timeoutState,
} from "../../recoilstate/atom";

function useStopGame() {
  const setTimeoutState = useSetRecoilState(timeoutState);
  const setLoadingGame = useSetRecoilState(loadingPageState);
  const setScore = useSetRecoilState(scoreState);

  function stopGame() {
    setLoadingGame(true);
  }

  return stopGame;
}

export default useStopGame;
