import { StyleSheet, View, SafeAreaView } from "react-native";
import variable from "./src/assets/style/variable.style";
import Header from "./src/components/Header/Header";
import Homepage from "./src/pages/Homepage/Homepage";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Homepage />
        </View>
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    color: variable.TEXT_COLOR,
  },
});
