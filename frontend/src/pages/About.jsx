import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 text-[13px] leading-6 text-slate-600 sm:px-8 lg:px-0">
      <h1 className="mb-10 text-center text-2xl font-medium tracking-tight text-slate-700">
        ABOUT <span className="font-semibold">US</span>
      </h1>

      <section className="grid items-start gap-8 md:grid-cols-[220px_1fr] lg:gap-10">
        <img
          src={assets.about_image}
          alt="Prescripto healthcare team"
          className="h-55 w-full object-cover sm:h-67.5 md:h-55"
        />
        <div className="space-y-5">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you&apos;re booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <div>
            <h2 className="mb-3 font-semibold text-slate-700">Our Vision</h2>
            <p>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-lg font-medium tracking-tight text-slate-700">
          WHY <span className="font-semibold">CHOOSE US</span>
        </h2>
        <div className="grid border border-slate-300 md:grid-cols-3">
          <article className="min-h-36 border-b border-slate-300 p-8 transition hover:bg-slate-50 md:border-b-0 md:border-r">
            <h3 className="mb-4 text-xs font-semibold text-slate-700">EFFICIENCY:</h3>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </article>
          <article className="min-h-36 border-b border-slate-300 p-8 transition hover:bg-slate-50 md:border-b-0 md:border-r">
            <h3 className="mb-4 text-xs font-semibold text-slate-700">CONVENIENCE:</h3>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </article>
          <article className="min-h-36 p-8 transition hover:bg-slate-50">
            <h3 className="mb-4 text-xs font-semibold text-slate-700">PERSONALIZATION:</h3>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default About