import styled from 'styled-components';
import { baseTextStyles } from 'components/general/base_styles';

export const P = styled.p`
  ${baseTextStyles};
  font-family: ${props => (props.font ? props.font : props.theme.textFont)};
  color: ${props => (props.color ? props.color : props.theme.primaryColor)};
`;

export default P;
