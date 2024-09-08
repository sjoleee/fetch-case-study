"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { FallbackProps } from "react-error-boundary";

export default function ErrorFallbackForServerComp({ error, resetErrorBoundary }: FallbackProps) {
  const router = useRouter();

  const retry = () => {
    startTransition(() => {
      router.refresh();
      resetErrorBoundary?.();
    });
  };

  return (
    <div>
      <p> 에러: {error.message} </p>
      <button onClick={() => retry()}> 다시 시도 </button>
    </div>
  );
}
