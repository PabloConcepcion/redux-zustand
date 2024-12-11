import React from "react";
import { createUseStyles } from "react-jss";

export const SuperComponente = ({ account, getAccessToken }: any) => {
    const [accessToken, setAccessToken] = React.useState<string | null>(null);
const styles =msalTemplateStyles();
    const onClick = async () => {
        if(!getAccessToken) return;
        const token = await getAccessToken();
        setAccessToken(token);
    }
    if(!account) return 
    return (
        <div>
            <h2>Componente hijo que recibe la info</h2>
            <div className={styles.token}>Este es el idToken: {account?.idToken}</div>
            <div  className={styles.token}>Este es el accessToken: {accessToken}</div>
            <button onClick={()=>onClick()}>GetAccessToken</button>
        </div>
    );
};
const msalTemplateStyles = createUseStyles({
    token:{
        wordBreak: 'break-word',
        marginTop: 20
    }
})
