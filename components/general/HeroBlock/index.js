import styled from 'styled-components';
import { baseContainerStyles } from 'components/general/base_styles';

export const HeroBlock = styled.section`
  ${baseContainerStyles};
  background: ${props =>
    props.bgColor ? props.bgColor : props.theme.backgroundGradiant};
  min-height: 100vh;
`;

export default HeroBlock;
