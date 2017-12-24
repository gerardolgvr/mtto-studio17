import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

export default class App extends React.Component {

  render(){
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="logo" href="index.html"><img src="/images/logo.png" alt="Logo"/></a>
        </div>
        <div className="navbar-collapse collapse">
          {/*<ul className="nav navbar-nav navbar-right">
            <li><a href="#pricing" className="scroll">Pricing</a></li>
            <li><a href="#">Sign in</a></li>
          </ul>*/}
        </div>
      </div>
    </div>


    <header>
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            {/*<a href="index.html"><img src="/images/logo.png" alt="Logo"/></a>*/}
          </div>
          <div className="col-xs-6 signin text-right navbar-nav">
            {/*<a href="#pricing" className="scroll">Pricing</a>&nbsp; &nbsp;<a href="#">Sign in</a>*/}
          </div>
        </div>

        <div className="row header-info">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            {/*<h1 className="wow fadeIn">Studio17</h1>*/}
            <a href="index.html"><img src="/images/logo-big.png" alt="Logo"/></a>
            <br />
            <p className="lead wow fadeIn" data-wow-delay="0.5s">Nuestro sitio se encuentra en construcción <br/>
            Estamos trabajando para sorprenderte pronto.</p>
            <ul className="list-inline socialTop wow fadeIn" data-wow-delay="0.5s">
              <li>Síguenos en nuestras redes sociales</li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/Studio17MX/" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>


            {/*<div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div className="row">
                  <div className="col-xs-6 text-right wow fadeInUp" data-wow-delay="1s">
                    <a href="#be-the-first" className="btn btn-secondary btn-lg scroll">Learn More</a>
                  </div>
                  <div className="col-xs-6 text-left wow fadeInUp" data-wow-delay="1.4s">
                    <a href="#invite" className="btn btn-primary btn-lg scroll">Request Invite</a>
                  </div>
                </div>
              </div>
            </div>*/}

          </div>
        </div>
      </div>
    </header>

    <div className="mouse-icon hidden-xs">
				<div className="scroll"></div>
			</div>

    <section id="be-the-first" className="pad-xl">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn" data-wow-delay="0.6s">
            <h2>Vive una nueva experiencia</h2>
            <p className="lead">¡Somos mucho más que las fotografías que capturamos!</p>
          </div>
        </div>


      </div>
    </section>
    <div className="iphone wow fadeInUp" data-wow-delay="1s">
      <img src="/images/graduacion.png"/>
    </div>

    <section id="main-info" className="pad-xl">
	    <div className="container">
		    <div className="row">
			    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
				    <hr className="line purple"/>
				    <h3>PAQUETES FOTOGRAFICOS</h3>
				    <p>Gran variedad de increibles bases en mdf y molduras así como varias piezas a elegir, podras hacer combinaciones de piezas. Perfectos para reconocer y agradecer a aquellos quienes su apoyo ha sido inigualable.</p>
			    </div>
			    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
				    <hr  className="line blue"/>
				    <h3>FIESTA DE GRADUACION</h3>
				    <p>Una noche inolvidable, eventos completos de graduación desde cena, musica y baile todo con el mejor servicio..</p>
			    </div>
			    <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
				    <hr  className="line yellow"/>
				    <h3>VIAJE GENERACIONAL</h3>
				    <p>¡Una ultima aventura! disfruta de los mejores destinos al mejor precio, viajes todo incluido a la riviera maya.</p>
			    </div>
		    </div>
	    </div>
    </section>

    <footer>
      <div className="container">

        <div className="row">
          <div className="col-sm-4 margin-20">
            <ul className="list-inline social">
              <li>Síguenos en nuestras redes sociales</li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>

          <div className="col-sm-8 text-right">
            <p><small>Copyright &copy; 2017. Todos los derechos reservados. <br/>
	            Created by <a href="http://www.studio17mx.com">Studio17 MX</a></small></p>
          </div>
        </div>

      </div>
    </footer>


      </div>
    );
  }
}
