import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  return (
    <>
         <div>
      <header>
        <h1>SENAI</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizados">Aprendizados</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div>
          <p>CURSO TÉCNICO SENAI</p>

          <h2>
            Técnico em
            <br />
            Desenvolvimento de Sistemas
          </h2>

          <p>
            Aprenda a criar sistemas, sites e aplicativos e prepare-se para
            entrar no mercado de tecnologia.
          </p>

          <a href="#sobre" className="botao">
            Conheça o curso
          </a>
        </div>

        <div className="imagem-tecnologia">
          <span>&lt;/&gt;</span>
        </div>
      </section>


      <section id="sobre" className="secao">
        <p className="titulo-vermelho">SOBRE O CURSO</p>

        <h2>Aprenda a desenvolver sistemas</h2>

        <p>
          O curso Técnico em Desenvolvimento de Sistemas prepara você para
          criar, desenvolver e manter sistemas de computador.
        </p>

        <p>
          Durante o curso, você aprende programação, desenvolvimento de sites,
          banco de dados, aplicativos e outras tecnologias utilizadas na área
          de informática.
        </p>

        <p>
          O objetivo é desenvolver conhecimentos para que você possa criar
          soluções e projetos utilizando diferentes tecnologias.
        </p>
      </section>

   
      <section id="aprendizados" className="secao escura">
        <p className="titulo-vermelho">O QUE VOCÊ APRENDE</p>

        <h2>Conhecimentos desenvolvidos no curso</h2>

        <div className="cards">
          <div className="card">
            <h3>Lógica de Programação</h3>
            <p>
              Aprenda a pensar e criar soluções utilizando a programação.
            </p>
          </div>

          <div className="card">
            <h3>Desenvolvimento Web</h3>
            <p>
              Aprenda a desenvolver sites e sistemas para a internet.
            </p>
          </div>

          <div className="card">
            <h3>Frontend</h3>
            <p>
              Crie a parte visual e interativa das aplicações.
            </p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>
              Aprenda a desenvolver a parte responsável pelo funcionamento dos
              sistemas.
            </p>
          </div>

          <div className="card">
            <h3>Banco de Dados</h3>
            <p>
              Aprenda a armazenar e organizar informações.
            </p>
          </div>

          <div className="card">
            <h3>APIs</h3>
            <p>
              Aprenda como sistemas diferentes podem trocar informações.
            </p>
          </div>

          <div className="card">
            <h3>Aplicativos</h3>
            <p>
              Conheça conceitos utilizados no desenvolvimento de aplicações.
            </p>
          </div>

          <div className="card">
            <h3>Git e GitHub</h3>
            <p>
              Aprenda a versionar e compartilhar seus projetos.
            </p>
          </div>
        </div>
      </section>


      <section id="tecnologias" className="secao">
        <p className="titulo-vermelho">TECNOLOGIAS</p>

        <h2>Tecnologias utilizadas</h2>

        <div className="tecnologias">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Node.js</div>
          <div>SQL</div>
          <div>Git</div>
          <div>GitHub</div>
        </div>
      </section>


      <section id="mercado" className="secao escura">
        <p className="titulo-vermelho">ÁREAS DE ATUAÇÃO</p>

        <h2>Onde você pode trabalhar</h2>

        <div className="cards">
          <div className="card">
            <h3>Frontend</h3>
            <p>Desenvolvimento da parte visual dos sistemas e sites.</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Desenvolvimento da parte interna dos sistemas.</p>
          </div>

          <div className="card">
            <h3>Full Stack</h3>
            <p>Trabalho com frontend e backend.</p>
          </div>

          <div className="card">
            <h3>Aplicações</h3>
            <p>Desenvolvimento de diferentes tipos de aplicações.</p>
          </div>

          <div className="card">
            <h3>Banco de Dados</h3>
            <p>Organização, armazenamento e gerenciamento de dados.</p>
          </div>

          <div className="card">
            <h3>Suporte</h3>
            <p>Manutenção e suporte de sistemas.</p>
          </div>
        </div>
      </section>


      <section id="projetos" className="secao">
        <p className="titulo-vermelho">PROJETOS</p>

        <h2>O que você pode criar</h2>

        <div className="cards">
          <div className="card projeto">
            <h3>Sistema de cadastro</h3>
            <p>Sistema para cadastrar e organizar clientes.</p>
          </div>

          <div className="card projeto">
            <h3>Sistema de estoque</h3>
            <p>Sistema para controlar produtos e estoque.</p>
          </div>

          <div className="card projeto">
            <h3>Agendamentos</h3>
            <p>Aplicação para realizar e controlar agendamentos.</p>
          </div>

          <div className="card projeto">
            <h3>Loja virtual</h3>
            <p>Site para apresentar e vender produtos pela internet.</p>
          </div>

          <div className="card projeto">
            <h3>Dashboard</h3>
            <p>Painel para visualizar informações e dados.</p>
          </div>

          <div className="card projeto">
            <h3>Aplicativo de tarefas</h3>
            <p>Aplicação para organizar tarefas do dia a dia.</p>
          </div>
        </div>
      </section>

      <section className="chamada">
        <h2>Seu futuro na tecnologia pode começar aqui.</h2>

        <p>
          Conheça o curso Técnico em Desenvolvimento de Sistemas.
        </p>

        <a href="#inicio" className="botao branco">
          Voltar ao início
        </a>
      </section>


      <footer>
        <h3>SENAI</h3>

        <p>Técnico em Desenvolvimento de Sistemas</p>

        <p>2026 - matheus</p>
      </footer>
    </div>
  ;

    </>
  )
}

export default App
