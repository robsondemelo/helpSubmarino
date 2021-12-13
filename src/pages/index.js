import Head from 'next/head'
//import styles from './../styles/styles.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Help SubSubmarino</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">
          <img src='logo.png' alt="SubSubmarino"></img>
        </a>
      </nav>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0d6efd',
        padding: 50,
      }}>
        <h1 style={{
          color: '#fff'
        }}>
          Olá, posso ajudar?
        </h1>
        <form style={{
          marginTop: 20
        }}>
          <input className="form-control"
            style={{
              width: 600
            }}
            type="search"
            placeholder="Buscar"
          ></input>

        </form>

      </div>

      <div style={{
        display:'flex',
        marginTop: 20
      }}>
        <div 
        style={{
          width: '35%',
          borderTop: 0,
          borderBottom: 0,
          borderLeft: 0,
          borderRight: 2,
          borderColor: '#ccc',
          borderStyle: 'solid',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 30,
          paddingRight: 10
        }}
        >
          <h2>Categoria</h2>
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Vendas e Faturamento
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Envio e Entrega
            </button>
          </div>

        </div>
        <div style={{
          width:'65%',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 30,
          paddingRight: 10,
        }}>
          <h2>Artigos</h2>
          <div className='list-group list-group-flush'>

          </div>

        </div>

      </div>



      <footer style={{
        backgroundColor: '#0d6efd',
        paddingTop: 15,
        marginTop: 10,
        width: '100%',
        color: '#fff'
      }}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p>Av: Paraná, Umuarama-Pr</p>
            </div>
            <div className="col text-center">
              <p>(44) 9 9954-6545</p>
            </div>
            <div className="col text-center">
              <p>Fale Conosco</p>
            </div>
          </div>
          <hr />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <p>
              2021 - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>


    </>
  )
}
