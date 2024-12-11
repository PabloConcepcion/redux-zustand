// env.d.ts
interface ImportMetaEnv {
    readonly VITE_REACT_APP_CLIENT_ID: string;
    readonly VITE_REACT_APP_TENANT_ID: string;
    readonly VITE_REACT_APP_MSAL_SCOPE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
