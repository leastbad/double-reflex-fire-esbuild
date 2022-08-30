import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Example Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  connect() {
    super.connect()
    console.log("connect")
  }

  beforePoke() {
    console.log("before poke...")
  }
}
