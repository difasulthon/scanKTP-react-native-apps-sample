import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../../assets/colors';
import {
  Button,
  Content,
  Container,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Header,
  Icon,
  Title,
} from 'native-base';

class WelcomeUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: ''
    }
  }
  handleChange = name => {
    this.setState({ editName: name });
  };
  handleDelete = (memoId) => {
    this.props.DeleteMemo(memoId);
  }

  render() {
    const { Memo } = this.props;
    // console.log('memo: ', Memo);
    return (
      <Container style={styles.container}>
        <Content>
          <Header style={{ backgroundColor: colors.primaryColor }} androidStatusBarColor={colors.secondaryColor}>
            <Body>
              <Title>Text Recognition</Title>
            </Body>
            <Right>
            </Right>
          </Header>

          <View style={{ padding: 10 }}>
            <Button
              style={{ backgroundColor: colors.primaryColor, width: '100%', justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('Camera')}
            >
              <Text >Take Picture</Text>
            </Button>
          </View>
          {/* <View style={{ padding: 10 }}>
            <Button
              style={{ backgroundColor: colors.primaryColor, width: '100%', justifyContent: 'center' }}
              // onPress={() => this.props.navigation.navigate('CaraLain')}
              onPress={() => this.props.navigation.navigate('ImageCropPicker')}
            >
              <Text >Another Way</Text>
            </Button>
          </View> */}
          <FlatList
            inverted
            data={Memo}
            keyExtractor={(memo, index) => index.toString()}
            renderItem={({ item, index }) => this.renderRow(item, index)}
          />
        </Content>
      </Container>
    );
  }

  renderRow = (memo, index) => {
    let id = memo.id;
    const { Memo } = this.props;
    return (
      <Card style={{ flex: 0, borderRadius: 3, marginLeft: 10, marginRight: 10 }}>
        <CardItem
          style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}
          button
          onPress={() => {
            this.props.navigation.navigate('MemoView', {
              otherParam: id,
            });
          }}
        >
          <Left>
            <Text style={styles.text}>{memo.name}</Text>
          </Left>

          <Right>
            <Button
              style={{ alignSelf: 'flex-end', backgroundColor: colors.deleteButtonColor }}
              full
              onPress={() => this.handleDelete(memo.id)}
            >
              <Icon style={{ fontSize: 24 }} active name="trash" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default WelcomeUI;
