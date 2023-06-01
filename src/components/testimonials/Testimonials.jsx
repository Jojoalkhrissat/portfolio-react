import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/mohammed-alkharouf/',
      name: 'Mohammed Al-kharouf',
      role: 'Business Analyst.',
      test: 'As a business analyst and a problem solver, I think Yousef is a great collaborative partner to have. I met Yousef in some basic projects and since then he has drastically progressed in his understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/odai-alodeh-06853019a/',
      name: 'Odai Al-odeh',
      role: 'IT Department Manager',
      test: "It was a pleasure collaborating with Yousef on different projects. One of the things that I think is special about his is that he never settles, even after completing the projects he finds othis resources and strengthens his knowledge. Collaborating with his is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/saif-tahlawi-44359b200/',
      name: 'Saif Tahlawi',
      role: 'Full Stack Developer| Node | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Yousef in the same team and his communication skills are very strong. His programming skills are one of the best, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team player, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/khaleel-ankoush/',
      name: 'Khaleel Ankoush',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Yousef has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials