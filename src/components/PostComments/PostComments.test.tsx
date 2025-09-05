import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar 2 comentarios "gostei" e "massa"', () =>{
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'gostei' 
            },
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'massa'
            },
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('gostei')).toBeInTheDocument()
        expect(screen.getByText('massa')).toBeInTheDocument()
    })
});


