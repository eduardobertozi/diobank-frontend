import { Box, Center, Heading, Input } from '@chakra-ui/react'
import { login } from '../services/login'
import { Botao } from './Botao'

export const Card = () => {
  return (
    <>
      <Center>
        <Box 
          backgroundColor='#FFFFFF' 
          borderRadius='lg' 
          padding='15px' 
          maxWidth='568px' 
          marginTop='60px'
        >
          <Center>
            <Heading as='h4' size='md' marginBottom={5}>Faça o login</Heading>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Botao
              onclick={login}
              styles={{
                bg:'#600f8c',
                sz:'md',
                w:'100%',
                mt:5,
                cl: '#fff'
              }}
            />
          </Center>
        </Box>
      </Center>
    </>
  )
}