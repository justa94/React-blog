import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
// import Header from 'components/common/Header';
import HeaderContainer from 'containers/common/HeaderContainer';
// import Footer from 'components/common/Footer';
import FooterContainer from 'containers/common/FooterContainer';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => (
    <div className={cx('page-template')}>
        <HeaderContainer />
        <main>
            {children}
        </main>
        <FooterContainer />
    </div>
);

export default PageTemplate;