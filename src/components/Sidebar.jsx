
import React, { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Button,
    Navitems,
    Spacer

   
} from '@chakra-ui/react';

import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
  } from 'react-icons/fi';
import { IconType } from 'react-icons';
const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
  ];

const Sidebar = () => {
  
  return (
 <div>
         <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }}  />
              </Flex>
              
              {LinkItems.map((link) => (
          <Flex flexDir='column' >
        <Button  _hover={{ bg: "#00d2fb", color: " white" }} bg='white'  key={link.name} icon={link.icon}>
      
      
      
      
      
      
      
                          <Icon>{ link.icon}</Icon>
          
         {link.name}
                      </Button>
                      </Flex>
      ))}
    </Box> 
        
         
         
         
         
         
         
         
             
        

</div>
 
 
 
 
 
 
 
 
 
  )
}

export default Sidebar