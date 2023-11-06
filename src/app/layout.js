import './globals.css'


export const metadata = {
  title: 'Image gallery',
  description: 'Made a image gallery with tailwind css and react bautiful dnd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
