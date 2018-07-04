import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import countries from './countries'

import { Header, Footer } from './'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      registration: '',
      countries: countries,
      continue: false,
      sent: false,
      submit: false,

      // Form one inputs
      name: '',
      nameError: false,

      lastName: '',
      lastNameError: false,

      title: '',
      titleError: false,

      organization: '',
      organizationError: false,

      email: '',
      emailError: false,

      telephone: '',
      telephoneError: false,

      country: '',
      countryError: true,

      // Form two inputs
      region: false,
      gender: false,
      registrationType: false,
      travelAssistanceRequired: false,
      travelAssistanceConfirmed: false,
      visaRequired: false,
      validVisa: false,
    }
  }

  displayCountries = () => {
    return this.state.countries.map(country => (
      <option key={country} value={country}>
        {country}
      </option>
    ))
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  hideOtherInput = input => {
    document.getElementById(input).style.width = '1px'
    document.getElementById(input).style.opacity = '0'
    setTimeout(() => {
      document.getElementById(input).style.display = 'none'
    }, 350)
  }

  showOtherInput = input => {
    document.getElementById(input).style.display = 'block'
    setTimeout(() => {
      document.getElementById(input).style.opacity = '1'
      document.getElementById(input).style.width = '100%'
    }, 100)
  }

  handleChangeRegistration = event => {
    this.setState({ registration: event.target.value })
  }

  handleSubmit = event => {
    this.setState({ submit: true })
    const {
      region,
      gender,
      registrationType,
      travelAssistanceRequired,
      travelAssistanceConfirmed,
      visaRequired,
      validVisa,
    } = this.state

    if (
      region &&
      gender &&
      registrationType &&
      travelAssistanceRequired &&
      travelAssistanceConfirmed &&
      visaRequired &&
      validVisa
    ) {
      this.setState({ sent: true })
      console.log(this.state.sent)
      // window.location.href = '/iodc_2018/submited-form'
    }
  }

  continue = () => {
    window.scrollTo(0, 0)
    this.setState({ continue: true })
    let {
      name,
      lastName,
      title,
      organization,
      email,
      telephone,
      nameError,
      lastNameError,
      titleError,
      organizationError,
      emailError,
      telephoneError,
      countryError,
    } = this.state

    if (name === '') {
      this.setState({ nameError: true })
    }
    if (lastName === '') {
      this.setState({ lastNameError: true })
    }
    if (title === '') {
      this.setState({ titleError: true })
    }
    if (organization === '') {
      this.setState({ organizationError: true })
    }
    if (
      email == '' ||
      email.split('@').length == 1 ||
      email.split('@')[1] == ''
    ) {
      this.setState({ emailError: true })
    }
    if (telephone === '') {
      this.setState({ telephoneError: true })
    }
    if (countryError === true) {
      this.setState({ continue: true })
    }
    console.log({
      nameError,
      lastNameError,
      titleError,
      organizationError,
      emailError,
      telephoneError,
      countryError,
    })
    console.log(email.split('@').length)

    if (
      !nameError &&
      !lastNameError &&
      !titleError &&
      !organizationError &&
      !emailError &&
      !telephoneError &&
      !countryError
    ) {
      document.getElementById('form_content').style.transform =
        'translateX(-52%)'
      document.getElementById('form_container').style.height = '100%'
    }
  }

  back = () => {
    document.getElementById('form_content').style.transform = 'translateX(0%)'
    document.getElementById('form_container').style.height = '970px'
  }

  handleChange(event) {
    let name = event.target.className.split(' ')[0]
    this.setState({ [name]: event.target.value })
    console.log(name)
  }

  handleOptionChange = changeEvent => {
    this.setState({
      region: changeEvent.target.value,
    })
  }

  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <div className="container-fluid">
            <Header>
              <FormattedMessage id="register.title" defaultMessage="Register" />
            </Header>

            <div className={this.state.sent ? 'row' : 'hide-submitted-message'}>
              <div className="col-md-10 col-md-offset-1">
                <h3 className="internal-sub-title submitted-form-success">
                  You have been registered successfully.
                </h3>
              </div>
            </div>
            <div
              className={
                this.state.sent ? 'hide-form' : 'form-general-container'
              }
            >
              <div id="form_container">
                <div className="row">
                  <div className="col-xs-12">
                    <h3 className="internal-sub-title mtop40">#IODC18</h3>
                    <p className="internal-text">
                      <FormattedMessage
                        id="register.subtitle"
                        defaultMessage="Please fill in the form below."
                      />
                    </p>
                  </div>
                </div>
                <iframe
                  title="hidden_iframe_title"
                  className="hidden"
                  name="hidden_iframe"
                  id="hidden_iframe"
                  onLoad="if(submitted) {window.location='form-submitted.html';}"
                />

                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSeMBQxraI9wyvt1TdvW4LClNne2ndhLcBT1-p6wXrmQ6zvKdw/formResponse"
                  target="hidden_iframe"
                  method="POST"
                  id="mG61Hd"
                  autocomplete="on"
                  onSubmit={this.handleSubmit}
                >
                  <div id="form_content">
                    {/* FORM ONE START */}
                    <div className="form_one">
                      <h4>
                        <FormattedMessage
                          id="register.first.name"
                          defaultMessage="Name"
                        />
                      </h4>
                      <input
                        className={
                          this.state.nameError
                            ? 'name input-box input_error'
                            : 'name input-box input_error_hide'
                        }
                        type="text"
                        name="entry.181273001"
                        id="entry.181273001"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={() => this.setState({ nameError: false })}
                        value={this.state.name}
                      />
                      <span
                        className={
                          this.state.nameError ? 'show_error' : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.firstName"
                          defaultMessage="You need to complete your name"
                        />
                      </span>
                      <h4>
                        <FormattedMessage
                          id="register.last.name"
                          defaultMessage="Last Name"
                        />
                      </h4>
                      <input
                        className={
                          this.state.lastNameError
                            ? 'lastName input-box input_error'
                            : 'lastName input-box input_error_hide'
                        }
                        type="text"
                        name="entry.1334882480"
                        id="entry.13348824801"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={() =>
                          this.setState({ lastNameError: false })
                        }
                        value={this.state.lastName}
                      />
                      <span
                        class={
                          this.state.lastNameError ? 'show_error' : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.lastName"
                          defaultMessage="You need to complete your last name"
                        />
                      </span>
                      <h4>
                        <FormattedMessage
                          id="register.title"
                          defaultMessage="Title"
                        />
                      </h4>
                      <input
                        type="text"
                        className={
                          this.state.titleError
                            ? 'title input-box input_error'
                            : 'title input-box input_error_hide'
                        }
                        name="entry.30616987"
                        id="entry.30616987"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={() => this.setState({ titleError: false })}
                        value={this.state.title}
                      />
                      <span
                        class={
                          this.state.titleError ? 'show_error' : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.title"
                          defaultMessage="You need to complete the title"
                        />
                      </span>
                      <h4>
                        <FormattedMessage
                          id="register.organization"
                          defaultMessage="Organization"
                        />
                      </h4>
                      <input
                        type="text"
                        className={
                          this.state.organizationError
                            ? 'organization input-box input_error'
                            : 'organization input-box input_error_hide'
                        }
                        name="entry.137853284"
                        id="entry.137853284"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={() =>
                          this.setState({ organizationError: false })
                        }
                        value={this.state.organization}
                      />
                      <span
                        class={
                          this.state.organizationError
                            ? 'show_error'
                            : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.organization"
                          defaultMessage="You need to complete your organization"
                        />
                      </span>
                      <h4>
                        <FormattedMessage
                          id="register.email"
                          defaultMessage="E-Mail"
                        />
                      </h4>
                      <input
                        type="text"
                        className={
                          this.state.emailError && this.state.continue
                            ? 'email input-box input_error'
                            : 'email input-box input_error_hide'
                        }
                        name="entry.1630280377"
                        id="entry.1630280377"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={() => {
                          if (
                            this.state.email == '' ||
                            this.state.email.split('@').length == 1 ||
                            this.state.email.split('@')[1] == ''
                          ) {
                            this.setState({ emailError: true })
                          } else {
                            this.setState({ emailError: false })
                          }
                        }}
                        value={this.state.email}
                      />
                      <span
                        class={
                          this.state.emailError && this.state.continue
                            ? 'show_error'
                            : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.email"
                          defaultMessage="You need to complete your email."
                        />
                      </span>
                      <h4>
                        <FormattedMessage
                          id="register.phone"
                          defaultMessage="Telephone"
                        />
                      </h4>
                      <input
                        type="number"
                        className={
                          this.state.telephoneError
                            ? 'telephone input-box input_error'
                            : 'telephone input-box input_error_hide'
                        }
                        name="entry.27195521"
                        id="entry.27195521"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={() =>
                          this.setState({ telephoneError: false })
                        }
                        value={this.state.telephone}
                      />
                      <span
                        class={
                          this.state.telephoneError
                            ? 'show_error'
                            : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.telephone"
                          defaultMessage="You need to complete your telephone."
                        />
                      </span>
                      <h4>
                        <FormattedMessage
                          id="register.country"
                          defaultMessage="Country"
                        />
                      </h4>
                      <select
                        name="entry.1053209737"
                        id="entry.1053209737"
                        onChange={() =>
                          this.setState({
                            countryError: false,
                          })
                        }
                      >
                        {this.displayCountries()}
                      </select>

                      <span
                        class={
                          this.state.countryError && this.state.continue
                            ? 'show_error'
                            : 'hide_error'
                        }
                      >
                        <FormattedMessage
                          id="register.error.country"
                          defaultMessage="You need to select your country."
                        />
                      </span>
                      <div className="continue_button_container">
                        <div
                          className="continue_button"
                          onClick={() => this.continue()}
                        >
                          Continue
                        </div>
                      </div>
                    </div>
                    {/* FORM ONE FINISH */}
                    {/* FORM TWO START */}
                    <div className="form_two">
                      <div className="continue_button_container">
                        <div
                          className="back_button"
                          onClick={() => this.back()}
                        >
                          Back
                        </div>
                      </div>
                      <h4>
                        <FormattedMessage
                          id="register.region"
                          defaultMessage="Region"
                        />
                      </h4>

                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value={'East Asia & Pacific'}
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.east.asia"
                              defaultMessage="East Asia & Pacific"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value="Latin America & Caribbean"
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.latin.america"
                              defaultMessage="Latin America & Caribbean"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value="North America"
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.north.america"
                              defaultMessage="North America"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value="Sub-Saharan Africa"
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.sub.saharan"
                              defaultMessage="Sub-Saharan Africa"
                            />
                          </label>
                          <br />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value="Europe & Central Asia"
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.europe.asia.central"
                              defaultMessage="Europe & Central Asia"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value="Middle East & North Africa"
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.middle.east"
                              defaultMessage="Middle East & North Africa"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1935629477"
                            id="entry.1935629477"
                            value="South Asia"
                            onChange={() => this.setState({ region: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.region.south.asia"
                              defaultMessage="South Asia"
                            />
                          </label>
                        </div>
                        <span
                          className={
                            !this.state.region && this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>
                      <br />
                      {/* gender */}
                      <h4>
                        <FormattedMessage
                          id="register.gender"
                          defaultMessage="Gender"
                        />
                      </h4>

                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.351925754"
                            id="entry.351925754"
                            value="Female"
                            onChange={() => {
                              this.hideOtherInput('input-genre')
                              this.setState({ gender: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.gender.female"
                              defaultMessage="Female"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.351925754"
                            id="entry.351925754"
                            value="Male"
                            onChange={() => {
                              this.hideOtherInput('input-genre')
                              this.setState({ gender: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.gender.male"
                              defaultMessage="Male"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.351925754"
                            id="entry.351925754"
                            value="Non-binary/third gender"
                            onChange={() => {
                              this.hideOtherInput('input-genre')
                              this.setState({ gender: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.gender.non.binary"
                              defaultMessage="Non-Binary / Third Gender"
                            />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.351925754"
                            id="entry.351925754"
                            value="Prefer not to say"
                            onChange={() => {
                              this.hideOtherInput('input-genre')
                              this.setState({ gender: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.gender.prefer.not"
                              defaultMessage="Prefer not to say"
                            />
                          </label>
                          <br />
                          {/* Radio button */}
                          <input
                            type="radio"
                            name="entry.351925754"
                            id="entry.351925754"
                            value="__other_option__"
                            onChange={() => {
                              this.showOtherInput('input-genre')
                              this.setState({ gender: true })
                            }}
                          />
                          <input
                            type="text"
                            name="entry.351925754.other_option_response"
                            id="entry.351925754.other_option_response"
                            value={this.state.value}
                            className="hidden"
                          />
                          <label id="genre-other" for="contactChoice1">
                            <FormattedMessage
                              id="register.gender.other"
                              defaultMessage="Other"
                            />
                          </label>
                          <input
                            type="text"
                            onChange={() => this.handleChange}
                            className="input-other"
                            id="input-genre"
                          />
                        </div>
                        <span
                          className={
                            !this.state.gender && this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>
                      <br />
                      <h4>
                        <FormattedMessage
                          id="register.registration.type"
                          defaultMessage="Registration Type"
                        />
                      </h4>

                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Academic"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.academic"
                              defaultMessage="Academic"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Individual/unaffiliated"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.individual"
                              defaultMessage="Individual / Unaffiliated"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Multilateral Organization"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.multilateral"
                              defaultMessage="Multilateral Organization"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Private Sector"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.private"
                              defaultMessage="Private Sector"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Government"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.government"
                              defaultMessage="Government"
                            />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Media"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.media"
                              defaultMessage="Media"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="NGO"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.ngo"
                              defaultMessage="NGO"
                            />
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="Student"
                            onChange={() => {
                              this.hideOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.student"
                              defaultMessage="Student"
                            />
                          </label>
                          <br />

                          <input
                            type="radio"
                            name="entry.1223885635"
                            id="entry.1223885635"
                            value="__other_option__"
                            onChange={() => {
                              this.showOtherInput('input-registration')
                              this.setState({ registrationType: true })
                            }}
                          />
                          <input
                            type="text"
                            name="entry.1223885635.other_option_response"
                            id="entry.1223885635.other_option_response"
                            value={this.state.registration}
                            className="hidden"
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.registration.other"
                              defaultMessage="Other"
                            />
                          </label>

                          <input
                            className="input-registration"
                            type="text"
                            id="input-registration"
                            onChange={this.handleChangeRegistration}
                          />
                        </div>
                        <span
                          className={
                            !this.state.registrationType && this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>
                      {/* Travel assistance */}
                      <h4>
                        <FormattedMessage
                          id="register.travel"
                          defaultMessage="Travel Assistance Required"
                        />
                      </h4>

                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1154423302"
                            id="entry.1154423302"
                            value="Yes"
                            onChange={() =>
                              this.setState({ travelAssistanceRequired: true })
                            }
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.travel.yes"
                              defaultMessage="Yes"
                            />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1154423302"
                            id="entry.1154423302"
                            value="No"
                            onChange={() =>
                              this.setState({ travelAssistanceRequired: true })
                            }
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.travel.no"
                              defaultMessage="No"
                            />
                          </label>
                        </div>
                        <span
                          className={
                            !this.state.travelAssistanceRequired &&
                            this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>
                      <br />
                      <h4>
                        <FormattedMessage
                          id="register.travel.confirmed"
                          defaultMessage="Travel Assistance Confirmed"
                        />
                      </h4>

                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.631181808"
                            id="entry.631181808"
                            value="Yes"
                            onChange={() =>
                              this.setState({ travelAssistanceConfirmed: true })
                            }
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.travel.confirmed.yes"
                              defaultMessage="Yes"
                            />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.631181808"
                            id="entry.631181808"
                            value="No"
                            onChange={() =>
                              this.setState({ travelAssistanceConfirmed: true })
                            }
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.travel.assistance.no"
                              defaultMessage="No"
                            />
                          </label>
                        </div>
                        <span
                          className={
                            !this.state.travelAssistanceConfirmed &&
                            this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>

                      <br />
                      <h4>
                        <FormattedMessage
                          id="register.visa"
                          defaultMessage="Visa"
                        />
                      </h4>

                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1783235225"
                            id="entry.1783235225"
                            value="Yes"
                            onChange={() =>
                              this.setState({ visaRequired: true })
                            }
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.visa.yes"
                              defaultMessage="Yes"
                            />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1783235225"
                            id="entry.1783235225"
                            value="No"
                            onChange={() =>
                              this.setState({ visaRequired: true })
                            }
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.visa.no"
                              defaultMessage="No"
                            />
                          </label>
                        </div>
                        <span
                          className={
                            !this.state.visaRequired && this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>
                      <br />
                      <h4>
                        <FormattedMessage
                          id="register.valid.visa"
                          defaultMessage="Do you have a valid Visa to visit Argentina?"
                        />
                      </h4>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1284879173"
                            id="entry.1284879173"
                            value="Yes"
                            onChange={() => this.setState({ validVisa: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.valid.visa.yes"
                              defaultMessage="Yes"
                            />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="radio"
                            name="entry.1284879173"
                            id="entry.1284879173"
                            value="No"
                            onChange={() => this.setState({ validVisa: true })}
                          />
                          <label for="contactChoice1">
                            <FormattedMessage
                              id="register.valid.visa.no"
                              defaultMessage="No"
                            />
                          </label>
                        </div>
                        <span
                          className={
                            !this.state.validVisa && this.state.submit
                              ? 'show_error_radio'
                              : 'hide_error'
                          }
                        >
                          <FormattedMessage
                            id="register.error.radioButton"
                            defaultMessage="You need to select an option."
                          />
                        </span>
                      </div>
                      <br />
                      <br />
                      <div className="buttons_container">
                        <button type="submit" className="submit-button">
                          <FormattedMessage
                            id="register.submit"
                            defaultMessage="Submit"
                          />
                        </button>
                      </div>
                    </div>
                    {/* FORM TWO FINISH */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </IntlProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
  }
}

export default connect(
  mapStateToProps,
  { setLocale }
)(Register)
