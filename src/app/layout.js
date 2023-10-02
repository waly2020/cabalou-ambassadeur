import NavComponent from "./components/NavConponent"
import "../styles/global/reset.scss"
import "../styles/global/font.scss"
export const metadata = {
  title: 'Cabalou - Ambassadeurs',
  // description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavComponent/>
        {children}
        </body>
    </html>
  )
}
