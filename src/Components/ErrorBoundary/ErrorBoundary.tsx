import React, { Component, ReactNode } from 'react';
import './error.scss';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="wrapper-errorBoundary">
          <h1>Something went wrong</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
