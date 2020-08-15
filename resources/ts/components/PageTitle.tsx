import React from 'react';

type Props = {
  title: string
}

export default class PageTitle extends React.Component<Props> {
    render() {
      return (
        <h1>{this.props.title}</h1>
      );
    }
}
