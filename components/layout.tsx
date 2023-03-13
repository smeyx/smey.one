import Head from 'next/head';
import Header from '@components/Header/header';
// import { Montserrat } from 'next/font/google';
type LayoutProps = {
  children: React.ReactNode;
}

//TODO: fix font, when google fonts are fixed @vercel
// const font = Montserrat({
//   subsets: ['latin'],
//   weight: 'variable',
// });

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
