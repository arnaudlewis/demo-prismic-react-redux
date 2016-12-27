import React, {Component} from 'react';

import './meta-header.scss';
import FontAwesome from 'react-fontawesome';

export const MetaHeader = () => {
  return (
      <div className="row meta-header">
          <div className="col-xs-2">
              <span><FontAwesome name="phone"/></span>
              <span>06181/29493</span>
          </div>
          <div className="col-xs-2">
              <span>E-Mail</span>
          </div>
      </div>
  );
};