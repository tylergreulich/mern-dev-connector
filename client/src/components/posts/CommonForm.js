import React, { Component } from 'react';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  state = {
    text: '',
    errors: {}
  };

  componentWillReceieveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmitHandler = event => {
    event.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Make a Comment</div>
          <div className="card-body">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Reply to Post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChangeHandler}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  errors: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
