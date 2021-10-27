import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {getQuote} from './quotesService'
const response = {test : "testing"};
const server = setupServer(rest.get('https://animechan.vercel.app/api/quotes/anime?title=naruto',(req,res,ctx) =>{
    return res(ctx.json(response));
})
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(()=> server.close());
test('transform json response into object', async ()=>{
const quote = await getQuote();
expect(quote).toStrictEqual(response);
})