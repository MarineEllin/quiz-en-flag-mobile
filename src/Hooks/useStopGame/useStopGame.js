import { useRecoilState, useSetRecoilState } from "recoil";
import { displayFlagState, loadingPageState } from "../../recoilstate/atom";
import { Constants } from "constants/constants";

function useStopGame() {
  const setLoadingGame = useSetRecoilState(loadingPageState);
  const setDisplayFlag = useSetRecoilState(displayFlagState);
  function stopGame() {
    setDisplayFlag(false);
    setTimeout(() => {
      setLoadingGame(true);
    }, Constants.DURATION_ANIMATION_FLAGS_AND_ANSWERS_IN_OUT);
  }
  return stopGame;
}

export default useStopGame;
