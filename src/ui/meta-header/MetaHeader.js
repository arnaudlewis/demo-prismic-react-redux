import React from 'react';

export const MetaHeader = () => {
    const styles = {
        metaHeader: {
            padding: 10,

            color: '#bbbbbb',
            fontSize: 12,

            backgroundColor: '#fbfbfb',
            borderBottom: '1px solid #e8e8e8'
        }
    };

    return (
        <div className="meta-header" style={styles.metaHeader}>
            <div className="container">
                <div className="row center-xs start-sm">
                    <div className="col-xs-12 col-sm-2">
                        <span>06181/29493-0</span>
                    </div>
                    <div className="col-xs-12 col-sm-2">
                        <a href="placeholder@email.de"><span>placeholder@email.de</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};