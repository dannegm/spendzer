import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Page1 = () => (
  <Wrapper>
    <Text>Open up App.js to start working on your app!</Text>
  </Wrapper>
);

export default Page1;
