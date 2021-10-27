import styled from 'styled-components';
import {string,func} from 'prop-types';
import {Button} from './Button/Button'

export const Quotes=({speaker , quote, onUpdate})=>{

  
   

    return(
        <Wraper>
        <Quote role='p'>{quote}</Quote>
        <Speaker>{speaker}</Speaker>
        <Button onClick = {onUpdate}>Quote no jutsu</Button>
        </Wraper>
    )
}
Quotes.propTypes ={
    quote:string,
    speaker: string,
    onUpdate: func
}
const Wraper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 45%;
`;
const Quote = styled.p`
font-size: 2em;
margin: 0;
background-color: white;

`;
const Speaker =styled(Quote)`
text-align: right;
margin-bottom:15px ;
`