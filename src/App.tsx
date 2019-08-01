import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import './App.css';
import Header from './Header';
import Description from './Description';
// import { withNamespaces } from 'react-i18next';

interface IProps {
  t?: any;
}

// @withNamespaces();
class LegacyComponentClass extends Component<IProps> {
  render() {
    const { t } = this.props;

    return (
      <h1>{t('intro')}</h1>
    )
  }
}
const MyComponent = withTranslation()(LegacyComponentClass as any)

const App: React.FC = () => {
  return (
    <div className="App">
    <Suspense fallback="loading">
      <Header name="REACT"/>
      <MyComponent />
    </Suspense>
      <Description countBy={3}/>
    </div>
  );
}

export default App;
