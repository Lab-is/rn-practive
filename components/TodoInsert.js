// components/TodoInsert.js
//텍스이 입력창과 추가 버튼
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';


//속성으로 전달한 oddAddTodo 함수 받아오기
const TodoInsert = ({onAddTodo}) => {
    //텍스트값이 문자열이니까 초기 상태값은 ''로 표현
    //newTodoItem: 새로 입력한 텍스트 상태 나타냄
    //setNewTodoItem: newTodoItem을 업데이트하는 함수
    const [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = newTodo => { //실시간으로 사용자가 입력한 텍스트값 변화 관리 위한 함수
        setNewTodoItem(newTodo);
    };

    // 아이템을 추가해주는 핸들러
    //onAddTodo 함수: 사용자가 입력한 텍스트값 전달받아서 목록에 추가
    //setNewTodoItem 함수: 입력창을 공백으로 초기화시키는 역할
    const addTodoHandler =() => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    }

    //(1) 새로운 .js 파일안에 const AAA = () => { return (~~~~); }; 이런거 추가
    //return값 안에는 그냥 App.js에서처럼 <View style={~~~}></View>하면 됨
    // 새로운 .js에서 <View style={styles.AAAA}}></View> 할때는
    //(2) 아래에 const styles = StyleSheet.create({AAAA: {}, ~~~ }); 이런식으로 해야됨
    // <Text></Text> 안 하고 <TextInput style={} ~~~~~~ />로만 해도 되나봄
    // <Button title={} />
    // 다 쓰고 아래에 export default TodoInsert 해줘야됨. TodoInsert가 App.js의 App() 이런 느낌인듯
    // 아래 StyleSheet에서 만들어서 가지고 올 함수: inputContainer, input, button
    
    /* 버튼 누르면
    <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
    </View>
    => 눌렀을때 addTodoHandler 함
    */
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add an item!"
                placeholderTextColor={'#999'}
                color ='#ffffff'
                onChangeText={todoInputHandler}
                value={newTodoItem}
                autoCorrect={false}
            />
            <View style={styles.button}>
                <Button title={'ADD'} onPress={addTodoHandler} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    // inputContainer은 여기서 정확히 뭐하는앤지 모르겠음
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
    button: {
        marginRight: 10
    },
});

export default TodoInsert;