import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
const Home = (props) => {
  console.log(props.loggedInUser);
  return (
    <View>
      <Bar loggedInUser = {props.loggedInUser}/>
      <Icons />
    </View>
  );
};

export default Home;
