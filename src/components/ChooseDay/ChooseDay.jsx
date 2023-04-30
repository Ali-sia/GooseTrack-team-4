import DayCalendarHead from './DayCalendarHead/DayCalendarHead';

import {
  ChoosedDayWrapper,
  TasksColumnsList,
  TasksColumnsListWrapper,
} from './ChooseDay.styled';
import TasksColumn from './TasksColumn/TasksColumn';

export default function ChoosedDay({
  currentDate,
  activeDate,
  toggleModal,
  changeActiveDay,
}) {
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
            {columnData.map(column => (
              <TasksColumn key={column.id} title={column.title} />
            ))}
            {/* <TasksColumn toggleModal={toggleModal} />
            <TasksColumn toggleModal={toggleModal} />
            <TasksColumn toggleModal={toggleModal} /> */}
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
