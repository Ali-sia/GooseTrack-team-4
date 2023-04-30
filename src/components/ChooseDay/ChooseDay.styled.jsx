import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const ChoosedDayWrapper = styled.div`
overflow: hidden;
`;
export const TasksColumnsListWrapper = styled.div`
  overflow-x: scroll;
  width: 336px;
  ${greaterThan(
    'tablet',
    `
   width: 704px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  width: 1087px;
`
  )}

`;
export const TasksColumnsList = styled.div`
  display: flex;
  gap: 22px;
  /* margin-bottom: ${p => p.theme.space[4]}px; */
  width: fit-content;
    ${greaterThan(
    'tablet',
    `
   gap: 16px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  gap: 27px;
`
  )}
`;

export const AddColumnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  width: 299;
  height: 48;
  ${greaterThan(
  'tablet',
  `
    width: 304;
  height: 52;
   margin-right: 15px;
`
)}

  padding: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.addTaskBTN};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.btnMain};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  color: ${props => props.theme.colors.black};

  img {
    margin-right: ${p => p.theme.space[4] - 1}px;
  }

`;


