import React from 'react';
import {ScrollView, Text} from 'react-native';
import Post from '../components/Post';
import {homeStyle} from '../styles/home';

export default function Home() {
  return (
    <ScrollView style={homeStyle.home}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
}
