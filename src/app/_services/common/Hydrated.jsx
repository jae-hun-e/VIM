import React from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getData } from './getData';
import getQueryClient from './getQueryClient';

export default async function Hydrated({ children, queryKey }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [queryKey],
    queryFn: getData
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
