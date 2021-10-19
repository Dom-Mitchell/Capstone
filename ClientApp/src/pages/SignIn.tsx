import React from 'react'
import { FormImage } from '../components/FormImage'
import { MainHeader } from '../components/MainHeader'
import { RelativeFooter } from '../components/RelativeFooter'
import { Link } from 'react-router-dom'
// import title from '../images/title.png'
import envelope from '../images/form/envelope.svg'
import home from '../images/form/home.svg'
import lock from '../images/form/lock.svg'
import signIn from '../css/signIn.module.scss'

export function SignIn() {
  return (
    <>
      <MainHeader />
      <div className={signIn['form-container']}>
        <div className={signIn['form-image-container']}>
          <FormImage />
        </div>

        {/* <div className="sign-in"> */}
        <div className={signIn['sign-in-container']}>
          <div className={signIn['sign-in-content']}>
            <nav>
              {/* Change this later at some point... */}
              <Link to="/">
                <img className={signIn.home} src={home} aria-hidden="true" />
              </Link>
              <h1>Sign In</h1>
            </nav>

            <form
              onSubmit={function (event) {
                event.preventDefault()

                // if (input.length === 0) {
                // {signIn['validate-form-input']} display
                // }
              }}
            >
              <div
                className={`${signIn['form-input']} ${signIn['validate-form-input']}`}
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className={signIn['form-email']}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <span className={signIn['focus-email']}></span>
                <span className={signIn['email-icon']}>
                  <img
                    className={signIn.envelope}
                    src={envelope}
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div
                className={`${signIn['form-input']} ${signIn['validate-form-input']}`}
                data-validate="Password is required"
              >
                <input
                  className={signIn['form-password']}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className={signIn['focus-password']}></span>
                <span className={signIn['password-icon']}>
                  <img className={signIn.lock} src={lock} aria-hidden="true" />
                </span>
              </div>

              {/* <button className={signIn['sign-in-button']} type="submit">
                <p>Sign In</p>
              </button> */}
              <Link className={signIn['sign-in-button']} to="/miniMap">
                <button>Sign In</button>
              </Link>
              {/* Change this later... */}
              <Link
                className={signIn['create-account-page-button']}
                to="/createaccount"
              >
                <button>Create Account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <RelativeFooter />
    </>
  )
}
