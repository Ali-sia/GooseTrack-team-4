import styled from 'styled-components';
import TextMask from 'react-text-mask';
import THEME_CONTEXT from 'context/ThemeContext';

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT
      ? 'rgba(52, 52, 52, 0.8)'
      : 'rgba(250, 250, 250, 0.3)'};
`;

const Input = styled.input`
  display: block;
  padding: 12px 14px;

  background-color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#F7F7F7' : 'transparent'};
  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#616161' : '#FFFFFF'};
  border-radius: 8px;
  border-width: 0;
  border: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT
      ? 'none'
      : '1px solid rgba(255, 255, 255, 0.15)'};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  ::placeholder {
    opacity: 1;
  }
  box-sizing: 'border-box';
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

const TimeInput = styled(TextMask)`
  display: block;
  padding: 12px 14px;

  background-color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#F7F7F7' : 'transparent'};
  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#616161' : '#FFFFFF'};
  border-radius: 8px;
  border-width: 0;
  border: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT
      ? 'none'
      : '1px solid rgba(255, 255, 255, 0.15)'};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  ::placeholder {
    opacity: 1;
  }
  box-sizing: 'border-box';
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

const InnerContainer = styled.div`
  max-width: 126px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 163px;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
const StyledRadioLabel = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) =>
    theme === THEME_CONTEXT.LIGHT ? '#616161' : '#FFFFFF'};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${props => (props.primary ? '#3E85F3' : '#EFEFEF')};
  color: ${props => (props.primary ? '#ffffff' : '#111111')};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  svg {
    margin-right: 8px;
  }
`;

const RadioIcon = ({ color }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="5" r="5" fill={color} />
  </svg>
);

const RadioIconChecked = ({ color }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7"
      cy="7"
      r="6.35"
      stroke={color}
      strokeOpacity="0.3"
      strokeWidth="1.3"
    />
    <g transform="translate(2, 2)">
      <RadioIcon color={color} />
    </g>
  </svg>
);

export {
  Form,
  Label,
  Input,
  TimeInput,
  TitleContainer,
  TimeContainer,
  InnerContainer,
  RadioContainer,
  RadioLabel,
  RadioInput,
  StyledRadioLabel,
  ButtonContainer,
  Button,
  RadioIcon,
  RadioIconChecked,
};
