import { Component, ReactNode } from 'react';

type State = { failed: boolean; message?: string };

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };
  static getDerivedStateFromError(error: Error) {
    return { failed: true, message: error.message };
  }
  render() {
    if (this.state.failed) {
      return <div className="error-panel">页面加载异常：{this.state.message}</div>;
    }
    return this.props.children;
  }
}
