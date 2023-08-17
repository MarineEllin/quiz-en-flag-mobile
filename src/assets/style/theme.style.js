import { StatusBar, StyleSheet } from "react-native";
import variable from "./variable.style";

const theme = StyleSheet.create({
  gameContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    color: variable.TEXT_COLOR,
  },
  pageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: variable.BORDER_RADIUS,
    backgroundColor: variable.GREY_LIGHT,
    color: variable.TEXT_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  btnPrimary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: variable.PRIMARY,
    color: variable.TEXT_COLOR,
    borderRadius: variable.BORDER_RADIUS,
    padding: 12,
    marginVertical: 12,
    width: "100%",
  },
  btnText: {
    fontSize: variable.FONT_SIZE_L,
    color: variable.TEXT_COLOR,
    fontWeight: "600",
  },
});

export default theme;
