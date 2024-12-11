
import React from 'react';
import { AccountInfo } from '@azure/msal-browser';
import { createUseStyles } from 'react-jss';
import SiteTemplateMsal from './dist/siteTemplateMsal.js';

export const CompilatedComponent: React.FC = () => {

    return (
        <div>
            <SiteTemplateMsal authMsalProps={import.meta.env}>
                <SuperComponente />
            </SiteTemplateMsal>
        </div>
    );
};

export interface IMsalTemplateProps {
    account?: AccountInfo | null;
    getAccessToken?: () => Promise<string>;
}
export const SuperComponente = ({ account, getAccessToken }: IMsalTemplateProps) => {
    const [accessToken, setAccessToken] = React.useState<string | null>(null);
    const styles = msalTemplateStyles();
    const onClick = async () => {
        if (!getAccessToken) return;
        const token = await getAccessToken();
        setAccessToken(token);
    }
    if (!account) return
    return (
        <div>
            <h2>Componente hijo que recibe la info</h2>
            <div className={styles.token}>Este es el idToken: {account?.idToken}</div>
            <div className={styles.token}>Este es el accessToken: {accessToken}</div>
            <button onClick={() => onClick()}>GetAccessToken</button>
        </div>
    );
};
const msalTemplateStyles = createUseStyles({
    token: {
        wordBreak: 'break-word',
        marginTop: 20
    }
})
