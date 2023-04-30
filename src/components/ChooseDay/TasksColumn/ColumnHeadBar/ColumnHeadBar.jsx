import {
  ColumnHeadBarWrapper,
  ColumnHeadBarTitle,
  StyledRoundButton,
  RoundBtnIconSvg,
} from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ toggleModal, title }) {
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{title}</ColumnHeadBarTitle>
      <StyledRoundButton type="button" onClick={() => toggleModal()}>
        <RoundBtnIconSvg />
      </StyledRoundButton>
    </ColumnHeadBarWrapper>
  );
}

// 1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі.
