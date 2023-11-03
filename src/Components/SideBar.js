import React from 'react'
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons'

const SideBar = ({handleNavigationPress, mapVisible}) => { 

    return (
        <Flex flexDirection='column' w='400px' bgColor='#383847' h='100%'>
            <Flex boxShadow='lg' w='100%' h='100px' alignItems='center' justifyContent='center' bgGradient='linear(to-t, #5402f7, #094dd6)'>
                <Text ml='15px' color='white' fontSize='25' fontWeight='bold'>My Portfolio</Text>
            </Flex>
          <Flex w='100%'  flexDir='column' alignItems='center' py='10px'  px='20px' h='200px'>
          <Button onClick={() => handleNavigationPress('about')} p='15px' w='120px' mt='15px'>About</Button>
            <Button onClick={() => handleNavigationPress('map')} p='15px' w='120px' mt='15px'>Map</Button>
          </Flex>
            <Flex flexDir='column'  w='100%' px='20px'h='100%'>
                <Box borderBottomWidth='1px' borderBottomColor='lightgray' mb='20px'/>
               {mapVisible ? ( <Text color='white'>
                    This project was built to demonstrate the usage of the 
                    ArchGIS Javascript API and a couple of Calcite Components.
                </Text>) :
                (
                    <Flex justifyContent='flex-end' px='20px' flexDir='column' h='100%' mb='25px'>
                        <Text color='white'>Shoot me an email at:</Text>
                        <Text color='white'>jesse.etherington@gmail.com</Text>
                        <Flex justifyContent='space-evenly' mt='20px'>
                   <SocialIcon url='https://www.linkedin.com/in/jesse-etherington/'/> 
                   <SocialIcon url='https://github.com/Snergdafer'/>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}

export default SideBar