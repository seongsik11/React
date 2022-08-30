import React from "react";
import styled from "styled-components";
import {useTodoState} from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding:48px 32px 24px 32px;
    border-bottom:1px solid #e9ecef;
    h1{
        margin:0px;
        font-size:36px;
        color:343a40;
    }
    .day{
        margin-top:4px;
        color:#868e96;
        font-size:21px;
    } 
`;

const TasksLeft = styled.div`
    color:#20c997;
    font-size:18px;
    margin-top:40px;
    font-weight:bold;
`;

export default function TodoHead(){
    const today = new Date();

    const dateString = today.toLocaleString('ko-KR',{
        year:'numeric',
        month:'long',
        day:'numeric'
    });

    const dayName = today.toLocaleString('ko-KR', {weekday:'long'});
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    return(
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div class="day">{dayName}</div>
            <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
        </TodoHeadBlock>
    )
}

