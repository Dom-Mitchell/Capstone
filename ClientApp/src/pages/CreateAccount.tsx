import React from 'react'
import { FormImage } from '../components/FormImage'
import { MainHeader } from '../components/MainHeader'
import { RelativeFooter } from '../components/RelativeFooter'
import { Link } from 'react-router-dom'
// import title from '../images/title.png'
import user from '../images/form/green-user.svg'
import envelope from '../images/form/envelope.svg'
import lock from '../images/form/lock.svg'
import createAccount from '../css/createAccount.module.scss'

export function CreateAccount() {
  // const [value, setValue] = useState('')

  return (
    <>
      <MainHeader />
      <div className={createAccount['form-container']}>
        <div className={createAccount['form-image-container']}>
          <FormImage />
        </div>

        <div className={createAccount['sign-in-container']}>
          <div className={createAccount['sign-in-content']}>
            <nav>
              {/* Change this later at some point... */}
              <Link to="/">
                <svg
                  version="1.1"
                  id="Home"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  fill="enable-background:new 0 0 512 512;"
                  xmlSpace="preserve"
                  height="25px"
                >
                  <polygon
                    fill="#E9EAEF"
                    points="452.441,209.325 452.441,508.793 59.559,508.793 59.559,209.325 257.108,17.691 "
                  />
                  <path
                    fill="#9EB1B7"
                    d="M454.531,62.672V197.13l-66.873-63.687l-31.347-29.853V62.672c0-7.952,6.446-14.398,14.398-14.398
	h69.425C448.085,48.273,454.531,54.72,454.531,62.672z"
                  />
                  <path
                    fill="#879BA0"
                    d="M387.657,48.273v85.17L356.31,103.59V62.672c0-7.952,6.446-14.398,14.398-14.398h16.949V48.273z"
                  />
                  <g>
                    <path
                      fill="#9CCE21"
                      d="M512,462.669v46.122H274.808v-46.122c0-9.185,7.45-16.624,16.635-16.624h203.922
		C504.55,446.045,512,453.485,512,462.669z"
                    />
                    <path
                      fill="#9CCE21"
                      d="M83.143,462.669v46.122H0v-46.122c0-9.185,7.44-16.624,16.624-16.624h49.883
		C75.703,446.045,83.143,453.485,83.143,462.669z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#85C10D"
                      d="M512,478.343v30.448H274.808v-30.448c0-9.185,7.45-16.624,16.635-16.624h203.922
		C504.55,461.718,512,469.158,512,478.343z"
                    />
                    <path
                      fill="#85C10D"
                      d="M83.143,478.343v30.448H0v-30.448c0-9.185,7.44-16.624,16.624-16.624h49.883
		C75.703,461.718,83.143,469.158,83.143,478.343z"
                    />
                  </g>
                  <polygon
                    fill="#D2D4D8"
                    points="452.441,221.081 452.441,277.056 256,89.497 59.559,277.056 59.559,221.081 240.4,48.851 
	256,34.357 271.59,48.851 "
                  />
                  <polygon
                    fill="#EA4756"
                    points="255.997,58.347 32.335,271.885 1.062,245.63 240.403,17.693 255.997,3.206 271.591,17.693 
	510.931,245.63 479.657,271.885 "
                  />
                  <rect
                    x="107.624"
                    y="284.421"
                    fill="#C97523"
                    width="129.567"
                    height="224.371"
                  />
                  <rect
                    x="274.808"
                    y="284.421"
                    fill="#A0D9F2"
                    width="147.55"
                    height="129.567"
                  />
                  <rect
                    x="274.808"
                    y="284.421"
                    fill="#C97523"
                    width="147.55"
                    height="39.372"
                  />
                  <path
                    fill="#8E480E"
                    d="M211.661,403.726h-18.808c-4.329,0-7.837-3.509-7.837-7.837s3.508-7.837,7.837-7.837h18.808
	c4.329,0,7.837,3.509,7.837,7.837S215.99,403.726,211.661,403.726z"
                  />
                  <circle fill="#413740" cx="256" cy="184.31" r="36.047" />
                  <g>
                    <path
                      fill="#8E480E"
                      d="M237.192,276.587H107.624c-4.329,0-7.837,3.509-7.837,7.837v224.371h15.673V292.26h113.894v216.534
		h15.673V284.423C245.029,280.094,241.521,276.587,237.192,276.587z"
                    />
                    <path
                      fill="#8E480E"
                      d="M422.354,276.587H274.808c-4.329,0-7.837,3.509-7.837,7.837v129.567
		c0,4.328,3.508,7.837,7.837,7.837h147.546c4.329,0,7.837-3.509,7.837-7.837V284.423
		C430.191,280.094,426.683,276.587,422.354,276.587z M414.517,292.26v23.698H282.645V292.26H414.517z M282.645,406.154v-74.522
		h131.872v74.522H282.645z"
                    />
                  </g>
                  <path
                    fill="#EA4756"
                    d="M256,228.192c-24.198,0-43.884-19.686-43.884-43.884s19.686-43.885,43.884-43.885
	s43.884,19.686,43.884,43.885C299.884,208.505,280.198,228.192,256,228.192z M256,156.097c-15.555,0-28.21,12.655-28.21,28.211
	c0,15.555,12.655,28.21,28.21,28.21s28.21-12.655,28.21-28.21C284.21,168.752,271.555,156.097,256,156.097z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </Link>
              <h1>Create Account</h1>
            </nav>

            <form
              onSubmit={function (event) {
                event.preventDefault()

                // if (input.length < 1) {
                // }
              }}
            >
              <div
                className={`${createAccount['form-input']} ${createAccount['validate-form-input']}`}
                data-validate="Name is required"
              >
                <input
                  className={createAccount['form-name']}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <span className={createAccount['focus-name']}></span>
                <span className={createAccount['name-icon']}>
                  <img
                    className={createAccount['green-user']}
                    src={user}
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div
                className={`${createAccount['form-input']} ${createAccount['validate-form-input']}`}
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className={createAccount['form-email']}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <span className={createAccount['focus-email']}></span>
                <span className={createAccount['email-icon']}>
                  <img
                    className={createAccount.envelope}
                    src={envelope}
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div
                className={`${createAccount['form-input']} ${createAccount['validate-form-input']}`}
                data-validate="Password is required"
              >
                <input
                  className={createAccount['form-password']}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className={createAccount['focus-password']}></span>
                <span className={createAccount['password-icon']}>
                  <img className={createAccount.lock} src={lock} aria-hidden="true" />
                </span>
              </div>

              <button
                className={createAccount['sign-in-button']}
                type="submit"
                onSubmit={function (event) {
                  event.preventDefault()
                }}
              >
                <p>Create Account</p>
              </button>
              {/* Change this later... */}
              <Link
                className={createAccount['create-account-page-button']}
                to="/signin"
              >
                <button>Sign In</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <RelativeFooter />
    </>
  )
}
