import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Content, Container, Text, Item, Left, Body, Right, Header, Icon, Title, Textarea } from 'native-base';
import colors from '../../assets/colors';

class EditViewUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MemoName: '',
      MemoWilayah: '',
      MemoNIK: '',
      MemoNama: '',
      MemoTTL: '',
      MemoJK: '',
      MemoAlamat: '',
      editContent: ''
    }
  }
  componentDidMount() {
    const index = this.props.route.params.otherParam
    const { Memo } = this.props;
    this.setState({
      MemoName: Memo[index].name,
      MemoWilayah: Memo[index].wilayah,
      MemoNIK: Memo[index].nik,
      MemoNama: Memo[index].nama,
      MemoTTL: Memo[index].birthdate,
      MemoJK: Memo[index].kelamin,
      MemoAlamat: Memo[index].alamat
    });
  }

  handleChange = name => {
    this.setState({ editContent: name });
  };

  save = (memoId, memoName) => {
    this.props.UpdateMemo(
      memoId,
      this.state.MemoName,
      this.state.MemoWilayah,
      this.state.MemoNIK,
      this.state.MemoNama,
      this.state.MemoTTL,
      this.state.MemoJK,
      this.state.MemoAlamat
    );
    this.props.navigation.navigate('Welcome');
  };

  render() {
    const { Memo } = this.props;
    const index = this.props.route.params.otherParam
    return (
      <Container style={styles.container}>
          <Header style={{ backgroundColor: colors.primaryColor }} androidStatusBarColor={colors.secondaryColor}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Body>
              <Title>Edit</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.save(index)}>
                <Icon type="FontAwesome5" name="save" />
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={styles.ContentContainer}>
            <View style={{flex: 1}}>
              <View style={styles.RowInputContent}>
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>Memo Name :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.NameInput = input}
                  value={this.state.MemoName}
                  onChangeText={(text) => this.setState({ MemoName: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>Wilayah :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.WilayahInput = input}
                  value={this.state.MemoWilayah}
                  onChangeText={(text) => this.setState({ MemoWilayah: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>NIK :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.NIKInput = input}
                  value={this.state.MemoNIK}
                  onChangeText={(text) => this.setState({ MemoNIK: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>Nama :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.NamaInput = input}
                  value={this.state.MemoNama}
                  onChangeText={(text) => this.setState({ MemoNama: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>TTL :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.TTLInput = input}
                  value={this.state.MemoTTL}
                  onChangeText={(text) => this.setState({ MemoTTL: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>Jenis Kelamin :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.JKInput = input}
                  value={this.state.MemoJK}
                  onChangeText={(text) => this.setState({ MemoJK: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
                <View style={styles.InputLabelContainer}>
                  <Text style={styles.TextLabelContainer}>Alamat :</Text>
                </View>
                <TextInput
                  ref={(input) =>  this.AlamatInput = input}
                  value={this.state.MemoAlamat}
                  onChangeText={(text) => this.setState({ MemoAlamat: text })}
                  underlineColorAndroid={'transparent'}
                  style={styles.TextInputContainer} />
              </View>
            </View>
          </Content>
          
      </Container>
    );
  }
  renderItem = memo => {
    return (
      <Content>
        <Text>{memo}</Text>
      </Content>
    );
  };
  BlurInput(){
    this.NameInput.blur();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  ContentContainer: {
    padding: 10,
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
  RowInputContent: {
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  InputLabelContainer: {
    flexDirection:'row', 
    flexWrap:'wrap',
  },
  TextLabelContainer: {
    fontSize: 18,
    paddingBottom: 2,
    color: '#2d2d2d',
  },
  TextInputContainer: {
    backgroundColor: '#f1f1f1',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    color: '#2d2d2d',
    height: 50,
    borderRadius: 20,
  },
});

export default EditViewUI;
