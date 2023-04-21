import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <main data-spy="scroll" data-target=".navbar" data-offset="51">
      <Head>
        <meta charSet="utf-8" />

        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        
        <title>Jack & Rose - Free Wedding Website Template</title>

        <link href="/assets/img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />

        <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

        <link href="/assets/css/style.css" rel="stylesheet" />

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer ></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" defer ></script>
        <script src="/assets/lib/easing/easing.min.js" defer ></script>
        <script src="/assets/lib/waypoints/waypoints.min.js" defer ></script>
        <script src="/assets/lib/owlcarousel/owl.carousel.min.js" defer ></script>
        <script src="/assets/lib/isotope/isotope.pkgd.min.js" defer ></script>

        <script src="/assets/js/main.js" defer ></script>
      </Head>

      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="font-secondary text-white mb-n2">Jack <span className="text-primary">&</span> Rose</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">About</a>
            <a href="#story" className="nav-item nav-link">Story</a>
            <a href="#gallery" className="nav-item nav-link">Gallery</a>
          </div>
          <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
            <h1 className="font-secondary text-white mb-n2">Jack <span className="text-primary">&</span> Rose</h1>
          </a>
          <div className="navbar-nav mr-auto py-0">
            <a href="#family" className="nav-item nav-link">Family</a>
            <a href="#event" className="nav-item nav-link">Event</a>
            <a href="#rsvp" className="nav-item nav-link">RSVP</a>
            <a href="#contact" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>


      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: "100vh", minHeight: "400px"}}>
              <Image alt="Image" className="position-absolute w-100 h-100" src="/assets/img/carousel-1.jpg" style={{ objectFit: "cover" }} width={100} height={100} priority unoptimized={true} />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth: "900px"}} >
                    <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Jack & Rose</h1>
                    <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                      <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: "2px"}} >We&apos;re getting married</h3>
                    </div>
                    <button type="button" className="btn-play mx-auto" data-toggle="modal"
                      data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                      <span></span>
                    </button>
                  </div>
                </div>
            </div>
            <div className="carousel-item position-relative" style={{ height: "100vh", minHeight: "400px" }}>
              <Image alt="Image" className="position-absolute w-100 h-100" src="/assets/img/carousel-2.jpg" style={{ objectFit: "cover" }} width={100} height={100} priority unoptimized={true} />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth: "900px"}}>
                    <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Jack & Rose</h1>
                    <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                      <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: "2px"}}>We&apos;re getting married</h3>
                    </div>
                    <button type="button" className="btn-play mx-auto" data-toggle="modal"
                      data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                      <span></span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <a className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
            <div className="btn btn-primary px-0" style={{width: "68px", height: "68px"}} >
              <span className="carousel-control-prev-icon mt-3"></span>
            </div>
          </a>
          <a className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
            <div className="btn btn-primary px-0" style={{width: "68px", height: "68px"}}>
              <span className="carousel-control-next-icon mt-3"></span>
            </div>
          </a>
        </div>
      </div>


      <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="" id="video" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" id="about">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px"}} >About</h6>
            <h1 className="font-secondary display-4">Groom & Bride</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div className="col-md-6 p-0 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 className="mb-3">The Groom</h3>
                <p>Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-male text-primary pr-3"></i>Jack</h3>
                <div className="position-relative">
                  <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0" style={{ minHeight: "400px"}} >
              <Image alt="Image" className="position-absolute w-100 h-100" src="/assets/img/about-1.jpg" style={{objectFit: "cover"}} width={100} height={100} unoptimized={true} />
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-6 p-0" style={{ minHeight: "400px"}}>
              <Image alt="Image" className="position-absolute w-100 h-100" src="/assets/img/about-2.jpg" style={{objectFit: "cover"}} width={100} height={100} unoptimized={true} />
            </div>
            <div className="col-md-6 p-0 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 className="mb-3">The Bride</h3>
                <p>Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-female text-primary pr-3"></i>Rose</h3>
                <div className="position-relative">
                  <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" id="story">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px"}}>Story</h6>
            <h1 className="font-secondary display-4">Our Love Story</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="container timeline position-relative p-0">
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <Image alt="Image" className="img-fluid mr-md-3" src="/assets/img/story-1.jpg" width={100} height={100} unoptimized={true} />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">First Meet</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">First Date</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <Image alt="Image" className="img-fluid ml-md-3" src="/assets/img/story-2.jpg" width={100} height={100} unoptimized={true} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <Image alt="Image" className="img-fluid mr-md-3" src="/assets/img/story-3.jpg" width={100} height={100} unoptimized={true} />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">Proposal</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">Enagagement</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <Image alt="Image" className="img-fluid ml-md-3" src="/assets/img/story-4.jpg" width={100} height={100} unoptimized={true} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid bg-gallery" id="gallery" style={{ padding: "120px 0", margin: "90px 0" }} >
        <div className="section-title position-relative text-center" style={{ marginBottom: "120px" }} >
          <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px"}}>Gallery</h6>
          <h1 className="font-secondary display-4 text-white">Our Photo Gallery</h1>
          <i className="far fa-heart text-white"></i>
        </div>
        <div className="owl-carousel gallery-carousel">
          <div className="gallery-item">
            <Image alt="Image" className="img-fluid w-100" src="/assets/img/gallery-1.jpg" width={100} height={100} unoptimized={true} />
          </div>
          <div className="gallery-item">
            <Image alt="Image" className="img-fluid w-100" src="/assets/img/gallery-2.jpg" width={100} height={100} unoptimized={true} />
          </div>
          <div className="gallery-item">
            <Image alt="Image" className="img-fluid w-100" src="/assets/img/gallery-3.jpg" width={100} height={100} unoptimized={true} />
          </div>
          <div className="gallery-item">
            <Image alt="Image" className="img-fluid w-100" src="/assets/img/gallery-4.jpg" width={100} height={100} unoptimized={true} />
          </div>
          <div className="gallery-item">
            <Image alt="Image" className="img-fluid w-100" src="/assets/img/gallery-5.jpg" width={100} height={100} unoptimized={true} />
          </div>
          <div className="gallery-item">
            <Image alt="Image" className="img-fluid w-100" src="/assets/img/gallery-6.jpg" width={100} height={100} unoptimized={true} />
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" id="event">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px"}}>Event</h6>
            <h1 className="font-secondary display-4">Our Wedding Event</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h5 className="font-weight-normal text-muted mb-3 pb-3">Clita ipsum aliquyam dolor diam dolores elitr nonumy. Rebum sea vero ipsum eirmod tempor kasd. Diam amet lorem erat eos sit lorem elitr justo</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 border-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <Image alt="Image" className="img-fluid mb-4" src="/assets/img/event-1.jpg" width={100} height={100} unoptimized={true} />
                  <h4 className="mb-3">The Reception</h4>
                  <p className="mb-2">123 Street, New York, USA</p>
                  <p className="mb-0">12:00AM - 13:00PM</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <Image alt="Image" className="img-fluid mb-4" src="/assets/img/event-2.jpg" width={100} height={100} unoptimized={true} />
                  <h4 className="mb-3">Wedding Party</h4>
                  <p className="mb-2">123 Street, New York, USA</p>
                  <p className="mb-0">12:00AM - 13:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" id="family">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px"}}>Friends & Family</h6>
            <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4" data-filter=".first">Groomsmen</li>
                <li className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4" data-filter=".second">Bridesmaid</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2">
                <Image alt="Image" className="img-fluid w-100" src="/assets/img/groomsmen-1.jpg" width={100} height={100} unoptimized={true} />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <Image alt="Image" className="img-fluid w-100" src="/assets/img/bridesmaid-1.jpg" width={100} height={100} unoptimized={true} />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2">
                <Image alt="Image" className="img-fluid w-100" src="/assets/img/groomsmen-2.jpg" width={100} height={100} unoptimized={true} />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <Image alt="Image" className="img-fluid w-100" src="/assets/img/bridesmaid-2.jpg" width={100} height={100} unoptimized={true} />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2">
                <Image alt="Image" className="img-fluid w-100" src="/assets/img/groomsmen-3.jpg" width={100} height={100} unoptimized={true} />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <Image alt="Image" className="img-fluid w-100" src="/assets/img/bridesmaid-3.jpg" width={100} height={100} unoptimized={true} />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div className="d-inline-block">
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5" id="rsvp">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px"}}>RSVP</h6>
            <h1 className="font-secondary display-4">Join Our Party</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <form>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input type="text" className="form-control bg-secondary border-0 py-4 px-3" placeholder="Your Name" />
                    </div>
                    <div className="form-group col-sm-6">
                      <input type="email" className="form-control bg-secondary border-0 py-4 px-3" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select className="form-control bg-secondary border-0" style={{ height: "52px"}} >
                        <option>Number of Guest</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select className="form-control bg-secondary border-0" style={{ height: "52px"}}>
                        <option>I&apos;m Attending</option>
                        <option>All Events</option>
                        <option>Wedding Party</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control bg-secondary border-0 py-2 px-3" rows={5} placeholder="Message" required={true}></textarea>
                  </div>
                  <div>
                    <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid bg-dark text-white py-5" id="contact" style={{ marginTop: "90px" }} >
        <div className="container text-center py-5">
          <div className="section-title position-relative text-center">
            <h1 className="font-secondary display-3 text-white">Thank You</h1>
            <i className="far fa-heart text-white"></i>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="d-flex justify-content-center py-2">
            <p className="text-white">info@example.com</p>
            <span className="px-3">|</span>
            <p className="text-white">+012 345 6789</p>
          </div>
          <p className="m-0">&copy; <a className="text-primary" href="#">Domain Name</a>. Designed by <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
      </div>


      <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

      <a href="#" className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </main>
  )
}
