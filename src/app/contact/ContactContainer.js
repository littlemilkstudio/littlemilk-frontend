import { connect } from 'react-redux'
import ContactComponent from './ContactComponent'
import { appActions } from '../duck'

const mapDispatchToProps = dispatch => ({
  makeThemeDark: () => dispatch(appActions.makeThemeDark())
})

const ContactContainer = connect(
  null,
  mapDispatchToProps
)(ContactComponent)

export default ContactContainer
