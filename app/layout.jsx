import "./globals.css"

const font = Ubuntu({ 
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"]
})

export const metadata = {
    title: "Multi-step form",
    description: "Multi-step form frontend mentor coding challenge",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-very-light-gray">
            <body className={`${font.className} relative pb-24`}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
