import React from 'react'
import aboutImg from '../images/about2.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h2>explore the difference</h2>
          <p>
            Welcome to BreezeGetaways, Your Gateway to Unforgettable Adventures!
          </p>
          <p>
            At BreezeGetaways, we believe that travel is not just about reaching
            a destination; it's about the experiences, the memories, and the
            moments that create a lifetime of stories. Established with a
            passion for exploration, BreezeGetaways is your trusted partner in
            crafting extraordinary journeys that go beyond the ordinary.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
