import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    logoLight: '/assets/images/logo/logo-dark.png',
    logoDark: '/assets/images/logo/logo-white.png',
    desc: 'Sri Shanmugha Educational Institutions',
    desc_list: [
        "Pullipalayam, Morur(P.O), Sankari (T.K). Salem(D.T.), Tamil Nadu– 637 304",
    ],
    call: '04283-359999',
    email: ' info@shanmugha.edu.in',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            footer_links: [
                { link: 'about', title: 'Anti Ragging' },
                { link: '', title: 'Posh Cell' },
                { link: '', title: 'Feedback' },
                { link: 'https://aakam360.com/', title: 'Aakam360' },
                { link: 'contact-us', title: 'Women Empowerment Cell' },

            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            footer_links: [
                { link: 'contact-us', title: 'AICTE Approval Copies' },
                { link: 'faq', title: "IIP Cell" },
                { link: 'coming-soon', title: 'Academics' },
                { link: 'faq', title: "Grievances" },
                { link: 'coming-soon', title: 'Photo Gallery' }
            ]
        },

    ]

}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg,home_4 }) => {
    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            {!dark_bg && <>
                                                {!style_2 && <img className="logo-light" src={logoLight} alt="Corporate Logo" />}
                                                <img className="logo-dark" src={logoDark} alt="Corporate Logo" />
                                            </>}
                                        </a>
                                    </Link>

                                    <Link href={'/'}>
                                        <a>
                                            {dark_bg && <img className="logo-light" src={home_4?'/assets/images/logo/logo-white.png' :'/assets/images/logo/logo-light-2.png'} alt="Corporate Logo" />}
                                        </a>
                                    </Link>
                                </div>

                                <p className="description" style={{fontWeight: "bold"}}>{desc}</p>
                                {/* <div className="widget-information">
                                    <ul className="information-list">
                                        <li><span style={{fontWeight: "bold"}}>Call:</span><a href={`tel:${call}`}>{call}</a></li>
                                        <li><span style={{fontWeight: "bold"}}>Email:</span><a href={`mailto:${email}`} rel="noreferrer" target="_blank">{email}</a></li>
                                    </ul>
                                </div> */}
                                <div className="widget-information">
  <ul className="information-list">
    <li>
      <span style={{ fontWeight: "bold" }}>For Admission Contacts:</span>
      <span style={{ marginLeft: "5px" }}>
        <a href="tel:7373672999">7373672999</a> / 
        <a href="tel:7339383999" style={{ marginLeft: "5px" }}>7339383999</a> / 
        <a href="tel:7200567817" style={{ marginLeft: "5px" }}>7200567817</a>
      </span>
    </li>

    <li>
      <span style={{ fontWeight: "bold" }}>For Other Enquiry:</span> 
      <a href={`tel:${call}`} style={{ marginLeft: "5px" }}>{call}</a>
    </li>

    <li>
      <span style={{ fontWeight: "bold" }}>Email:</span> 
      <a href={`mailto:${email}`} rel="noreferrer" target="_blank" style={{ marginLeft: "5px" }}>{email}</a>
    </li>

    <li>
      <span style={{ fontWeight: "bold" }}>Address:</span>
      <span style={{ marginLeft: "5px" }}>
      Pullipalayam, Morur(P.O),Sankari (T.K). Salem (D.T.), Tamil Nadu – 637 304.
      </span>
    </li>
  </ul>
</div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`}><a>{l.title}</a></Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="inner">
                                    <p className="description">Enter your email address to register to our newsletter subscription</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Your email" />
                                        <button className={`edu-btn ${dark_bg && !home_4?'btn-secondary':''} btn-medium`} type="button">Subscribe <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} Designed By <a href="#" rel="noreferrer" target="_blank">Yugan</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;