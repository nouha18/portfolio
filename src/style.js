import { animated} from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Container = styled(animated.div)`
position: relative;
display: grid;
grid-template-columns: repeat(4, minmax(60px, 1fr));
grid-gap: 25px;
padding: 25px;
background: white;
border-radius: 5px;
cursor: pointer;
box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
will-change: width, height;
`;

const Item = styled(animated.div)`
width: 250px;
height: 250px;
background: white;
border-radius: 5px;
will-change: transform, opacity;
`;

export {Container, Item }
