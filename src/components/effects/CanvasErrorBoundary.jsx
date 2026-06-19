import { Component } from 'react';

// If WebGL fails (driver, context loss, headless), render the fallback instead
// of crashing the page. Progressive enhancement, not a hard dependency.
export default class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.warn('3D scene unavailable, using fallback:', err?.message);
  }
  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
