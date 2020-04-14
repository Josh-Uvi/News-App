import { Container, List, Text } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator, Alert, RefreshControl, View } from 'react-native';
import DataItem from '../../helpers/data';
import { fetchArticles } from '../../helpers/news';

export default class tab4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: []
    };
  }

  handleItemDataOnPress = () => {
    this.props.children;
  };

  getNews = () => {
    this.setState({ isLoading: true });
    fetchArticles('technology')
      .then(
        data => {
          this.setState({
            isLoading: false,
            data
          });
        },
        error => {
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
    const { isLoading, data } = this.state;
    let view = isLoading ? (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator
          animating={isLoading}
          size='large'
          style={{
            alignItems: 'center',
            padding: 10
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
        renderRow={item => (
          <DataItem
            navigation={navigation}
            onPress={this.handleItemDataOnPress}
            data={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={this.getNews} />
        }
        keyExtractor={item => item.url}
      />
    );
    return <Container>{view}</Container>;
  }
}
