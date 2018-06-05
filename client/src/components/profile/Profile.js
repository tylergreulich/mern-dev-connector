import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCredentials from './ProfileCredentials';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProfileByHandle } from '../../store/actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    return (
      <div>
        <ProfileHeader />
        <ProfileAbout />
        <ProfileCredentials />
        <ProfileGithub />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
