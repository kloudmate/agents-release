import { Source_Sans_3 } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';
import { Banner } from '@/components/banner';

const font = Source_Sans_3({
  subsets: ['latin'],
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner id='banner' changeLayout={true}
          variant="rainbow"
          rainbowColors={[
            'rgba(255,100,0, 0.5)',
            'rgba(255,100,0, 0.5)',
            'transparent',
            'rgba(255,100,0, 0.5)',
            'transparent',
            'rgba(255,100,0, 0.5)',
            'transparent',
          ]}
        >
          v1.2.0 Launched 🎉 - Introduces eBPF based Monitoring | APM on Host Agents | DAM
        </Banner>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
