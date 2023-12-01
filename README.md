
### react-query SSR setting 

- QueryClientProvider로 컴포넌트 트리 래핑 ( ProviderReactQuery.tsx )
- QueryClient 싱글톤 패턴 적용 (getQueryClient.tsx)
- Hydrate를 통해 데이터 prefetching (Hydreate => HydrationBoundary로 바꼈음 ㅡㅡ;)
=> 사용법  Prefetching 하고 싶은 컴포넌트를 Hydrated에 감싸고 query의 key값을 외부에서 주입 
