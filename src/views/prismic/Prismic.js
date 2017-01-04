import React from 'react';
import Prismic from 'prismic.io';
import PrismicConfig from '../../config/prismic-configuration';

export default class PrismicHOC extends React.Component {

  static buildContext() {
    const accessToken = PrismicConfig.accessToken;
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken })
    .then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver,
    }))
    .catch(e => console.error('Cannot contact the API, check your prismic configuration'))
  }

  constructor(props) {
    super(props);
    this.state = { prismicCtx: null };
  }

  componentWillMount() {
    if (this.isWithPrismic()) {
      PrismicHOC.buildContext()
      .then((prismicCtx) => {
        this.setState({ prismicCtx });
      }).catch((e) => {
        console.error(e)
      });
    }
  }

  isWithPrismic() {
    return !!this.props.content.props.route.withPrismic;
  }

  render() {
    if (this.isWithPrismic() && !this.state.prismicCtx) {
      return <div>Loading...</div>;
    }

    const props = (this.isWithPrismic && this.state.prismicCtx)
          ? { prismicCtx: this.state.prismicCtx }
          : {};

    return (
      <div>
        {React.cloneElement(this.props.content, props)}
      </div>
    );
  }
}
