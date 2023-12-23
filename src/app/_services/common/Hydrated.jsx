import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import React from 'react';

import getQueryClient from './getQueryClient';

export default async function Hydrated({ children, queryKey, fetchFn }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [queryKey],
    queryFn: fetchFn
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
