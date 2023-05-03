import Head from "next/head"
import Image from "next/image"
import Navbar from "./Navbar"

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className="container mx-auto">
        {children}
      </main>

      <footer className="py-6 bg-slate-800 flex text-white justify-around">
        <Image src={'/img/LOGO-JUMBO-2021.png'} width={140} height={120} alt="logo" />

        <div>
          <h2 className="text-xl mb-2 uppercase py-1 border-b">Nosotros</h2>
          <ul>
            <li>Cencosud</li>
            <li>Responsabilidad Social</li>
            <li>Trabaja con Nosotros</li>
            <li>Proveedores</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl mb-2 uppercase py-1 border-b">Atencio al cliente</h2>
          <ul>
            <li>PQR</li>
            <li>Preguntas Frecuentes</li>
            <li>Política de Cookies</li>
            <li>WhatsApp Tarjeta Cencosud</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl mb-2 uppercase py-1 border-b">Contactanos</h2>
          <ul>
            <li>Bogotá: (601)348 9898 | Resto del país: 01 8000 120320 | sac@tiendasjumbo.co</li>
            <li>(de 8am-8pm) Bogotá: (601)348 9890</li>
            <li>Resto de país: 01 8000 114880 | servicio.al.cliente@cencosud.com.co</li>
            <li>Correo de notificaciones judiciales: notificaciones@cencosud.com.co</li>
          </ul>
        </div>
      </footer>
    </>

  )
}

export default Layout