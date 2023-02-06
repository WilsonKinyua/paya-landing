import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>
          Paya - To improve people&apos;s lives through low interest financing
          services.
        </title>
        <meta
          name="title"
          content="Paya - To improve people&apos;s lives through low interest financing services."
        />
        <meta
          name="description"
          content="Paya is a financial technology company that was established on the idea that traditional banking services need to be beneficial, simple, and free and accessible to everyone ."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paya.co.ke/" />
        <meta
          property="og:title"
          content="Paya - To improve people&apos;s lives through low interest financing services."
        />
        <meta
          property="og:description"
          content="Paya is a financial technology company that was established on the idea that traditional banking services need to be beneficial, simple, and free and accessible to everyone ."
        />
        <meta property="og:image" content="/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://paya.co.ke/" />
        <meta
          property="twitter:title"
          content="Paya - To improve people&apos;s lives through low interest financing services."
        />
        <meta
          property="twitter:description"
          content="Paya is a financial technology company that was established on the idea that traditional banking services need to be beneficial, simple, and free and accessible to everyone ."
        />
        <meta property="twitter:image" content="/logo.png"></meta>
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image
                height="40"
                width="90"
                layout="responsive"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
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
              <div className="img-wrapper mt-3">
                <Image
                  height="40"
                  width="90"
                  layout="responsive"
                  src="/dashboard.png"
                  alt="Landing dashboard"
                />
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
                <Image height="40" width="40" src="/icons/1.png" alt="Icon 1" />
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
                <Image height="40" width="40" src="/icons/2.png" alt="Icon 2" />
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
                <Image height="40" width="40" src="/icons/3.png" alt="Icon 3" />
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
                <Image height="40" width="40" src="/icons/4.png" alt="Icon 4" />
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
      <section className="paya-checking-account">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-12">
              <h3>Paya Checking Account</h3>
              <p>
                Open an account in minutes. Use it for everyday purchases
                without transfer fees.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Paya Checking Account</h5>
                  <Image
                    height="40"
                    width="40"
                    src="/cardpos.png"
                    alt="cardpos"
                  />
                  <p>
                    Use your checking account to make everyday payments, and
                    save money on transfer fees.
                  </p>
                  <h6 className="text-muted">Access</h6>
                  <h5>Mobile bank services</h5>
                  <h6 className="text-muted">Fees</h6>
                  <h5>$0</h5>
                  <Link href="/" className="btn btn-primary">
                    Open Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <Link href="/">Contact us</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms of Use</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-12 text-center">
              <p>
                © {new Date().getFullYear()}{" "}
                <Link href="/" className="text-white">
                  Paya Ventures Limited.
                </Link>{" "}
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
