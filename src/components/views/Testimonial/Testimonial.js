import React from 'react'
import per1 from "../../../assets/img/person-1.jpg";
import per2 from "../../../assets/img/person-2.jpg";
import per3 from "../../../assets/img/person-3.png";
import per4 from "../../../assets/img/person-4.jpg";


const Testimonial = () => {

  return (
    <div>
      <section className="bar background-pentagon no-mb text-md-center">
        <div className="container">
          <div className="heading text-center">
            <h2>Testimonials</h2>
          </div>
          <p className="lead">
            We have worked with many clients and we always like to hear they come out
            from the cooperation happy and satisfied. Have a look what our clients
            said about us.
          </p>
          {/* Carousel Start*/}
          <ul className="owl-carousel testimonials list-unstyled equal-height">
            <li className="item">
              <div className="testimonial d-flex flex-wrap">
                <div className="text">
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he found
                    himself transformed in his bed into a horrible vermin. He lay on
                    his armour-like back, and if he lifted his head a little he could
                    see his brown belly, slightly domed and divided by arches into
                    stiff sections.
                  </p>
                </div>
                <div className="bottom d-flex align-items-center justify-content-between align-self-end">
                  <div className="icon">
                    <i className="fa fa-quote-left" />
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="title">
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                    <div className="avatar">
                      <img alt src={per1} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonial d-flex flex-wrap">
                <div className="text">
                  <p>
                    The bedding was hardly able to cover it and seemed ready to slide
                    off any moment. His many legs, pitifully thin compared with the
                    size of the rest of him, waved about helplessly as he looked.
                    Whas happened to me?  he thought. It wasn a dream.
                  </p>
                </div>
                <div className="bottom d-flex align-items-center justify-content-between align-self-end">
                  <div className="icon">
                    <i className="fa fa-quote-left" />
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="title">
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                    <div className="avatar">
                      <img alt src={per2} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonial d-flex flex-wrap">
                <div className="text">
                  <p>
                    His room, a proper human room although a little too small, lay
                    peacefully between its four familiar walls.
                  </p>
                  <p>
                    A collection of textile samples lay spread out on the table -
                    Samsa was a travelling salesman - and above it there hung a
                    picture that he had recently cut out of an illustrated magazine
                    and housed in a nice, gilded frame.
                  </p>
                </div>
                <div className="bottom d-flex align-items-center justify-content-between align-self-end">
                  <div className="icon">
                    <i className="fa fa-quote-left" />
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="title">
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                    <div className="avatar">
                      <img alt src={per3} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonial d-flex flex-wrap">
                <div className="text">
                  <p>
                    It showed a lady fitted out with a fur hat and fur boa who sat
                    upright, raising a heavy fur muff that covered the whole of her
                    lower arm towards the viewer. Gregor then turned to look out the
                    window at the dull weather. Drops of rain could be heard hitting
                    the pane, which made him feel quite sad.
                  </p>
                </div>
                <div className="bottom d-flex align-items-center justify-content-between align-self-end">
                  <div className="icon">
                    <i className="fa fa-quote-left" />
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="title">
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                    <div className="avatar">
                      <img alt src={per4} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="testimonial d-flex flex-wrap">
                <div className="text">
                  <p>
                    It showed a lady fitted out with a fur hat and fur boa who sat
                    upright, raising a heavy fur muff that covered the whole of her
                    lower arm towards the viewer. Gregor then turned to look out the
                    window at the dull weather. Drops of rain could be heard hitting
                    the pane, which made him feel quite sad. Gregor then turned to
                    look out the window at the dull weather. Drops of rain could be
                    heard hitting the pane, which made him feel quite sad.
                  </p>
                </div>
                <div className="bottom d-flex align-items-center justify-content-between align-self-end">
                  <div className="icon">
                    <i className="fa fa-quote-left" />
                  </div>
                  <div className="testimonial-info d-flex">
                    <div className="title">
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                    <div className="avatar">
                      <img alt="true" src={per1} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* Carousel End*/}
        </div>
      </section>

    </div>
  )
}


export default Testimonial;