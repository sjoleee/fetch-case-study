"use client";

import { ReactNode, Suspense, SuspenseProps } from "react";
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
  ErrorBoundaryPropsWithFallback,
} from "react-error-boundary";

export interface ErrorBoundaryWithSuspenseProps {
  errorFallback: ErrorBoundaryPropsWithComponent["FallbackComponent"];
  loadingFallback: SuspenseProps["fallback"];
  onError?: ErrorBoundaryPropsWithFallback["onError"];
  onReset?: ErrorBoundaryPropsWithFallback["onReset"];
  children: ReactNode;
}

const ErrorBoundaryWithSuspense = ({
  errorFallback,
  loadingFallback,
  onError,
  onReset,
  children,
}: ErrorBoundaryWithSuspenseProps) => {
  return (
    <ErrorBoundary FallbackComponent={errorFallback} onReset={onReset} onError={onError}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWithSuspense;
