import "./App.css";
import MapDisplay from "./Components/Map";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import "@esri/calcite-components/dist/calcite/calcite.css";
import SideBar from "./Components/SideBar";

import AboutMe from "./Components/AboutMe";

function App() {
  const [mapVisible, setMapVisible] = useState(false);

  const handleNavigationPress = (route) => {
    if (route === "map") {
      setMapVisible(true);
    } else {
      setMapVisible(false);
    }
  };

  return (
    <Flex h="100vh">
      <SideBar
        handleNavigationPress={handleNavigationPress}
        mapVisible={mapVisible}
      />
        <Box w='100%' h='100%'>
          {mapVisible ? (<MapDisplay />) : (<AboutMe />)}
        </Box>
    </Flex>
  );
}

export default App;
