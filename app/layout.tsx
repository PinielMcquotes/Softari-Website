import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'




const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Softari Technologies — Infrastructure for IoT-Powered Asset Access",
  description:
    "Softari designs its own IoT hardware locally and connects it to a full platform: digital wallets, smart contracts, and real-time asset access. From hardware to payments, end-to-end.",
  keywords: ['IoT', 'Africa', 'asset economy', 'smart contracts', 'hardware', 'Zimbabwe', 'infrastructure', 'startup'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-full flex flex-col w-full">
        {/* Custom cursor */}
        <ClientProviders/>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Global cursor script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var cursor = document.getElementById('cursor');
                var ring   = document.getElementById('cursor-ring');
                if (!cursor || !ring) return;
                var mx = 0, my = 0, rx = 0, ry = 0;
                document.addEventListener('mousemove', function(e) {
                  mx = e.clientX; my = e.clientY;
                  cursor.style.left = mx + 'px';
                  cursor.style.top  = my + 'px';
                });
                function animRing() {
                  rx += (mx - rx) * 0.12;
                  ry += (my - ry) * 0.12;
                  ring.style.left = rx + 'px';
                  ring.style.top  = ry + 'px';
                  requestAnimationFrame(animRing);
                }
                animRing();
                document.querySelectorAll('a,button,[data-hover]').forEach(function(el) {
                  el.addEventListener('mouseenter', function() {
                    cursor.style.width  = '6px';
                    cursor.style.height = '6px';
                    ring.style.width    = '48px';
                    ring.style.height   = '48px';
                    ring.style.borderColor = 'rgba(0,212,255,0.6)';
                  });
                  el.addEventListener('mouseleave', function() {
                    cursor.style.width  = '10px';
                    cursor.style.height = '10px';
                    ring.style.width    = '32px';
                    ring.style.height   = '32px';
                    ring.style.borderColor = 'rgba(0,212,255,0.35)';
                  });
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}