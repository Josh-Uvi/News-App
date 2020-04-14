import moment from 'moment';
import {
  Body,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View,
} from 'native-base';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

export default class DataItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, data } = this.props;
    const formattedTime = moment(data.publishedAt || moment.now()).fromNow();
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                data.urlToImage != null
                  ? data.urlToImage
                  : 'https://via.placeholder.com/150',
            }}
          />
        </Left>
        <Body>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                content: data,
              })
            }
          >
            <Text numberOfLines={1}>{data.title}</Text>
            <Text style={{ fontWeight: '500' }} note numberOfLines={2}>
              {data.description || 'Read More....'}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 5,
            }}
          >
            <Text style={{ fontWeight: '500' }} note>
              {data.source.name}
            </Text>
            <Text style={{ fontWeight: '500', marginLeft: 20 }} note>
              {formattedTime}
            </Text>
          </View>
        </Body>
        <Right />
      </ListItem>
    );
  }
}
