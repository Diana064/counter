import styled from 'styled-components';

export const ListTodo = styled.ul`
  display: inline-flex;
  flex-direction: column;
`;
export const ListDeleteBtn = styled.button`
  width: 75px;
  height: 25px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid black;
  justify-content: space-between;
`;
