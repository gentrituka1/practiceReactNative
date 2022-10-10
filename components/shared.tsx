import styled from "styled-components/native";
import { colors } from "./colors";
import {Dimensions} from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;