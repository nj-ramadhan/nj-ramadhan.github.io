import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <script>window.staDarkLightChooser = true;</script>
      <script>const isSiteThemeDark = false;</script>
      <script src="/js/load-theme.js"></script>
      <aside className="search-results" id="search">
        <div className="container">
          <section className="search-header">
            <div className="row no-gutters justify-content-between mb-3">
              <div className="col-6">
                <h1>Search</h1>
              </div>
              <div className="col-6 col-search-close">
                <a className="js-search" href="#"><i className="fas fa-times-circle text-muted" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="search-box">
              <input name="q" id="search-query" placeholder="Search..." autoCapitalize="off" autoComplete="off"
                autoCorrect="off" spellCheck="false" type="search" className="form-control" />
            </div>
          </section>
          <section className="section-search-results">
            <div id="search-hits">
            </div>
          </section>
        </div>
      </aside>

      <nav className="navbar navbar-expand-lg navbar-light compensate-for-scrollbar" id="navbar-main">
        <div className="container">
          <div className="d-none d-lg-inline-flex">
            <a className="navbar-brand" href="/">Nur Jamiludin Ramadhan</a>
          </div>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-content"
            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="fas fa-bars"></i></span>
          </button>
          <div className="navbar-brand-mobile-wrapper d-inline-flex d-lg-none">
            <a className="navbar-brand" href="/">Nur Jamiludin Ramadhan</a>
          </div>
          <div className="navbar-collapse main-menu-item collapse justify-content-start" id="navbar-content">
            <ul className="navbar-nav d-md-inline-flex">
              <li className="nav-item">
                <a className="nav-link " href="/#about" data-target="#about"><span>Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#publications" data-target="#publications"><span>Publications</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#learning_materials" data-target="#learning_materials"><span>Learning Materials</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#contact" data-target="#contact"><span>Contact</span></a>
              </li>
            </ul>
          </div>

          <ul className="nav-icons navbar-nav flex-row ml-auto d-flex pl-md-2">
            <li className="nav-item">
              <a className="nav-link js-search" href="#" aria-label="Search"><i className="fas fa-search"
                  aria-hidden="true"></i></a>
            </li>
            <li className="nav-item dropdown theme-dropdown">
              <a href="#" className="nav-link js-theme-selector" data-toggle="dropdown" aria-haspopup="true">
                <i className="fas fa-palette" aria-hidden="true"></i>
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item js-set-theme-light">
                  <span>Light</span>
                </a>
                <a href="#" className="dropdown-item js-set-theme-dark">
                  <span>Dark</span>
                </a>
                <a href="#" className="dropdown-item js-set-theme-auto">
                  <span>Automatic</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <span className="js-widget-page d-none"></span>

      <section id="about" className="home-section wg-about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div id="profile">
                <Image className="avatar avatar-circle" src="images/author/nj-ramadhan/avatar.jpg" alt="Nur Jamiludin Ramadhan" width={200} height={200} />
                <div className="portrait-title">
                  <h2>Nur Jamiludin Ramadhan</h2>
                  <h3>Lecturer and Researcher in Manufacturing Automation and Mechatronics Engineering Department</h3>
                  <h3>
                    <a href="https://www.polman-bandung.ac.id" target="_blank" rel="noopener">
                      <span>Bandung Polytechnic for Manufacturing</span>
                    </a>
                  </h3>
                </div>

                <ul className="network-icon" aria-hidden="true">
                  <li>
                    <a href="/#contact">
                      <i className="fas fa-envelope big-icon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/nj-ramadhan/" target="_blank" rel="noopener">
                      <i className="fab fa-linkedin big-icon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/nj-ramadhan" target="_blank" rel="noopener">
                      <i className="fab fa-github big-icon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://orcid.org/0000-0002-0909-0503" target="_blank" rel="noopener">
                      <i className="fab fa-orcid big-icon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://scholar.google.com/citations?user=d6-6t88AAAAJ&hl=en" target="_blank"
                      rel="noopener">
                      <i className="ai ai-google-scholar big-icon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.researchgate.net/profile/Nur-Ramadhan-9" target="_blank" rel="noopener">
                      <i className="fab fa-researchgate big-icon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.scopus.com/authid/detail.uri?authorId=57713257000" target="_blank" rel="noopener">
                      <i className="fas fa-graduation-cap big-icon"></i>
                    </a>
                  </li>
                  
                </ul>

              </div>
            </div>

            <div className="col-12 col-lg-8">
              <h1>Biography</h1>
              <p>I am a Lecturer and Researcher in Manufacturing Automation and Mechatronics Engineering Department at Bandung Polytechnic for Manufacturing. 
                My research focus on Mechatronics and Robotics system implementation for Flexible and Intelligent Manufacturing Environment. 
                Previously, I was a lead researcher at parallel robot implementation as a machine tools mechanism. 
                I am currently working on the partial link actuator control system optimization for parallel mechanism system machine tools.
              </p>

              <div className="row">
                <div className="col-md-5">
                  <h3>Interests</h3>
                  <ul className="ul-interests">
                    <li>Robotics</li>
                    <li>Parallel Robot</li>
                    <li>Mechatronics</li>
                    <li>Flexible Manufacturing</li>
                    <li>Intelligent Manufacturing</li>
                  </ul>
                </div>

                <div className="col-md-7">
                  <h3>Education</h3>
                  <ul className="ul-edu fa-ul">
                    <li>
                      <i className="fa-li fas fa-graduation-cap"></i>
                      <div className="description">
                        <p className="course">Master Degree in Mechanical Engineering, research focus on Mechatronics, 2019</p>
                        <p className="institution">Bandung Institute of Technology</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-li fas fa-graduation-cap"></i>
                      <div className="description">
                        <p className="course">Bachelor Degree in Manufacturing Automation and Mechatronics Engineering, 2016</p>
                        <p className="institution">Bandung Polytechnic for Manufacturing</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-li fas fa-graduation-cap"></i>
                      <div className="description">
                        <p className="course">Diploma Degree in Manufacturing Automation and Mechatronics Engineering, 2015</p>
                        <p className="institution">Bandung Polytechnic for Manufacturing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="home-section wg-pages">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-4 section-heading">
              <h1>Recent Publications</h1>
            </div>
            <div className="col-12 col-lg-8">
              <div className="alert alert-note">
                <div>
                  Quickly discover relevant content by <a href="https://nj-ramadhan.github.io/publication/">filtering publications</a>.
                </div>
              </div>

              <div className="media stream-item">
                <div className="media-body">
                  <h3 className="article-title mb-0 mt-0">
                    <a href="/publication/pat-rec/">Pattern recognition based movement control and gripping forces control system on arm robot model using LabVIEW</a>
                  </h3>
                  <a href="/publication/pat-rec/" className="summary-link">
                    <div className="article-style">
                      Most arm robot has an inefficient operating time because it requires operator to input destination coordinates. Besides, main problem of arm robot is objects vulnerability when it is manipulated by the robot. 
                      This research goals is to develop an arm robot control system which has ability to automatically detect object using image processing in order to reduce operating time. 
                      It is also able to control gripping force for eliminating damage to objects caused by robot gripper …
                    </div>
                  </a>
                  <div className="stream-meta article-metadata">
                    <div>
                      <span>Nur Jamiludin Ramadhan</span>, <span>Noval Lilansa</span>, <span>Afaf Fadhil</span>, <span>Nguyen Dinh Hoe</span>
                    </div>
                  </div>
                  <div className="btn-links">
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm"
                      href="https://www.researchgate.net/publication/362366387_Pattern_recognition_based_movement_control_and_gripping_forces_control_system_on_arm_robot_model_using_LabVIEW" target="_blank" rel="noopener">
                      PDF
                    </a>
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href="https://github.com/nj-ramadhan"
                      target="_blank" rel="noopener">
                      Code
                    </a>
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm"
                      href="https://www.researchgate.net/publication/362366387_Pattern_recognition_based_movement_control_and_gripping_forces_control_system_on_arm_robot_model_using_LabVIEW"
                      target="_blank" rel="noopener">
                      Poster
                    </a>
                  </div>
                </div>
              </div>

              <div className="media stream-item">
                <div className="media-body">
                  <h3 className="article-title mb-0 mt-0">
                    <a href="/publication/pms-cnc/" >Five-Axis PMS CNC Partial Link Control System based on Modified Inverse Kinematic of 6-DOF UPS Parallel Manipulator</a>
                  </h3>             
                  <a href="/publication/pms-cnc/" className="summary-link">
                    <div className="article-style">
                      Parallel manipulator structures have kinematic configurations with closed chain types, meaning that each arm is connected to the origin. 
                      Parallel structures provide better performance than serial structures in terms of accuracy, acceleration at high speed, and stiffness. 
                      These characteristics enable the implementation of a parallel manipulator as a new concept for the motion mechanism of five-axis CNC milling machines.  …
                    </div>
                  </a>            
                  <div className="stream-meta article-metadata">
                    <div>
                      <span>Nur Jamiludin Ramadhan</span>, <span>Indrawanto</span>, <span>Nguyen Dinh Hoe</span>
                    </div>
                  </div>
                  <div className="btn-links">
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm"
                      href="https://www.researchgate.net/publication/367212566_Five-Axis_PMS_CNC_Partial_Link_Control_System_based_on_Modified_Inverse_Kinematic_of_6-DOF_UPS_Parallel_Manipulator" target="_blank" rel="noopener">
                      PDF
                    </a>
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href="https://github.com/nj-ramadhan"
                      target="_blank" rel="noopener">
                      Code
                    </a>
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm"
                      href="https://www.researchgate.net/publication/367212566_Five-Axis_PMS_CNC_Partial_Link_Control_System_based_on_Modified_Inverse_Kinematic_of_6-DOF_UPS_Parallel_Manipulator"
                      target="_blank" rel="noopener">
                      Poster
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="media stream-item">
                <div className="media-body">
                  <h3 className="article-title mb-0 mt-0">
                    <a href="/publication/mul-rob/" >Implementation Consensus Algorithm and Leader-Follower of Multi-Robot System Formation</a>
                  </h3>             
                  <a href="/publication/mul-rob/" className="summary-link">
                    <div className="article-style">
                      Robot technology has recently been applied to many applications to help human activities. 
                      Mobile Robot is one of the most flexible robot technology. 
                      This research uses a mobile robot designed using an omnidirectional wheel for the movement mechanism. 
                      Coordination and control of multi-robots can be assigned to perform any task from a different kind of field. 
                      Therefore, this paper aims to develop a multi-robot system to form a formation to do the task. 
                      The multi-robot system consists of three units Mobile Robot. …
                    </div>
                  </a>            
                  <div className="stream-meta article-metadata">
                    <div>
                      <span>Noval Lilansa</span>, <span>Muhammad Nursyam Rizal</span>, <span>Pipit Anggraeni</span>, <span>Nur Jamiludin Ramadhan</span>
                    </div>
                  </div>
                  <div className="btn-links">
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm"
                      href="https://www.researchgate.net/publication/367212566_Five-Axis_PMS_CNC_Partial_Link_Control_System_based_on_Modified_Inverse_Kinematic_of_6-DOF_UPS_Parallel_Manipulatorhttps://www.researchgate.net/publication/367420568_Implementation_consensus_algorithm_and_leader-follower_of_multi-robot_system_formation" target="_blank" rel="noopener">
                      PDF
                    </a>
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href="https://github.com/nj-ramadhan"
                      target="_blank" rel="noopener">
                      Code
                    </a>
                    <a className="btn btn-outline-primary my-1 mr-1 btn-sm"
                      href="https://www.researchgate.net/publication/367420568_Implementation_consensus_algorithm_and_leader-follower_of_multi-robot_system_formation"
                      target="_blank" rel="noopener">
                      Poster
                    </a>
                  </div>
                </div>
              </div>
              <div className="see-all">
                <a href="/publication/">
                  See all publications
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learning_materials" className="home-section wg-pages   ">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-4 section-heading">
              <h1>Learning Materials</h1>
            </div>
            <div className="col-12 col-lg-8">
              <div className="alert alert-note">
                <div>
                  Quickly discover relevant content by <a href="https://nj-ramadhan.github.io/learning/">filtering learning materials</a>.
                </div>
              </div>
              <div className="media stream-item">
                <div className="media-body">
                  <h3 className="article-title mb-0 mt-0">
                    <a href="https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda">Engineering Mechanics - Statics</a>
                  </h3>
                  <a href="https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda" className="summary-link">
                    <div className="article-style">
                      This course discusses units and quantities of rigid bodies. 
                      Effects of Forces, Moments and Couples especially the application of Newton's Laws 1 and 3 on simple machines, 
                      Force Addition, Types of Supports, Equilibrium Analysis and Degrees of Freedom of Objects. 
                      The influence of forces on lines, planes and space as well as force and moment diagrams for concentrated and distributed forces 
                      are also studied as knowledge of the center of mass of an object
                    </div>
                  </a> 
                </div>
              </div>
              <div className="media stream-item">
                <div className="media-body">
                  <h3 className="article-title mb-0 mt-0">
                    <a href="https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda">Production Planning and Controlling</a>
                  </h3>
                  <a href="https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda" className="summary-link">
                    <div className="article-style">
                      This course is filled with theorem about planning and controlling and practical . practice of implementing project work including project work plan activities, 
                      making a list of project work activities, implementing SOPs, executing flowchart orders, using and inventorying laboratory equipment.
                    </div>
                  </a>
                </div>
              </div>
              <div className="media stream-item">
                <div className="media-body">
                  <h3 className="article-title mb-0 mt-0">
                    <a href="https://sites.google.com/ae.polman-bandung.ac.id/mekanikateknikstatika/beranda">Production Engineering</a>
                  </h3>
                  Manufacturing & Production Engineering is the process of turning raw materials into new products. It combines research, 
                  design and development to bring an analytical approach to creating new things effectively, efficiently and economically. 
                  The subject area overlaps with other engineering fields, such as chemical engineering and material engineering. 
                  It also involves lots of management and organisation.
                </div>
              </div>
              <div className="see-all">
                <a href="/learning/">
                  See all learning materials
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-3">
        <form name="contact" method="POST" action="https://formspree.io/f/xeqwawgn">
          <div className="form-group form-inline">
            <label className="sr-only" htmlFor="inputName">Name</label>
            <input type="text" name="name" className="form-control w-100" id="inputName" placeholder="Name" required />
          </div>
          <div className="form-group form-inline">
            <label className="sr-only" htmlFor="inputEmail">Email</label>
            <input type="email" name="email" className="form-control w-100" id="inputEmail" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="inputMessage">Message</label>
            <textarea name="message" className="form-control" id="inputMessage" rows={5} placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-outline-primary px-3 py-2">Send</button>
        </form>
      </div>
      <ul className="fa-ul">
        <li>
          <i className="fa-li fas fa-map-marker fa-2x" aria-hidden="true"></i>
          <span id="person-address">Manufacturing Automation and Mechatronics Engineering Department, Bandung
            Polytechnic for Manufacturing, Dago, Bandung, Indonesia, 40135</span>
        </li>
      </ul>

      <div className="d-none">
        <input id="map-provider" value="2" />
        <input id="map-lat" value="-6.87740" />
        <input id="map-lng" value="107.62058" />
        <input id="map-dir" value="Manufacturing Automation and Mechatronics Engineering Department, Bandung Polytechnic for Manufacturing, Dago, Bandung, Indonesia, 40135" />
        <input id="map-zoom" value="18" />
        <input id="map-api-key" value="" />
      </div>
      <div id="map"></div>

      <script id="search-hit-fuse-template" type="text/x-template" dangerouslySetInnerHTML={{ __html: `
          <div class="search-hit" id="summary-{{key}}">
            <div class="search-hit-content">
              <div class="search-hit-name">
                <a href="{{relpermalink}}">{{title}}</a>
                <div class="article-metadata search-hit-type">{{type}}</div>
                <p class="search-hit-description">{{snippet}}</p>
              </div>
            </div>
          </div>
        ` }} />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js"
        integrity="sha256-lqvxZrPLtfffUl2G/e7szqSvPBILGbwmsGE1MKlOi0Q=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"
        integrity="sha256-CBrpuqrMhXwcLLUd5tvQ4euBHCdh7wGlDfNz8vbu/iI=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
        integrity="sha256-yt2kYMy0w8AbtF89WXb2P1rfjcP/HTHLT7097U8Y5b8=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/instant.page/5.1.0/instantpage.min.js"
        integrity="sha512-1+qUtKoh9XZW7j+6LhRMAyOrgSQKenQ4mluTR+cvxXjP1Z54RxZuzstR/H9kgPXQsVB8IW7DMDFUJpzLjvhGSQ=="
        crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js"
        integrity="sha512-7t8APmYpzEsZP7CYoA7RfMPV9Bb+PJHa9x2WiUnDXZx3XHveuyWUtvNOexhkierl5flZ3tr92dP1mMS+SGlD+A=="
        crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/languages/r.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js"
        integrity="sha256-EErZamuLefUnbMBQbsEqu1USa+btR2oIlCpBJbyD4/g=" crossOrigin="anonymous"></script>
      <script dangerouslySetInnerHTML={{ __html: `const code_highlighting = true;` }} />
      <script dangerouslySetInnerHTML={{ __html: `
        const search_config = { "indexURI": "/index.json", "minLength": 1, "threshold": 0.3 };
        const i18n = { "no_results": "No results found", "placeholder": "Search...", "results": "results found" };
        const content_type = {
          'post': "Posts",
          'project': "Projects",
          'publication': "Publications",
          'talk': "Talks",
          'slides': "Slides"
        };
      ` }} />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.2.1/fuse.min.js"
        integrity="sha256-VzgmKYmhsGNNN4Ph1kMW+BjoYJM2jV5i4IlFoeZA9XI=" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.min.js"
        integrity="sha256-4HLtjeVgH0eIB3aZ9mLYF6E8oU5chNdjU6p6rrXpl9U=" crossOrigin="anonymous"></script>
      <script src="/js/academic.min.3b2b658c61ebd725bd5fc606c89fe44c.js"></script>
      <div className="container">
        <footer className="site-footer">
          <p className="powered-by">
            ©2023, NJRamadhan 
              <span className="float-right" aria-hidden="true">
              <a href="#" className="back-to-top">
                <span className="button_icon">
                  <i className="fas fa-chevron-up fa-2x"></i>
                </span>
              </a>
            </span>
          </p>
        </footer>
      </div>
      <div id="modal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cite</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <pre><code className="tex hljs"></code></pre>
            </div>
            <div className="modal-footer">
              <a className="btn btn-outline-primary my-1 js-copy-cite" href="#" target="_blank">
                <i className="fas fa-copy"></i> Copy
              </a>
              <a className="btn btn-outline-primary my-1 js-download-cite" href="#" target="_blank">
                <i className="fas fa-download"></i> Download
              </a>
              <div id="modal-error"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
