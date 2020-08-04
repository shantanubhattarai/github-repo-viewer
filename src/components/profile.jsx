import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as profileActions from "../actions/profileActions";

const Profile = ({ userInfo, setUserInfo }) => {
  useEffect(() => {
    fetch("https://api.github.com/users/shantanubhattarai")
      .then((response) => response.json())
      .then((response) => setUserInfo(response));
  }, [setUserInfo]);

  return (
    <div className="profileContainer">
      <div className="avatarContainer">
        <img src={userInfo.avatar_url} alt="profile" className="userAvatar" />
      </div>
      <p className="userName">{userInfo.login}</p>
      <p className="userBio">{userInfo.bio}</p>
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
