import { View, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { selectedCountryState } from "../../../../recoilstate/atom";

export default function Flags() {
  const country = useRecoilValue(selectedCountryState);
  const image = country.src;
  console.log(country.en);
  return (
    <View>
      <Image source={image} style={Styles.flag}></Image>
    </View>
  );
}

const Styles = StyleSheet.create({
  flag: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
});
