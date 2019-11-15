import React from 'react'
import logoSplash from "../assets/svg/logo-splash.svg";
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t } = useTranslation();
    return (
        <div className="splash-loading">
            <div className="loading-icon">
                <img alt={t("loading")} src={logoSplash} />
                <div>{t("loading")}</div>
            </div>
        </div>
    )
}

export default Loading;