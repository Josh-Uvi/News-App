import {
  Body,
  Container,
  List,
  ListItem,
  Right,
  Text,
  View,
} from 'native-base';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { fetchSource } from '../helpers/news';

class SourceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, navigation } = this.props;
    const { name, description, category, country } = data;
    return (
      <ListItem thumbnail>
        <Body>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SourceDetail', {
                content: data,
              })
            }
          >
            <Text numberOfLines={1}>{name}</Text>
            <Text style={{ fontWeight: '500' }} note numberOfLines={2}>
              {description || 'Read More....'}
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
              category: {category}
            </Text>
            <Text style={{ fontWeight: '500', marginLeft: 20 }} note>
              country: {country}
            </Text>
          </View>
        </Body>
        <Right />
      </ListItem>
    );
  }
}

export default class NewsSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  handleItemDataOnPress = () => {
    this.props.children;
  };

  getNews = () => {
    this.setState({ isLoading: true });
    fetchSource()
      .then(
        (data) => {
          this.setState({
            isLoading: false,
            data,
          });
        },
        (error) => {
          Alert.alert('An error occurred', error);
        }
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    const { navigation } = this.props;
    const { data, isLoading } = this.state;
    let view = isLoading ? (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator
          animating={isLoading}
          size='large'
          style={{
            alignItems: 'center',
            padding: 10,
          }}
          color='#00ff00'
        />
        <Text style={{ textAlign: 'center', justifyContent: 'center' }}>
          loading data....
        </Text>
      </View>
    ) : (
      <List
        dataArray={data}
        renderRow={(item) => (
          <SourceItem
            onPress={this.handleItemDataOnPress}
            data={item}
            navigation={navigation}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={this.getNews} />
        }
        keyExtractor={(item) => item.id}
        extraData={data}
      />
    );
    return <Container>{view}</Container>;
  }
}
