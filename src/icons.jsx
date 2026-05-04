export const Icon = {
  arrow: ({ size = 16, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUR: ({ size = 16, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
  plus: ({ size = 16, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  minus: ({ size = 16, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" />
    </svg>
  ),
  close: ({ size = 16, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  star: ({ size = 14, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="m12 2 3 7 7 .6-5.3 4.7L18.5 22 12 18.3 5.5 22l1.8-7.7L2 9.6 9 9z"/>
    </svg>
  ),
  arrowUR: ({ size = 16, ...p }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
}
