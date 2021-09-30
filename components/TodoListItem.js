// components/TodoListItem.js
//추가된 아이템 하나를 나타내는 부분
//아이템 완료 여부 상태값, 완료 체크 이벤트
//삭제 이벤트 기능
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    //아래서 가지고 올 함수: container, circle, text
    // 여기서 circle을 만질 수 있도록 <TouchableOpacity></TouchableOpacity>로 감싸줌
    // circle도 View의 style로 표현
    //style 여러개 적용: <Text style={[styles.text, styles.strikeText]}></Text>
    /*
    아이콘 적용시키기
    <View style={styles.completeCircle}>  //얘처럼 아이콘이 들어갈 공간(completeCircle) 설정해주고
        <Icon name="scircledowno" size={30} color="#3143e8" /> //아이콘 적용
    </View>
    */
   //왜 remove 아이콘은 view가 아닌 text 안에 있는걸까?
   //그리고 text style을 buttonText로 했고 아래 buttonText는 써주지도 않았는데 어떻게 이게 작동하는거지?
   // case? 사용하기:  
   //<TouchableOpacity onPressOut={ontoggle(id)}> {checked ? (o~~) : (x~~~)}

    /*
        <Text style={[
            styles.text, 
            checked ? styles.strikeText : styles.unstrikeText,
        ]}> 
            {textValue}
        </Text>
    */

    /*
    <TextInput style={[
        styles.text, 
        checked ? styles.strikeText : styles.unstrikeText,
    ]}> 
        {textValue}
        onChangeText={(newValue)=>setText(newValue)}
    </TextInput>
    */

    const [textt, setText] = useState('');  ///
    // textt= textValue; //얘 에러남. (textt: read only)
    // setText(textValue); //이것도 rerender 한다고 안됨ㅠㅠ

   return (
        <View style={styles.container}>
            <TouchableOpacity onPressOut={onToggle(id)}>
                {checked ? (
                    <View style={styles.completeCircle}>
                        <AntDesign name="circledowno" size={30} color="#AAAAAA" />
                    </View>
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>

            <TextInput style={[
                styles.text, 
                checked ? styles.strikeText : styles.unstrikeText,
            ]}
            value = {textt}
            onChangeText={(textt)=>setText(textt)}
            /> 
                

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={onRemove(id)}>
                    <AntDesign name="delete" size={30} color="#e33057" />
                </Text>
            </TouchableOpacity>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: { //각 아이템의 container. 
        backgroundColor: '#616161',
        borderTopLeftRadius: 7, //!라운드 코더
        borderTopRightRadius: 7, //!라운드 코더
        borderBottomLeftRadius: 7, //!라운드 코더
        borderBottomRightRadius: 7, //!라운드 코더
        marginVertical: 2, //!위아래로 여백: 5
        flex: 1,
        //borderBottomColor: '#bbb',
        //borderBottomWidth: StyleSheet.hairlineWidth, //굵기 완전 얇게
        flexDirection: 'row', //가로 방향
        alignItems: 'center', //가운데 정렬
        justifyContent: 'space-between', //얜 뭐지
    },
    text: { //각 container 안에 들어갈 text (아이템 하나)
        color: '#ffffff',
        flex: 5, //'(왼쪽부터) 시작하는 위치?' 
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20, //위아래로 여백: 20
        width: 100,
    },
    circle: { //원 
        width: 30, //border radius 있는데 굳이 얠 쓰는 이유를 모르겠음
        height: 30,
        borderRadius: 15,
        borderColor: '#AAAAAA',
        borderWidth: 2,
        marginRight: 20, //오른쪽 여백 20
        marginLeft: 20, //왼쪽 여백 20
    },
    completeCircle: { //원이 들어갈 공간 view
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: { //선 중앙 줄 긋기
        color: '#ffffff',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: "#ffffff",
    },
    buttons: {
        flexDirection: 'row',
    },
    buttonContainer: { //버튼 칸
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;