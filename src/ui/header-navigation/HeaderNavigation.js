import React from 'react';

export const HeaderNavigation = () => {
    const styles = {
        headerNavigation: {
            padding: '20px 0',

            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: 'uppercase'
        },
        mainMenuLi: {
            display: 'inline-block',
            padding: '0 5px'
        }
    };

    return(
        <div className="header-navigation" style={styles.headerNavigation}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-2 col-sm-4">
                        Logo
                    </div>
                    <div className="main-menu col-xs-2 col-sm-8 end-xs">
                        <ul>
                            <li style={styles.mainMenuLi}><a href="/">Home</a></li>
                            <li style={styles.mainMenuLi}><a href="/">Kompetenzen</a></li>
                            <li style={styles.mainMenuLi}><a href="/">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};