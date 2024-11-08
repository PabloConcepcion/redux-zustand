import React from 'react';
import { useTranslation } from 'react-i18next';
import { resources } from '../locale/resources';
import i18next from 'i18next';


const Home: React.FC = () => {
    const { t, i18n } = useTranslation();
    const pageText: any = t("home", { returnObjects: true });
    const languages = Object.keys(resources);
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            {
                languages.map((language) => (
                    <button key={language} onClick={() => changeLanguage(language)}>
                        {i18next.language === language ? language.toUpperCase() : language}
                    </button>
                ))
            }

            <h1>{pageText.title}</h1>
            <h2>{pageText.subtitle}</h2>
            <p>
                {pageText.description}
            </p>
            {/* Continue with the rest of your component */}
        </div>
    );
};


export default Home;