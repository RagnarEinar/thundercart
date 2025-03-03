import React, { Component, ReactNode } from "react";
import ErrorModal from "./components/ErrorModel";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught:", error, errorInfo);
    this.setState({ error, errorInfo });
  }
  handleClose = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/"; 
// Refresh the page to reset the app state
  };
  render() {
    if (this.state.hasError) {
      return (
        <ErrorModal
          header={"Sorry For Inconvience"}
          body={
            "Something went wrong, plz don't retry now , we will fix this soon"
          }
          onClose={this.handleClose}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
