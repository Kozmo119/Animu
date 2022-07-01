import React from 'react'
import ProfileBanner from './ProfileBanner'
import Nav from '../MainPage/Nav'
import ProfileNav from './ProfileNav'

function Profile() {

    return (
    <div className='profile-container'>
    <Nav/>
    <ProfileBanner/>
    <ProfileNav/>
    </div>
  )
}

export default Profile