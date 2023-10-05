import React from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { CalciteButton, CalciteSlider } from "@esri/calcite-components-react";

const SideBar = ({zoomLevel, setZoomLevel}) => { 

    return (
        <Flex flexDirection='column' w='400px'>
            <Flex bg='#b31e07' boxShadow='lg' w='100%' h='100px' alignItems='center'>
                <Text ml='15px' color='white' fontSize='25' fontWeight='bold'>Interactive Map Demo</Text>
            </Flex>
          <Flex w='100%' h='20px' flexDir='row' alignItems='center' pt='40px'  px='20px'>
            <Text mr='15px' pb='2px' fontWeight='500' fontSize={18}>Zoom</Text>
            <CalciteSlider
                min="7"
                max="19"
                value={zoomLevel}
                step="1"
                onCalciteSliderInput={(e) => setZoomLevel(e.target.value)}
                style={{ width: '100%' }}
            />
            <CalciteButton onClick={(e) => setZoomLevel(7)}>Reset</CalciteButton>
          </Flex>
            <Flex flexDir='column' justifyContent='space-evenly' w='100%' px='20px' mt='40px'>
                <Flex flexDir='row'>
                <Text fontWeight='500' mr='10px'>View the code: </Text>
                <a href="https://github.com/Snergdafer/interactive-map-demo" style={{color: '#3366CC'}}>Repo Link</a>
                </Flex>
                <Text mt='20px'>
                    This project was built to demonstrate the usage of the 
                    ArchGIS Javascript API and a couple of Calcite Components.
                </Text>
            </Flex>
        </Flex>
    )
}

export default SideBar