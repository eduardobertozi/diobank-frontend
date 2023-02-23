import { Button } from '@chakra-ui/react'

interface BotaoProps {
    onclick: () => void
    styles: {
        bg: string,
        sz: string,
        w: string,
        mt: number,
        cl: string
    }
}

export const Botao = ({ onclick, styles }: BotaoProps) => {
    const { bg, sz, w, mt, cl } = styles
    
    return (
        <Button
            onClick={onclick}
            backgroundColor={bg}
            size={sz}
            width={w}
            marginTop={mt}
            color={cl}
            _hover={{
                opacity: 0.7
            }}
        >
            Button
        </Button>
    )
}