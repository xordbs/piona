import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import picnicIcon from '../../assets/picnic.svg';
import {WithLocalSvg} from 'react-native-svg';
/**
 * CSW | 2022.05.19
 * @name AlarmCard
 * @api
 * @des
 */

const AlarmCard = ({item}) => {
  const date = item.created_at.split('T')[0];

  return (
    <View style={styles.container}>
      <View style={styles.CardList}>
        <View style={styles.AlarmContent}>
          <Text style={styles.content}> {item.content} </Text>
          <Text style={styles.createdAt}> {date} </Text>
        </View>
        <View style={styles.iconBox}>
          <WithLocalSvg
            asset={picnicIcon}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 5,
  },
  CardList: {
    width: '85%',
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 6,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  AlarmContent: {
    flex: 2,
    marginLeft: 20,
  },
  iconBox: {
    position: 'relative',
    right: 30,
    top: 11,
  },
  content: {
    fontSize: 15,
    marginTop: 5,
    color: 'black',
  },
  createdAt: {
    fontSize: 10,
    marginTop: 5,
  },
});

export default AlarmCard;
