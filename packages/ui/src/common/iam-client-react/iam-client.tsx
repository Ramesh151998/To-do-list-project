import React, { PropsWithChildren, createContext, useMemo, useReducer } from 'react';
import { authReducer } from './reducers';

export type InitialStateType = {
    clientId: string;
    authServerUrl: string;
    isAuthenticated: boolean,
    user: {
        userId: number;
        userName: string;
        dealerCode: string;
        companyCode: string;
        profilePicPath: null;
        roles: string;
        orgData: {
            unitCode: string;
            companyCode: string;
        };
    },
    dealerCode: string,
    companyCode: string,
    defaultPlantCurrency: string,
    token: any,
    menuAccessObject: any,
    defaultPlantName: string,

}

export const initialAuthState: any = {
    isAuthenticated: false,
    user: {
        userId: 4,
        userName: 'admin',
        dealerCode: 'D1',
        companyCode: 'Mahindra',
        profilePicPath: null,
        roles: 'Admin',
        orgData: { unitCode: '12', companyCode: 'Shahi' },
    },
    dealerCode: 'D1',
    companyCode: 'Mahindra',
    defaultPlantCurrency: 'IDR',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicGhvbmUiOiIiLCJleHRlcm5hbFJlZk5vIjoiMiIsImlhdCI6MTcwNjYxMTc1MSwiZXhwIjoxNzA2NjEyMDUxfQ.aoX3YW44A6pObhvjGTsYGCR8X1U6XMdLFJIyMFxFAXA',
    menuAccessObject: [
        {
            key: 'Masters',
            menuId: 1,
            title: 'Masters',
            iconType: 'SysLib',
            iconName: 'M',
            subMenuData: [
            
                {
                    key: 'Company',
                    subMenuId: 24,
                    title: 'Company',
                    iconType: 'SysLib',
                    iconName: 'UngroupOutlined',
                    path: '/company',
                    componentName: 'CompanyGrid',
                    orderId: 1,
                    scopes: ['Delete', 'Update', 'View', 'Create'],
                    baseSubMenuId: 1,
                },
            

            ],
        },


    ],
};

interface IAMClientAuthContextType {
    IAMClientAuthContext: InitialStateType;
    dispatch: React.Dispatch<any>;
}
interface AuthContextProps {
    children: React.ReactNode;
}

const IAMClientContext = createContext<IAMClientAuthContextType>({
    IAMClientAuthContext: initialAuthState,
    dispatch: () => null
});

interface AuthContextProps {
    children: React.ReactNode;
    authServerUrl: string;
    clientId: string;
}

const IAMClientProvider: React.FC<PropsWithChildren<AuthContextProps>> = ({
    clientId,
    authServerUrl,
    children,
}: {
    children: React.ReactNode;
    authServerUrl: string;
    clientId: string;
}) => {
    const existing = JSON.parse(localStorage.getItem('currentUser')) || {}
    const [IAMClientAuthContext, dispatch] = useReducer(authReducer, { ...initialAuthState, ...existing, clientId, authServerUrl });

    const value = useMemo(() => ({ IAMClientAuthContext, dispatch }), [IAMClientAuthContext]);

    return <IAMClientContext.Provider value={value}>{children}</IAMClientContext.Provider>;
};

const useIAMClientState = () => {
    const context = React.useContext(IAMClientContext);
    if (context === undefined) {
        throw new Error("useIAMClientState must be used within a IAMClientProvider");
    }
    return context;
}

export { IAMClientProvider, IAMClientContext, useIAMClientState };
