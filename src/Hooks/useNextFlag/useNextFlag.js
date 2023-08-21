import { useRecoilState, useSetRecoilState } from "recoil";
import { countriesState, displayFlagState } from "../../recoilstate/atom";
import { Constants } from "../../constants/constants";

function useNextFlag() {
  const [countries, setCountries] = useRecoilState(countriesState);
  const setDisplayFlag = useSetRecoilState(displayFlagState);

  function nextFlag() {
    setTimeout(() => {
      setCountries([...countries].sort((a, b) => 0.5 - Math.random()));
      setDisplayFlag(true);
    }, Constants.TIMEOUT_NEW_FLAG);
  }
  return nextFlag;
}

export default useNextFlag;
