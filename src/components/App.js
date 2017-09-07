import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import {connect} from 'react-redux';
import {fetch, loadmore} from '../actions/app';

import Header from './Header';
import Loading from './Loading';

class App extends Component {

  componentDidMount() {
    const {list} = this.props.app;
    if (list.length === 0)
      this.props.dispatch(fetch());
  }

  _onClick(id) {
    this.context.router.push('/topic/' + id);
  }

  loadMore() {
    const {page} = this.props.app;
    this.props.dispatch(loadmore(page + 1))
  }

  render() {
    const {loading, list, loadmore} = this.props.app;
    const listComponent = list.map((v, i) => <li key={i} onClick={() => this._onClick(v.id)}>{v.title}</li>);
    return (
      <div>
        {
          loading ? <Loading/> :
            <div className="app">
              <Header/>
              <section>
                <ul>{listComponent}</ul>
                {
                  loadmore ?
                    <div className="load-more">正在加载...</div> :
                    <div className="load-more" onClick={() => this.loadMore()}>加载更多</div>
                }
              </section>
            </div>
        }
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect((state) => {
  return {
    app: state.app,
  }
})(withRouter(App));
