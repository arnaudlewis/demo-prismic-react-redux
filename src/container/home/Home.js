import React, {Component} from 'react';

import {MetaHeader, HeaderNavigation} from 'ui';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="view--home">
                <MetaHeader />
                <HeaderNavigation />
            </div>
        );
    }
}

export default Home;