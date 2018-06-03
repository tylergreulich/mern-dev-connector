import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log('Submit');
  };

  onChangeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="Twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChangeHandler}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Profile URL"
            name="Facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChangeHandler}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="LinkedIn Profile URL"
            name="LinkedIn"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChangeHandler}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="YouTube Profile URL"
            name="YouTube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChangeHandler}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="Instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChangeHandler}
            error={errors.instagram}
          />
        </div>
      );
    }

    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Your Profile</h1>
            <p className="lead text-center">
              Lets get some information to make your profile stand out
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmitHandler}>
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="Handle"
                value={this.state.handle}
                onChange={this.onChangeHandler}
                error={errors.handle}
                info="A unique handle for your profile URL. Your  full name, company name, nickname, etc"
              />
              <SelectListGroup
                placeholder="Status"
                name="Status"
                value={this.state.status}
                onChange={this.onChangeHandler}
                error={errors.status}
                options={options}
                info="Give us an idea of where you are at in your career"
              />
              <TextFieldGroup
                placeholder="Company"
                name="Company"
                value={this.state.company}
                onChange={this.onChangeHandler}
                error={errors.company}
                info="Could be your own company or one you work for"
              />
              <TextFieldGroup
                placeholder="Website"
                name="Website"
                value={this.state.website}
                onChange={this.onChangeHandler}
                error={errors.website}
                info="Could be your own website or a company one"
              />
              <TextFieldGroup
                placeholder="Location"
                name="Location"
                value={this.state.location}
                onChange={this.onChangeHandler}
                error={errors.location}
                info="City or city & state suggested (eg. Seattle, WA)"
              />
              <TextFieldGroup
                placeholder="Skills"
                name="Skills"
                value={this.state.skills}
                onChange={this.onChangeHandler}
                error={errors.skills}
                info="Please use comma separated values (eg. HTML,CSS,JavaScript,Python)"
              />
              <TextFieldGroup
                placeholder="Github username"
                name="Github username"
                value={this.state.githubusername}
                onChange={this.onChangeHandler}
                error={errors.githubusername}
                info="If you want your latest repos and a Github link, include your username"
              />
              <TextAreaFieldGroup
                placeholder="Short bio"
                name="Short bio"
                value={this.state.bio}
                onChange={this.onChangeHandler}
                error={errors.bio}
                info="Tell us a little about yourself"
              />

              <div className="mb-3">
                <button
                  className="btn btn-light"
                  onClick={() => {
                    this.setState(prevState => ({
                      displaySocialInputs: !prevState.displaySocialInputs
                    }));
                  }}
                >
                  Add Social Network Links
                </button>
                <span className="text-muted">Optional</span>
              </div>
              {socialInputs}
              <input
                type="submit"
                value="submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile
});

export default connect(mapStateToProps, null)(CreateProfile);
