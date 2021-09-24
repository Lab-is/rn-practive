import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App = () => {
  //todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);

  const addTodo = text => { 
    //사용자가 입력한 텍스트를 인자로 새로운todo 생성
    setTodos([
        ...todos,
        {id: Math.random().toString(), textValue: text, checked: false},
        //id: 랜덤부여, checked: false 기본
        //기존 할 일 목록은 todo를 이용해서 그대로 가지고옴
    ]);
  };

  // onRemove 함수: setTodos를 사용하여 상태를 업데이트
  // 각 아이템의 고유 id를 받아와서 해당 아이디를 가진 
  // 아이템 객체만 제외하고 새로운 배열을 만드는 함수
  const onRemove = id =>e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // onToggle 함수는 아이템의 id를 받아와서 
  //해당하는 아이템의 checked 속성값을 반대로 변경해줌
  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  //여기서 앱에 나타남  
  //바로 아래 style에서 각 양식과 관련된 함수? 상수들 찾아서 불러옴.
  //여기서 불러오는 양식 함수들: container, appTitle  
  // <Text> 대신에 Text style={styles.appTitle} 하면 appTitle의 양식대로 뒤에 감싼 문자를 추가할 수 있음
  // View는 말 그대로 View, Text는 Text. <></>들이 서로 감싼 구조
  // View 종류: View, SafteAreaView, ScrollView 
  // <ScrollView></ScrollView> 하면 ScrollView가 생김. 그리고 그 안에 <Text>넣을 수 있움
  // <TodoInsert />로 얘 기능 그냥 쓸 수 있음
  return ( 
    <SafeAreaView style={styles.container}> 
      <Text style={styles.appTitle}>Test</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1, //얜 뭘까
    backgroundColor: '#000000', //배경색 검정
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  appTitle: {
    color: '#B9Bfff', //타이틀색 하양
    fontSize: 30,
    marginTop: 30, //위에 여백
    marginBottom: 30, //아래 여백
    fontWeight: '300', //얜 뭘까2
    //textAlign: 'center',
    marginLeft: 70,
    backgroundColor: '#000000' 
  },
  card: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopLeftRadius: 10, //라운드 코더
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});


export default App;