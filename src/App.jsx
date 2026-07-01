import React from "react";
import Dog from "./components/Dog";
import "./App.css";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <main>
        <div className="images">
          <img id="tommorowland" src="/tommorowland.png" alt="" />
          <img id="navy-pier" src="/navy-pier.png" alt="" />
          <img id="msi-chicago" src="/msi-chicago.png" alt="" />
          <img id="phone" src="/phone.png" alt="" />
          <img id="kikk" src="/kikk.png" alt="" />
          <img id="kennedy" src="/kennedy.png" alt="" />
          <img id="opera" src="/opera.png" alt="" />
        </div>
        <Canvas
          id="canvas-elem"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Dog />
        </Canvas>
        <section id="section1">
          <nav>
            <div className="nav-elem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="700"
                height="140"
                viewBox="0 0 700 140"
                fill='#fff'
              >
                <defs>
                  <style></style>
                </defs>

                <text x="40" y="92" class="logo">
                  Studio<tspan class="accent">GL</tspan>
                </text>

                <line
                  className="line"
                  x1="42"
                  y1="110"
                  x2="380"
                  y2="110"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div id="arrow" className="nav-elem">
              <i className="ri-arrow-right-s-line"></i>
              <h3>Our Showreel</h3>
            </div>
            <div className="nav-elem">
              <i className="ri-menu-3-line"></i>
            </div>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>
                We <br /> Make <br />
                Good <br />
                Shit
              </h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <h1>
                Dogstudio is a multidisciplinary creative studio at the
                intersection of art, design and technology.
              </h1>
              <h2>
                Our goal is to deliver amazing experiences that make people
                talk, and build strategic value for brands, tech, entertainment,
                arts & culture.
              </h2>
            </div>
          </div>
          <div className="first-line"></div>
          <div className="second-line"></div>
        </section>
        <section id="section2">
          <div className="titles">
            <div img-title="tommorowland" className="title">
              <small>2020 - ONGOING</small>
              <h1>Tomorrowland</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>2018 - ONGOING</small>
              <h1>Navy Pier</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>2015 - ONGOING</small>
              <h1>MSI Chicago</h1>
            </div>
            <div img-title="phone" className="title">
              <small>2016 - ONGOING</small>
              <h1>This Was Louise's Phone</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>2012 - ONGOING</small>
              <h1>KIKK Festival 2018</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>2017 - ONGOING</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div img-title="opera" className="title">
              <small>2016 - ONGOING</small>
              <h1>Royal Opera Of Wallonia</h1>
            </div>
          </div>
        </section>
        <section id="section3">
          <div className="top">
            <div className="left">
              <p id="heading">THIS IS HOW WE DO IT</p>
              <p id="below">
                <span>We're crafting</span> <br />
                <span>emotional</span>
                <br />
                <span>expriences aimed</span>
                <br />
                <span>at improving</span>
                <br />
                <span>results</span>
              </p>
            </div>
            <div className="right"></div>
          </div>
        </section>
        <section id="section4">
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <h3>
                Dogstudio is a design & technology firm working globally from
                our offices based in Belgium and Chicago. Our strong focus on
                producing high quality & emotional brandings, digital products
                and experiences became a signature.
              </h3>
              <h3>
                We’re passionate about moving people and solving problems for
                the likes of Microsoft, The Museum of Science And Industry Of
                Chicago, The Kennedy Center of Washington, Dragone, Quanta
                Magazine, and many more.
              </h3>
            </div>
          </div>
        </section>
        <div id="discover">
          <div className="left"></div>
          <div className="right">
            <h3>Discover our values</h3>
            <div id="line"></div>
          </div>
        </div>
        <div id="goodshit">
          <div className="left"></div>
          <div className="right">
            <p>
              We <br /> Make <br /> Good <br />
              Shit
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
