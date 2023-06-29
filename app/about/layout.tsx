

export const metadata = {
  title: 'About',
  description: 'About Page',
}

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
   <>
    <nav>
        About Nav bar
    </nav>
    <main>
        {children}
    </main>
   </>
  )
}
