// Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const widthWarning = (WrappedComponent) => {
    return (props) => (
      <div>
          {props.isAdmin && <p>This is a private message alert!</p>}
          <WrappedComponent {...props} />
      </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}  /> : <p>This requires authentication</p>}       
        </div>
    );
};

const AdminInfo = widthWarning(Info);
const AdminAuth = requireAuth(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info=" this is a component injection" />, document.getElementById('app'));
ReactDOM.render(<AdminAuth isAuthenticated={false} info="Info test HOC" />, document.getElementById('app'));