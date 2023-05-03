import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-center mt-10 font-bold text-4xl underline mb-10">CENCOTIENDA VIRTUAL</h1>

      <div>
        <Image className="mx-auto" src={'/img/Jumbo_0.webp'} alt="logo" width={800} height={100} />
      </div>

      <div className="w-2/4 mx-auto text-center mt-9 mb-9">
        <p>Cencosud es uno de los más grandes y prestigiosos conglomerados de retail en América Latina. Contamos con operaciones activas en Argentina, Brasil, Chile, Perú y Colombia, donde día a día desarrollamos una exitosa estrategia multiformato que hoy da trabajo a más de 100 mil colaboradores.</p>
        <br />
        <p>Operaciones Nuestras operaciones se extienden a los negocios de supermercados, mejoramiento del hogar, tiendas por departamento, centros comerciales y servicios financieros. Esto nos ha convertido en la compañía de capitales latinoamericanos más diversificada del Cono Sur y con la mayor oferta de metros cuadrados. Adicionalmente, desarrollamos otras líneas de negocio que complementan nuestra operación central, como es el corretaje de seguros y centros de entretención familiar. Todos ellos, cuentan con un gran reconocimiento y prestigio entre los consumidores, con firmas que destacan por su calidad, excelente nivel de servicio y satisfacción al cliente.</p>
        <br />
        <p>Objetivo Central En Cencosud nuestro objetivo central es poder convertirnos en el mayor retailer de América Latina, llegando con la máxima calidad de servicio, excelencia y compromiso, a cientos de miles de clientes Objetivo Central En Cencosud nuestro objetivo central es poder convertirnos en el mayor retailer de América Latina, llegando con la máxima calidad de servicio, excelencia y compromiso, a cientos de miles de clientes.</p>
      </div>


    </Layout>
  )
}
