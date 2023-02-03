function Button() {
  let textButton = 'Click me!'

  return (
    <button className="Button" onClick={(textButton = '2')}>
      {textButton}
    </button>
  )
}

export default Button
