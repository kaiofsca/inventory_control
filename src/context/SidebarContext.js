import { useDisclosure } from '@chakra-ui/react'; // devolve se o componente esta aberto ou fechado
import { createContext, useContext } from 'react';

const SidebarContext = createContext({});

export const SidebarProvider = ({children}) => {
    const disclosure = useDisclosure();

    return (
        <SidebarContext.Provider value={disclosure}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => useContext(SidebarContext)