import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  countriesState,
  possibleAnswersState,
  scoreState,
  selectedCountryState,
} from "../../recoilstate/atom";
import { Constants } from "../../constants/constants";
import { countriesWithUrl } from "datas/flagsImage";

function useNextFlag() {
  const [countries, setCountries] = useRecoilState(countriesState);
  function nextFlag() {
    setTimeout(() => {
      setCountries([...countries].sort((a, b) => 0.5 - Math.random()));
    }, Constants.TIMEOUT_NEW_FLAG);
  }
  return nextFlag;
}

export default useNextFlag;
