import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

const AboutMe = () => {
  return (
    <Flex w='100%' h='100%' bgColor='#4C4B63' flexDir='column'>

    <Flex w="100%" >
      <Flex flexDir="column" w="100%" pt="60px">
        <Flex  justifyContent="center">
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
        <Flex justifyContent="center" >
          <Text fontSize="20px" fontWeight="500" color='white'>
            React and React Native Engineer
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Box h='2px' borderRadius='2px' w='95%' alignSelf='center' bgColor='#f7e3cb' mt='100px'/>
    <Flex mt='110px' px='100px' alignSelf='center'>
        <Text color='white' w='500px'>
        I have 3 years of in-house and remote experience coding for projects ranging from Proprietary Sales Apps to Cryptocurrency DApps. I bring my love of gaming, music, and ideation to my work. I’m also passionate about the outdoors, spending lots of time at my family’s cabin.
        </Text>
    </Flex>
    </Flex>
  )
}

export default AboutMe
