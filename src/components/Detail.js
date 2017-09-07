import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import {connect} from 'react-redux';
import {fetch} from '../actions/detail';

import Header from './Header';
import Loading from "./Loading";

class Detail extends Component {

  componentDidMount() {
    this.props.dispatch(fetch(this.props.params.id));
  }

  render() {
    const {topic, loading} = this.props.detail;
    return <div>
      {
        loading ? <Loading/> :
          <div className="app">
            <Header/>
            <section>
              <div className="detail">
                <h1>{topic.title}</h1>
                <div dangerouslySetInnerHTML={{__html: topic.content}}/>
              </div>
            </section>
          </div>
      }
    </div>
  }
}

Detail.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect((state) => {
  return {
    detail: state.detail,
  }
})(withRouter(Detail));