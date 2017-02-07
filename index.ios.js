/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ListView,
  TouchableOpacity,
  TouchableHighlight, 
} from 'react-native';
import _ from 'lodash';

import Icon from 'react-native-vector-icons/FontAwesome';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

const people = [
  {firstName: "sophie", lastName: "thornton", rownNumber: 30},
  {firstName: "mary", lastName: "thornton", rownNumber: 14},
  {firstName: "alice", lastName: "thornton", rownNumber: 8},
  {firstName: "sophie", lastName: "thornton", rownNumber: 30},
  {firstName: "mary", lastName: "thornton", rownNumber: 14},
  {firstName: "alice", lastName: "thornton", rownNumber: 8},
  {firstName: "sophie", lastName: "thornton", rownNumber: 30},
  {firstName: "mary", lastName: "thornton", rownNumber: 14},
  {firstName: "alice", lastName: "thornton", rownNumber: 8},
  {firstName: "sophie", lastName: "thornton", rownNumber: 30},
  {firstName: "mary", lastName: "thornton", rownNumber: 14},
  {firstName: "alice", lastName: "thornton", rownNumber: 8},
  {firstName: "sophie", lastName: "thornton", rownNumber: 30},
  {firstName: "mary", lastName: "thornton", rownNumber: 14},
  {firstName: "alice", lastName: "thornton", rownNumber: 8},
]

const myButton = (
  <View style={{padding:5}}>
    <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        style={{width:250,borderRadius:10}}
        onPress={this.loginWithFacebook}>
      Login with Facebook
    </Icon.Button>
  </View>
);
const myButton2 = (
  <View style={{padding:5}}>
      <Icon.Button
        name="twitter"
        backgroundColor="#3b5998"
        style={{width:250,borderRadius:10}}
        onPress={this.loginWithFacebook}>
      Follow me on Twitter
    </Icon.Button>
  </View>
);


export default class educate extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };



  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
          <TouchableHighlight>
            {myButton}
          </TouchableHighlight>

          <Text style={styles.tabText}>{_.capitalize(pageText)}</Text>
          <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>

          <ListView
            dataSource={this.state.peopleDataSource}
            renderRow={(person) => {return this._renderPersonRow(person)}} />

          {myButton2}
        </View>
    );
  };
//{'${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}'}
//<Icon name="chevron-right" size={10} style={styles.personMoreIcon} />
  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => console.log(person) }>
        <Text style={styles.personName}>
          {_.capitalize(person.firstName)} {_.capitalize(person.lastName)}
        </Text>
        <View style={{flex:1}} />
        <Icon name="chevron-right" size={20} style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  render() {
    return (


      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="grey"
        barTintColor="darkslateblue">

        <TabBarIOS.Item
          title="Blue Tab"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          badgeColor="black"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./flux.png')}
          selectedIcon={require('./relay.png')}
          renderAsOriginal
          title="More"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>

      </TabBarIOS>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    marginTop: 20,
    flex: 1,
    alignItems: 'stretch',
  },
  tabText: {
    color: 'white',
    margin: 10,
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  personName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25
  },
  personMoreIcon: {
    color: "white",
    height: 20,
    width: 20,
    marginRight: 25
  },
  button: {
  	padding: 10,
  	borderRadius: 5,
  	backgroundColor: '#272822',
  	color: 'white'
  }
});

AppRegistry.registerComponent('educate', () => educate);
