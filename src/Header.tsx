import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
// import { withNamespaces } from 'react-i18next';

interface IProps {
    name?: string,
    t?: any
}
const { t, i18n } = useTranslation();
// i18n.changeLanguage('es');


const Header: React.FC<IProps> = (props: IProps) => (
    <div>
        <h1>{t(`Hello, ${props.name}! Welcome to React and TypeScript.`)}</h1>
        <h1>{t('intro')}</h1>
        <h2><Trans>Hello, what a fine day</Trans>
        </h2>
    </div>
);

Header.defaultProps = {
    name: 'world',
};

export default Header;