
import { montserrat } from './ui/fonts';
import './ui/global.css'
import Headernav from "./components/Headernav";
// estilos cargados globalmente
//aca van los componentes para estructurar el html de la pagina


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
      <Headernav/>
        {/* el children es el page.psx */}
        {children}
        <footer className='py-10 flex justify-center items-center '>
          <h1 className='color bg-white'>este es el footer</h1>
            </footer>
            </body>
    </html>
  );
}
