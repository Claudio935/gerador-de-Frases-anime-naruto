import {render,screen,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button/Button';


test('renders button with text', () =>{
    render(<Button>test</Button>);
    
    const buttonEl= screen.getByText('test');

    expect(buttonEl).toBeInTheDocument();

})
