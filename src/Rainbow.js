import React from 'react'

const Rainbow = (WrappedComponent) => {

  const colors = ['red', 'orange', 'green', 'blue', 'pink', 'purple', 'black'];
  const randomNumber = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNumber];
  const className = randomColor + '-text';

  return (props) => {
    console.log(randomNumber);
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }

}

export default Rainbow;