import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//     'div',
//     { className: 'greeting' },
//     'Wow!',
// );

const Element1 = (props) => { 
    return (
        <div className="greeting">
            <p>Hello from JSX!</p>
        </div>
    );
};

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Element1 />
                <h1>Hello from component! { this.props.title }</h1>
            </div>
        );
    }
}

ReactDOM.render(
  <MyComponent title="Hellooooooo"/>,
  document.getElementById('root'),  
);