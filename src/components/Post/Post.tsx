import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {accentColor} from '../../styles/global';
import {postStyle} from '../../styles/post';
import {Avatar} from 'react-native-paper';

export default function Post() {
  return (
    <View style={postStyle.postCard}>
      <View style={postStyle.postMediaBox}>
        <ActivityIndicator animating={true} color={accentColor} size="large" />
      </View>
      <View style={postStyle.postDescriptionBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 5,
          }}>
          <Avatar.Text
            size={30}
            label="SC"
            style={{backgroundColor: accentColor}}
          />
          <Text>Username here</Text>
        </View>
        <Text>Sample text here</Text>
        <Divider style={postStyle.postDescriptionBoxDivider} />
        <Text style={{color: 'rgba(255, 255, 255, 0.5)'}}>40,576 likes</Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <IconButton icon="heart" iconColor={accentColor} />
          <IconButton icon="chat" />
          <IconButton icon="send" />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={{color: 'rgba(255, 255, 255, 0.5)'}}>
            40,576 comments
          </Text>
        </View>
      </View>
    </View>
  );
}
