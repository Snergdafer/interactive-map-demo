import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const AboutMe = ({handleNavigationPress}) => {
  return (
    <Flex w='100%' h='100%' bgColor='#4C4B63' flexDir='column'>

      {/* <Header /> */}

      <Box color='#F5F5F5'>
        <About />
        <Projects handleNavigationPress={handleNavigationPress} />
        <Skills />
        {/* <Contact /> */}
      </Box>

      {/* <ScrollToTop /> */}
      {/* <Footer /> */}
    </Flex>
  )
}

export default AboutMe
