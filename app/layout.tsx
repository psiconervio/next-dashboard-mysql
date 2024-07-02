
import { montserrat } from './ui/fonts';
import './ui/global.css'
// estilos cargados globalmente

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <header>
          <div>
          <h1>h1 de header</h1>
          </div>
        </header>
        {/* el children es el page.psx */}
        {children}</body>
    </html>
  );
}
