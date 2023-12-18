import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from './getQueryClient';
import { getData } from './getData';
import React from 'react';

export default async function Hydrated({ children, queryKey }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [queryKey],
    queryFn: getData
  });
  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
}
