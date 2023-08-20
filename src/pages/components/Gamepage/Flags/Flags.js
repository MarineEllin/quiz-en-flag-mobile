import { Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import Animated, { withTiming } from "react-native-reanimated";
import { selectedCountryState } from "../../../../recoilstate/atom";
import { Constants } from "../../../../constants/constants";

export default function Flags() {
  const country = useRecoilValue(selectedCountryState);
  const image = country.src;
  const duration = Constants.DURATION_ANIMATION_FLAGS_AND_ANSWERS_IN_OUT;
  const translateX = Constants.FLAG_TRANSLATION;
  console.log(country);

  const entering = () => {
    "worklet";
    const animations = {
      transform: [
        {
          translateX: withTiming(0, {
            duration,
          }),
        },
      ],
    };
    const initialValues = {
      transform: [{ translateX }],
    };
    return {
      initialValues,
      animations,
    };
  };
  const exiting = () => {
    "worklet";
    const animations = {
      transform: [
        { translateX: withTiming(-translateX, { duration: duration }) },
      ],
    };
    const initialValues = {
      transform: [{ translateX: 0 }],
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <Animated.View entering={entering} exiting={exiting}>
      <Image source={image} style={Styles.flag}></Image>
    </Animated.View>
  );
}

const Styles = StyleSheet.create({
  flag: {
    width: 180,
    height: 180,
    marginBottom: 50,
  },
});
