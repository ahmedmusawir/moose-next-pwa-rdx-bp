import styled from 'styled-components';
import { baseHeadingStyles } from 'components/general/base_styles';

export const H2 = styled.h2`
  ${baseHeadingStyles};
  font-family: ${props => (props.font ? props.font : props.theme.headingFont)};
  color: ${props => (props.color ? props.color : props.theme.primaryColor)};
  font-size: ${props => props.size};
`;

export default H2;
