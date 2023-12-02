import './globals.css';

export const metadata = {
  title: 'Register users',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-300'>{children}</body>
    </html>
  )
}
