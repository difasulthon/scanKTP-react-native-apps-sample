import React, { Component } from 'react';
import { StyleSheet, Clipboard } from 'react-native';
import { Button, Content, Container, Text, List, Left, Body, Right, Header, Icon, Title } from 'native-base';
import colors from '../../assets/colors';

class MemoViewUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  onCancel() {
    this.setState({ visible: false });
  }
  onOpen() {
    this.setState({ visible: true });
  }

  render() {
    const { Memo } = this.props;
    const index = this.props.route.params.otherParam
    const header = Memo[index].name;
    return (
      <Container style={styles.container}>
        <Content>
          <Header style={{ backgroundColor: colors.primaryColor }} androidStatusBarColor={colors.secondaryColor}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>{header}</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={async () => {
                  await Clipboard.setString(Memo[index].content);
                  alert('Copied to Clipboard!');
                }}
              >
                <Icon type="AntDesign" name="copy1" />
              </Button>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.navigate('EditView', {
                    otherParam: index,
                  })
                }
                }
              >
                <Icon type="AntDesign" name="edit" />
              </Button>
            </Right>
          </Header>
          <Text style={{padding: 10, fontSize: 14}}>Wilayah: {Memo[index].wilayah}</Text>
          <Text style={{padding: 10, fontSize: 14}}>NIK: {Memo[index].nik}</Text>
          <Text style={{padding: 10, fontSize: 14}}>Nama: {Memo[index].nama}</Text>
          <Text style={{padding: 10, fontSize: 14}}>TTL: {Memo[index].birthdate}</Text>
          <Text style={{padding: 10, fontSize: 14}}>Jenis Kelamin: {Memo[index].kelamin}</Text>
          <Text style={{padding: 10, fontSize: 14}}>Alamat: {Memo[index].alamat}</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
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

export default MemoViewUI;
