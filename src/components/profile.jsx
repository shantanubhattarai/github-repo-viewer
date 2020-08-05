import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as profileActions from "../actions/profileActions";
import * as httpUtils from "../utils/http";
import * as appConfig from "../appConfig";

const Profile = ({ userInfo, setUserInfo }) => {
  useEffect(() => {
    httpUtils
      .get(appConfig.endPoints.user)
      .then((response) => setUserInfo(response));
  }, [setUserInfo]);

  return (
    <div className="profileContainer">
      <div className="avatarContainer">
        <img src={userInfo.avatar_url} alt="profile" className="userAvatar" />
      </div>
      <h3 className="name">{userInfo.name}</h3>
      <p className="userName">{userInfo.login}</p>
      <p className="userBio">{userInfo.bio}</p>
      <p className="userFollows">
        <span>
          <i className="far fa-user"></i> <b>{userInfo.followers}</b> followers
        </span>{" "}
        .{" "}
        <span>
          <b>{userInfo.followers}</b> following
        </span>
      </p>
      <p className="userLocation">
        <i className="fa fa-map-marker-alt"> </i> {userInfo.location}
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return { userInfo: state.profile.userInfo };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserInfo: (userInfo) => {
      dispatch(profileActions.setUserInfo(userInfo));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
