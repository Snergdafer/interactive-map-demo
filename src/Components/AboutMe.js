import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

const AboutMe = () => {
  return (
    <Flex w='100%' h='100%' bgGradient='linear(to-tl, #1d1db3, #202042)' flexDir='column'>

    <Flex w="100%" >
      <Flex flexDir="column" w="100%" pt="60px">
        <Flex mr="650px" justifyContent="center">
          <Text fontSize="18px" fontWeight="500" color='white'>
            Hello I'm
          </Text>
        </Flex>
        <Flex justifyContent="center" w="100%" pt="30px" pb="40px">
          <Flex
            justifyContent="center"
            alignItems="center"
            bgGradient='linear(to-tl, #f7e3cb, white)'
            borderRadius="5px"
            px="40px"
            py="10px"
          >
            <Text
              fontFamily="lora"
              fontSize="50px"
              fontWeight="500"
              color="black"
            >
              Jesse Etherington
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center" ml="450px">
          <Text fontSize="20px" fontWeight="500" color='white'>
            Mobile Application and Web Engineer
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Box h='2px' borderRadius='2px' w='60%' bgColor='#f7e3cb' mt='100px'/>
    <Flex mt='110px' px='100px'>
        <Text color='white'>
            I've spent the last several years developing systems in Block Chain and Crypto.
            This experience has opened my eyes to the pace at which new technologies grow and adapt to market needs.
            I'm exited to grow into my next role as a Mid Level Developer!
        </Text>
    </Flex>
    </Flex>
  )
}

export default AboutMe
