import React, {useState, useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * LDJ | 2022.05.02
 * @name MyInfo
 * @api -
 * @des
 * 1. 로그인한 유저의 정보를 보여주는 페이지 (닉네임, 아이디)
 * 2. 비밀번호 확인창으로 이동 (내 정보 수정으로 가기 위한)
 * 3. 로그아웃 가능
 *  */

const MyInfoPage = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F8F8F8',
      }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PwdCheck', {navigation: `${navigation}`})
        }
        style={{
          width: '85%',
          backgroundColor: 'white',
          shadowColor: '#000',
          elevation: 6,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderRadius: 10,
          marginTop: 15,
        }}>
        <View style={{marginLeft: 16}}>
          <Icon name="edit" color={'blue'} size={18} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            닉네임
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'grey',
              marginLeft: 10,
            }}>
            아이디
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '85%',
          backgroundColor: 'white',
          shadowColor: '#000',
          elevation: 6,
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 15,
        }}>
        <View style={{marginLeft: 16}}>
          <Icon name="local-parking" color={'pink'} size={18}></Icon>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: 'grey',
            marginRight: 16,
          }}>
          12345 P
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '85%',
          backgroundColor: '#F8F8F8',
          height: 60,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 100,
        }}>
        <Icon name="logout" color={'grey'} size={18}></Icon>
        <Text
          style={{
            fontSize: 16,
            color: 'grey',
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          로그아웃
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyInfoPage;