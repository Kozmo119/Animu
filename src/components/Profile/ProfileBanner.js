import React from 'react'
import "./ProfileBanner.css"

function ProfileBanner() {
  return (
    <header
    className="banner-profile"
    style={{
      backgroundColor: "rgb(92, 114, 138)"
    }}
  >
    <div className="banner-contents-profile">
      <h1 className="banner-title-profile">Profile Name</h1>
    </div>

    <div className="banner--fadeButtom" />
  </header>
  )
}

export default ProfileBanner