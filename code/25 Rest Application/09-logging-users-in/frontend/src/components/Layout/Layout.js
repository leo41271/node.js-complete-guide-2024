import React, { Fragment } from 'react';

import './Layout.css';

function Layout(props) {
    return (
        <Fragment>
            <header className="main-header">{props.header}</header>
            {props.mobileNav}
            <main className="content">{props.children}</main>
        </Fragment>
    );
}

export default Layout;
