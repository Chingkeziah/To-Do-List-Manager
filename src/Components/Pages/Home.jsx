import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

function Home() {
  return (
    <>
      <Header />
      {/* Tabs */}
      <main className="main">
          <buttton className="btn">
              <img src="" />
              <div></div>
              <p>Today</p>
          </buttton>
          <buttton className="btn">
              <img src="" />
              <div></div>
              <p>Scheduled</p>
          </buttton>
          <buttton className="btn">
              <img src="" />
              <div></div>
              <p>All</p>
          </buttton>
          <buttton className="btn">
              <img src="" />
              <div></div>
              <p>Completed</p>
          </buttton>
      </main>

      {/* <!-- another section --> */}
      <section>
          <h1>My Lists</h1>
          <button>
              <input placeholder="Reminders" />
              <div></div>
          </button>
      </section>

      <Footer />
      </>
  )
}

export default Home