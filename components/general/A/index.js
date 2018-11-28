/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import { baseTextStyles } from 'components/general/base_styles';

export const A = styled.a`
  ${baseTextStyles};

  font-family: ${props => (props.font ? props.font : props.theme.textFont)};
  color: ${props => (props.color ? props.color : props.theme.infoColor)};

  &:hover {
    color: ${props => props.theme.dangerColor};
  }
  font-size: ${props => props.size};
  text-decoration: none !important;
`;

export default A;
