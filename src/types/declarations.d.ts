/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'next' {
  export type Metadata = any;
  export type Viewport = any;
  export type NextConfig = any;
}
declare module 'next/types.js' {
  export type ResolvingMetadata = Promise<any>;
  export type ResolvingViewport = Promise<any>;
}
declare module 'next/image' {
  const content: any;
  export default content;
}
declare module 'next/link' {
  const content: any;
  export default content;
}
declare module 'next/navigation' {
  export const usePathname: any;
  export const useRouter: any;
  export const useSearchParams: any;
  export const notFound: () => never;
  export const redirect: any;
}
declare module 'next/font/google' {
  export const Inter: any;
  export const Playfair_Display: any;
}
