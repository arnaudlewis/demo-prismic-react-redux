import React, {Component} from 'react';

import {MetaHeader, HeaderNavigation} from 'ui';
import Prismic from '../prismic/Prismic';

class Main extends Component {
    render() {
        return(
          <Prismic content={this.props.children}>
                <MetaHeader />
                <HeaderNavigation />
            </Prismic>
        );
    }
}

export default Main;
