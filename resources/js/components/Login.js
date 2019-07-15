import axios from 'axios'
import React, { Component } from 'react'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email : '',
      password : ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleFieldChange (event) {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin(event) {
    event.preventDefault()

    const { history } = this.props

    const loginCredentials = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/api/auth/login', loginCredentials)
      .then(response => {
        console.log(response.data.access_token)
        localStorage.setItem('accessToken', response.data.access_token)
        // redirect to the homepage
        history.push('/projects')
      })
      .catch(error => {
        console.log(error)
      }) 
  }

  checkLogin() {

  }

  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Login Form</div>
              <div className='card-body'>
                <form onSubmit={this.handleLogin}>
                  <div className='form-group'>
                    <label htmlFor='name'>Email</label>
                    <input
                      id='email'
                      type='text'
                      className='form-control'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='description'>Password</label>
                    <input
                      id='password'
                      type='password'
                      className='form-control'
                      name='password'
                      value={this.state.password}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <button className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
