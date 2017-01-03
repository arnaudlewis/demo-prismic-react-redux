import React, {Component} from 'react';

import {MetaHeader, HeaderNavigation} from 'ui';

class Main extends Component {
    render() {
        return(
            <div>
                <MetaHeader />
                <HeaderNavigation />
                {this.props.children}
            </div>
        );
    }
}

export default Main;