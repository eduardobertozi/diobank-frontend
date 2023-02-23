import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve ter uma mensagem de boas vindas', () => {
        login()
        expect(mockAlert).toBeCalled()
    })

    it('A mensagem de boas vindas deve ser Bem Vinda!', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })
})