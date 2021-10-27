import {render,screen,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
const response = {speaker: 'Speaker', quote: 'quote'}
const server = setupServer(rest.get('https://animechan.vercel.app/api/quotes/anime?title=naruto',(req,res,ctx) =>{
    return res(ctx.json(response));
})
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(()=> server.close());
test('renders the App with a button, a quote and a button', ()=>{

    render(<App/>);
    
    const buttonEl = screen.getByRole('button')
    const imageEl =screen.getByRole('img')
    const textEl= screen.getByRole('p')
    
    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
    
});
test('calls api on button click and update its text', async()=>{
    render(<App/>);
    const buttonEl = screen.getByRole('button')
    fireEvent.click(buttonEl)
    const quoteEl =screen.findByText(response.quote);
    expect(quoteEl).toBeInTheDocument
})