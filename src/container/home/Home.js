import React, {Component} from 'react';

import {MetaHeader} from 'ui';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="view--home">
                <MetaHeader />
            </div>
        );
    }
}

export default Home;