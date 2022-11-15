import React from "react";

import { useSidebarContext } from '../context/SidebarContext'

import {
    Avatar,
    Flex,
    HStack,
    Icon,
    IconButton,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

const Header = () => {

    const isMobile = useBreakpointValue({
        base: true,
        lg: false,
    })

    const { onOpen } = useSidebarContext()

    return ( // Flex - div com display ja declarado
        <Flex
            as="header" // informando que vai ser um header
            w="100%"
            maxW={1120}
            h="20" // multiplica por 4, no caso ficaria 80px
            mx="auto"
            px="2"
            py="2"
            align="center"
            boxShadow="0 1px 0 #ccc"
            color="gray.500"
            fontWeight="bold"
        >

            {
                isMobile && (
                    <IconButton
                        icon={<Icon as={FiMenu} />}
                        onClick={onOpen}
                        variant="unstyled"
                        fontSize="20"
                        mr="2"
                    ></IconButton>
                )
            }

            <Text> LOGO </Text>

            <Flex ml="auto">
                <HStack spacing={6}> {/* HStack permite passar um spacing pros itens ja ficarem alinhados */}
                    <Text>Kaio Fonseca</Text>
                    <Avatar size="md" name="kaio fonseca" />
                </HStack>
            </Flex>

        </Flex>
    );
};

export default Header
