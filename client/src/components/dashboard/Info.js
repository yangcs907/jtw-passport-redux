import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Info extends Component {

  render() {
    const user = this.props.auth.user;
    let content;
        content = (
          <div>
            <p
              className="lead"
              style={{fontSize:"35px",color:"rgba(255,255,255,0.9)"}}
              >
              Welcome { user.name }
              <br />
              Id: { user.id }
              <br />
              In at: { user.iat}
              <br />
              Exp at: { user.exp }
            </p>
          </div>
        );
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

Info.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authenticate
});

export default connect(mapStateToProps)(Info);
