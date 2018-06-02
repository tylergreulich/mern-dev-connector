import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../store/actions/profileActions';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

Dashboard.PropTypes = {};

export default connect(null, { getCurrentProfile })(Dashboard);
