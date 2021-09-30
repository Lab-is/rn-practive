// components/TodoList.js
//아이템들을 스크롤뷰를 통해 보여줌
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem'; //같은 폴더 내에 있으면 ./components 없이 그냥 써야됨


const TodoList = ({todos, onRemove, onToggle}) => {
    // ScrollView의 style중에 contentContainerStyle 이런것도 있나봄
    // 안에 보여주는 내용은 TodoListItem으로 표현
    // TodoList 컴포넌트에서todos, onRemove함수를 받아와서 TodoListItem 컴포넌트로 전달 할때에는 배열에 담긴 객체 하나하나를 넘겨줘야됨
    //map 함수를 이용해서 todos에 담긴 아이템을 하나씩 TodoList 컴포넌트로 전달함
    // 앞에서 랜덤으로 id 만들어준 이유가 여기 있음
    // 리스트 아이템을 출력할때는 각 아이템의 고유번호를 key값으로 줘야됨

    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoListItem 
                    key={todo.id} 
                    {...todo} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;