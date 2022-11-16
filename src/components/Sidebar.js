import React from "react";

import { useSidebarContext } from "../context/SidebarContext"
import SidebarNav from "./SidebarNav";

import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue,
    useDisclosure,
  } from "@chakra-ui/react";

  const Sidebar = () => {
    const { isOpen, onClose } = useSidebarContext()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) { // Drawer componente do chakra
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
                <DrawerOverlay>
                    <DrawerContent p="2" onClick={() => onClose()}>

                        <DrawerCloseButton />
                        <DrawerHeader />

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )
}

export default Sidebar