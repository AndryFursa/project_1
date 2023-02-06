import { Component } from 'react'

class Me extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 5,
      textButton: 'Change Position',
    }
  }

  changeTextButton = () => {
    this.setState((state) => ({
      position: 1 + state.position,
      textButton: 'Position changed',
    }))
    console.log(this.state.position)
  }

  render() {
    const { name, years } = this.props
    return (
      <div>
        <h1>My name is {name}</h1>
        <h1>I am from {years}s </h1>
        <h1>I am {this.state.position}s on position </h1>
        <button className="Button" onClick={this.changeTextButton}>
          {this.state.textButton}
        </button>
      </div>
    )
  }
}
export default Me
