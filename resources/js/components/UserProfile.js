import axios from 'axios'
import React, { Component } from 'react'

class UserProfile extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    axios.get('/api/auth/user', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).then(response => {
      console.log(response)
    })
  }

  render () {
    return (
      <div className='container py-4'>
      </div>
    )
  }
}

export default UserProfile
