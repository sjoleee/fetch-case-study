"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundaryWithSuspense, {
  ErrorBoundaryWithSuspenseProps,
} from "./ErrorBoundaryWithSuspense";

const ReactQueryErrorBoundaryWithSuspense = ({
  errorFallback,
  loadingFallback,
  onError,
  children,
}: ErrorBoundaryWithSuspenseProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundaryWithSuspense
          onReset={reset}
          onError={onError}
          errorFallback={errorFallback}
          loadingFallback={loadingFallback}
        >
          {children}
        </ErrorBoundaryWithSuspense>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ReactQueryErrorBoundaryWithSuspense;
