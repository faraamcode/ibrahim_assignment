import { createContext } from 'react';
interface ContextProp{
    modal : boolean;
    openModal: any;
    closeModal: any;
}

const UserContext = createContext<ContextProp | undefined>(undefined);

export default UserContext;