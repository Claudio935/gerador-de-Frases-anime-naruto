import styled from 'styled-components';
import naruto from './images/naruto.png'
import { Quotes } from './component/Quotes';
import {getQuote} from './services/quotesService';
import {  useState } from 'react';
import  jutsu from './sound/jutsu.mp3'

let n=0
function App() {


const [quote,setQuote] = useState('Clique no botão')
const [speaker ,setSpeaker] = useState('Uma frase do anime Naruto aparecerá !!')
const onUpdate = async()=>{
  let quote = await getQuote()
  let sound = new Audio(jutsu)
n<9?n++:n=0
  sound.play()
    setQuote(quote[n].quote)
    setSpeaker(quote[n].character)
 
  
  
}
    


  return (
   <Content>

    <Quotes speaker={speaker} quote={quote} onUpdate={onUpdate} />
    <Naruto src={naruto} alt={"Figura do Naruto"}></Naruto>
    </Content>
  );
}

export default App;
const Content = styled.div`
display:flex;
flex-direction: column;
flex: 1;
height: 100vh;
box-sizing: border-box;
padding: 0 50px;
display: flex;
flex-wrap:wrap;
justify-content: center;
align-items: center;

`;
const Naruto =styled.img`
max-width: 35vw;
align-self: flex-end;
`;
