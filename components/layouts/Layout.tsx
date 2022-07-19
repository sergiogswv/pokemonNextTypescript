import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
  children?: React.ReactNode,
  title?: String
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: React.FC<Props> = ({ children, title }) => {

  console.log(origin)

  return (

    <>
      <Head>
        <title>{title || 'PokemónApp'}</title>
        <meta name='author' content="Sergio Guadarrama" />
        <meta name='description' content={`Informacion sobre el pokemón: ${title}`} />
        <meta name="keyboards" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}