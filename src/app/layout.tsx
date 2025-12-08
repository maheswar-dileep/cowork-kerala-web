import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';

export const metadata: Metadata = {
    title: 'Co-Work Kerala',
    description: 'Find the best coworking spaces in Kerala',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {children}
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
