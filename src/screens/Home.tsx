import React from 'react';
import {ScrollView} from 'react-native';
import CreatePostBox from '../components/Post/CreatPostBox';
import Post from '../components/Post/Post';
import {homeStyle} from '../styles/home';

export default function Home() {
  return (
    <ScrollView style={homeStyle.home}>
      <CreatePostBox />
      {/* <EmptyAnimation /> */}
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
