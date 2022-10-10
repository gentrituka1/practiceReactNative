import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: center;
`;

export default function Welcome() {
  return <></>;
}
