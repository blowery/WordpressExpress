import React from 'react';
import Relay from 'react-relay'

import styles from './App.scss';
import Head from './components/head/head';
import Header from './components/header/header';

class App extends React.Component {

  render() {
    const { viewer, children } = this.props;
    const { options } = viewer;

    const page = React.cloneElement(children, viewer)

    return (
      <div className="application">
        <Head/>
        <Header viewer={viewer} />
        {page}
      </div>
    )
  }
}

export default Relay.createContainer(App, {

  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        settings{
          id
          uploads
        },
        ${Header.getFragment("viewer")}
      }
    `
  },
});
