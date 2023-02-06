import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Paya - To improve people's lives through low interest financing
          services.
        </title>
        <meta
          name="description"
          content="Paya is a financial technology company that was established on the idea that traditional banking services need to be beneficial, simple, and free and accessible to everyone ."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/logo.png" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Log in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5">
              <h1>Better mobile banking for everyday needs</h1>
              <p>
                Manage and save money in an easy-to-use mobile banking app. Make
                make payments and borrow money with a trusted financial
                institution.
              </p>
              <Link href="/" className="btn btn-primary mt-2">
                Get Started
              </Link>
            </div>
            <div className="col-md-6">
              <div className="img-wrapper">
                <img src="/dashboard.png" alt="Landing dashboard" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="icon">
                <img src="/icons/1.png" alt="Icon 1" />
              </div>
              <div className="content">
                <h6>Easy access</h6>
                <p>
                  Get easy access to a real bank and manage all your apps from
                  your mobile device.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon">
                <img src="/icons/2.png" alt="Icon 2" />
              </div>
              <div className="content">
                <h6>Trustful</h6>
                <p>
                  Feeel safe knowing you money is with a trusted financial
                  institution regulated with the Central Bank of Kenya.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon">
                <img src="/icons/3.png" alt="Icon 3" />
              </div>
              <div className="content">
                <h6>No fees</h6>
                <p>
                  Pay zero fees for using your bank accounts to make payments.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon">
                <img src="/icons/4.png" alt="Icon 4" />
              </div>
              <div className="content">
                <h6>Join in minutes</h6>
                <p>
                  Create an account and grow your funds in less than 2 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
