import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contacts = () => {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 text-[13px] leading-6 text-slate-600 sm:px-8 lg:px-0">
      <h1 className="mb-10 text-center text-2xl font-medium tracking-tight text-slate-700">
        CONTACT <span className="font-semibold">US</span>
      </h1>

      <section className="mx-auto grid max-w-4xl items-start gap-8 md:grid-cols-[280px_1fr] lg:gap-6">
        <img
          src={assets.contact_image}
          alt="Prescripto healthcare team"
          className="h-70 w-full object-cover sm:h-90 md:h-70"
        />

        <div className="space-y-7 pt-1">
          <div>
            <h2 className="mb-3 text-base font-semibold text-slate-700">OUR OFFICE</h2>
            <address className="not-italic">
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
              <p className="mt-3">Tel: (415) 555-0132</p>
              <p>Email: greatstackdev@gmail.com</p>
            </address>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold text-slate-700">CAREERS AT PRESCRIPTO</h2>
            <p className="mb-4">Learn more about our teams and job openings.</p>
            <button className="border border-slate-500 px-5 py-2 text-xs text-slate-700 transition hover:bg-slate-800 hover:text-white">
              Explore Jobs
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts