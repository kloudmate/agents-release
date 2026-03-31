import { Source_Sans_3 } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';
import { Banner } from '@/components/banner';
import { Metadata, Viewport } from 'next';

const font = Source_Sans_3({
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1E1E1E",
};

export const SITE_NAME = 'KloudMate Agents Documentation';
export const SITE_URL = 'https://charts.kloudmate.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | KloudMate",
  },
  description:
    "Get instant eBPF-powered zero-code observability, automated deployment, and remote configuration seamlessly",
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Get instant eBPF-powered zero-code observability, automated deployment, and remote configuration seamlessly.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Get instant eBPF-powered zero-code observability, automated deployment, and remote configuration seamlessly",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
