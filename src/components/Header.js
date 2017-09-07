import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

class Header extends Component {
  render() {
    return <header>
      <div onClick={() => this.context.router.goBack()}>返回</div>
    </header>
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(Header);