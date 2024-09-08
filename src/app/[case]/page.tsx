import ClientCompWithReactQuery from "@/components/case/components/ClientCompWithReactQuery";
import ErrorFallbackForReactQuery from "@/components/case/components/ErrorFallbackForReactQuery";
import ErrorFallbackForServerComp from "@/components/case/components/ErrorFallbackForServerComp";
import ServerComp from "@/components/case/components/ServerComp";
import { pokemonOptions } from "@/components/case/utils/queryOptions";
import ErrorBoundaryWithSuspense from "@/components/common/ErrorBoundary/ErrorBoundaryWithSuspense";
import ReactQueryErrorBoundaryWithSuspense from "@/components/common/ErrorBoundary/ReactQueryErrorBoundaryWithSuspense";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const Case = () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(pokemonOptions);

  return (
    <>
      <div className="p-8 border-red-300 border-2 rounded-lg">
        <ErrorBoundaryWithSuspense
          errorFallback={ErrorFallbackForServerComp}
          loadingFallback={<div>default fetch loading...</div>}
        >
          <ServerComp />
        </ErrorBoundaryWithSuspense>
      </div>
      <div className="p-8 border-blue-300 border-2 rounded-lg">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ReactQueryErrorBoundaryWithSuspense
            errorFallback={ErrorFallbackForReactQuery}
            loadingFallback={<div>react query loading...</div>}
          >
            <ClientCompWithReactQuery />
          </ReactQueryErrorBoundaryWithSuspense>
        </HydrationBoundary>
      </div>
    </>
  );
};

export default Case;
