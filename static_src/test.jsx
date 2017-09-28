import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'div',
    { className: 'greeting' },
    'Wow!',
);

const element1 = <div className="greeting">
    <p>Hello from JSX!</p>
</div>;

ReactDOM.render(
  element,
  document.getElementById('root'),  
);