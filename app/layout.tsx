import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import TopSocial from "@/components/TopSocial";
import Footer from "@/components/Footer";

// ✅ Ensure metadataBase is set correctly
export const metadata: Metadata = {
    metadataBase: new URL("https://luvkansal.vercel.app"),
    title: {
        default: "Luv Kansal - Software Engineer",
        template: "%s | Luv Kansal"
    },
    description: "Portfolio of Luv Kansal - Software Engineer",
    keywords: [
        "Luv Kansal", "Full Stack Developer", "Competitive Programming", "Web Development",
        "React", "Next.js", "TypeScript", "JavaScript", "Python", "FastAPI", "LangChan",
        "LangGraph", "Generative AI", "Agentic AI", "Codeforces", "CodeChef", "LeetCode",
        "Software Engineer", "Frontend Developer", "Backend Developer", "AI Engineer", 
        "Portfolio", "Hackathon", "IIIT", "Pune", "IIIT Pune", "Bit Legion", "Coding Contest"
    ],
    authors: [{ name: "Luv Kansal" }],
    creator: "Luv Kansal",
    publisher: "Luv Kansal",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://luvkansal.vercel.app',
        siteName: 'Luv Kansal Portfolio',
        title: 'Luv Kansal - Software Engineer',
        description: 'Portfolio of Luv Kansal - Software Engineer.',
        images: [
            {
                url: 'https://luvkansal.vercel.app/icon0.svg',
                width: 1200,
                height: 630,
                alt: 'Luv Kansal - Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luv Kansal - Software Engineer',
        description: 'Portfolio of Luv Kansal - Software Engineer',
        images: ['https://luvkansal.vercel.app/icon0.svg'],
        creator: '@luvkansal29',
    },
    alternates: {
        canonical: 'https://luvkansal.vercel.app',
    },
    icons: {
        icon: [{ url: '/favicon.ico' }],
        apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
        other: [
            {
                rel: 'mask-icon',
                url: '/icon0.svg',
                color: '#FF6B35',
            },
        ],
    },
    manifest: '/site.webmanifest',
    category: 'technology',
    classification: 'Portfolio Website',
    referrer: 'origin-when-cross-origin',
    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'apple-mobile-web-app-title': 'Luv Kansal',
        'application-name': 'Luv Kansal Portfolio',
        'msapplication-TileColor': '#282C33',
        'msapplication-config': '/browserconfig.xml',
    },
};

// ✅ Theme color and color scheme
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FF6B35' },
        { media: '(prefers-color-scheme: dark)', color: '#282C33' },
    ],
    colorScheme: 'dark',
};

// ✅ Page-specific metadata
export const projectsMetadata: Metadata = {
    title: "Projects - Luv Kansal",
    description: "Explore the projects built by Luv Kansal including full-stack applications, competitive programming solutions, and Agentic AI implementations.",
    openGraph: {
        title: "Projects - Luv Kansal",
        description: "Explore the projects built by Luv Kansal including full-stack applications, competitive programming solutions, and Agentic AI implementations.",
        url: 'https://luvkansal.vercel.app/projects',
        images: [
            {
                url: 'https://luvkansal.vercel.app/icon0.svg',
                width: 1200,
                height: 630,
                alt: 'Luv Kansal - Projects',
            },
        ],
    },
    twitter: {
        title: "Projects - Luv Kansal",
        description: "Explore the projects built by Luv Kansal including full-stack applications, competitive programming solutions, and Agentic AI implementations.",
        images: ['https://luvkansal.vercel.app/icon0.svg'],
    },
    alternates: {
        canonical: 'https://luvkansal.vercel.app/projects',
    },
};

export const linksMetadata: Metadata = {
    title: "Links - Luv Kansal",
    description: "Connect with Luv Kansal on various coding platforms including Codeforces, CodeChef, LeetCode, and GitHub. View achievements and certifications.",
    openGraph: {
        title: "Connect - Luv Kansal",
        description: "Connect with Luv Kansal on various coding platforms including Codeforces, CodeChef, LeetCode, and GitHub. View achievements and certifications.",
        url: 'https://luvkansal.vercel.app/link-tree',
        images: [
            {
                url: 'https://luvkansal.vercel.app/icon0.svg',
                width: 1200,
                height: 630,
                alt: 'Luv Kansal - Connect',
            },
        ],
    },
    twitter: {
        title: "Connect - Luv Kansal",
        description: "Connect with Luv Kansal on various coding platforms including Codeforces, CodeChef, LeetCode, and GitHub. View achievements and certifications.",
        images: ['https://luvkansal.vercel.app/icon0.svg'],
    },
    alternates: {
        canonical: 'https://luvkansal.vercel.app/link-tree',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="absolute top-0 left-[17px] z-[500] hidden md:block">
                    <TopSocial />
                </div>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
