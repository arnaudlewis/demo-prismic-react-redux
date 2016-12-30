import React from 'react';

export const HeaderNavigation = () => {
    const headerNavigation = {
        'padding': '10px 0'
    };

    const mainMenuLi = {
        'display': 'inline-block',
        'padding': '0 5px'
    };

    return(
        <div className="header-navigation" style={headerNavigation}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-2 col-sm-4">
                        Logo
                    </div>
                    <div className="main-menu col-xs-2 col-sm-8 end-xs">
                        <ul>
                            <li style={mainMenuLi}>Home</li>
                            <li style={mainMenuLi}>Kompetenzen</li>
                            <li style={mainMenuLi}>Kontakt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};