import {render,screen,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Quotes} from './component/Quotes'


test('render received Quote and a speaker ',()=>{
const quote = 'Clique no botão'
const speaker = "Uma frase do anime Naruto aparecerá !!"
render(<Quotes quote={quote} speaker={speaker}/>);

const quotesEl = screen.getByText(quote);
const speakerEl = screen.getByText(speaker);


expect(quotesEl).toBeInTheDocument();
expect(speakerEl).toBeInTheDocument();


});
test('calls a callback when button is pressed', () =>{
const quote = 'Clique no botão'
const speaker = "Uma frase do anime Naruto aparecerá !!"
    const callback = jest.fn();
    render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />)
    const buttonEl = screen.getByRole('button')
    fireEvent.click(buttonEl)
    expect(callback).toHaveBeenCalledTimes(1)
})