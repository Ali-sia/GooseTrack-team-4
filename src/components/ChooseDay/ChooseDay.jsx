import React, { useEffect, useMemo } from "react";
import shortid from 'shortid';
import AddTaskIcon from 'components/Buttons/AddTaskBtn/AddTaskIcon.svg';
import { useDispatch, useSelector } from "react-redux";
import { fetchColumns, addColumn, deleteColumn } from "redux/columns/columns.operations";
import { selectCategories, selectNumbers, selectIsLoading, selectError } from "redux/columns/columns.selectors";

import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumn from './TasksColumn/TasksColumn';

import {
  AddColumnButton,
  ChoosedDayWrapper,
  TasksColumnsList,
  TasksColumnsListWrapper,
} from './ChooseDay.styled';

export default function ChoosedDay({
  currentDate,
  activeDate,
  toggleModal,
  changeActiveDay,
}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const number = useSelector(selectNumbers);
  const columnsData = useSelector(selectCategories);
    
  useEffect(() => {
        dispatch(fetchColumns());
  }, [dispatch]);
  
  const addNewColumn = ({ title, number }) => {
        const currentColumn = { id: shortid.generate(), title: title, number: number }
        
        dispatch(addColumn(currentColumn));
  };
  
  const deleteCurrentColumn = id => {
        dispatch(deleteColumn(id));
    };

  const columnData = [
    { id: 'column1', title: 'To do', number: 1 },
    { id: 'column2', title: 'In progress', number: 2 },
    { id: 'column3', title: 'Done', number: 3 },
    // { id: 'column4', title: 'Add new category', number: 4 },
  ];

  return (
    <>
      <ChoosedDayWrapper>
        <DayCalendarHead
          currentDate={currentDate}
          activeDate={activeDate}
          changeActiveDay={changeActiveDay}
        />
        <TasksColumnsListWrapper>
          <TasksColumnsList>
            {columnsData.map(column => (
              <TasksColumn
                key={column.id}
                title={column.title}
                toggleModal={toggleModal}
                onDeleteColumn={deleteCurrentColumn}
                onAddColumn={addNewColumn}
              />
            ))}
            <AddColumnButton
              // onClick={openModal}
            >
              <img src={AddTaskIcon} alt="+"></img>
              <span> Add category </span>
            </AddColumnButton>
          </TasksColumnsList>
        </TasksColumnsListWrapper>
      </ChoosedDayWrapper>
    </>
  );
}

// 1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера.
