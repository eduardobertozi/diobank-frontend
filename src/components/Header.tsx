import { Box, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box
      minWidth='100%'
      backgroundColor='#fff'
      color='#600f8c'
      padding='2'
      display='flex'
      justifyContent='center'
      position='fixed'
    >
      <Heading as='h2'>Dio Bank</Heading>
    </Box>
  )
}
