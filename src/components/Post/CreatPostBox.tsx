import React from 'react';
import {View} from 'react-native';
import {Portal, Modal} from 'react-native-paper';
import PButton from '../Buttons';
import Chip from '../Chips';
import TextInput from '../TextInputs/TextInput';

export default function CreatePostBox() {
  const [isPostFormVisible, setIsPostFormVisible] = React.useState(false);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 'auto',
          padding: 10,
          marginVertical: 10,
        }}>
        <PButton
          mode="outlined"
          leftIcon="post"
          label="Write something..."
          onPress={() => setIsPostFormVisible(true)}
        />
      </View>
      <Portal>
        <Modal
          visible={isPostFormVisible}
          contentContainerStyle={{
            flex: 1,
            backgroundColor: 'black',
            padding: 20,
            justifyContent: 'flex-start',
          }}>
          <View style={{flex: 1, gap: 20}}>
            <View style={{width: 80}}>
              <PButton
                label="Back"
                mode="text"
                leftIcon="chevron-left"
                onPress={() => setIsPostFormVisible(false)}
              />
            </View>
            <View>
              <TextInput label="Share your music..." multiline />
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
              <Chip icon="image" disabled width={115}>
                Add Photo
              </Chip>
              <Chip icon="account" disabled width={135}>
                Tag someone
              </Chip>
              <Chip icon="video" disabled width={110}>
                Add Video
              </Chip>
              <Chip icon="music" disabled width={115}>
                Add Music
              </Chip>
            </View>
          </View>
          <View>
            <PButton
              label="Post"
              mode="contained"
              leftIcon="post"
              onPress={() => setIsPostFormVisible(false)}
            />
          </View>
        </Modal>
      </Portal>
    </>
  );
}
