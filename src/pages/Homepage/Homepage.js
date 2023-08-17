import { loadingPageState } from "../../recoilstate/atom";
import Gamepage from "../components/Gamepage/Gamepage";
import Loadingpage from "../components/Loadingpage/Loadingpage";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import variable from "../../assets/style/variable.style";

export default function Homepage() {
  const loadingPage = useRecoilValue(loadingPageState);

  return (
    <View style={styles.homepageContainer}>
      {loadingPage ? <Loadingpage /> : <Gamepage />}
    </View>
  );
}

const styles = StyleSheet.create({
  homepageContainer: {
    flex: 1,
    backgroundColor: variable.GREY_LIGHT,
  },
});
