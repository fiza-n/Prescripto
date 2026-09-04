import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Appointment = () => {
  const { doctorId } = useParams()
  const { doctors } = useAppContext()
  const doctor = doctors.find((item) => item._id === doctorId) || doctors[0]
  const [selectedDate, setSelectedDate] = useState(0)
  const [selectedTime, setSelectedTime] = useState('10:00 am')

  const dates = [
    ['MON', '10'],
    ['TUE', '11'],
    ['WED', '12'],
    ['THU', '13'],
    ['FRI', '14'],
    ['SAT', '15'],
    ['SUN', '16'],
  ]
  const times = ['10:00 am', '8:30 am', '9:00 am', '12:00 pm', '1:00 pm', '3:00 pm', '4:30 pm']

  useEffect(() => {
    setSelectedDate(0)
    setSelectedTime('10:00 am')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [doctorId])

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 sm:px-8 lg:px-10">
      <section className="grid gap-6 md:grid-cols-[230px_1fr]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-64 w-full rounded-md bg-indigo-100 object-contain md:h-72"
        />
        <div className="rounded-md border border-slate-300 p-6">
          <div className="mb-3 flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-slate-800">{doctor.name}</h1>
            <span className="rounded-full bg-blue-500 px-1.5 py-0.5 text-xs text-white">✓</span>
          </div>
          <p className="mb-5 text-slate-500">{doctor.degree} - {doctor.speciality} <span className="ml-1 rounded border border-slate-300 px-2 py-0.5 text-xs">{doctor.experience}</span></p>
          <h2 className="mb-1 font-semibold text-slate-700">About</h2>
          <p className="max-w-3xl leading-6">{doctor.about}</p>
          <p className="mt-3 font-medium text-slate-700">Appointment fee: <span className="font-semibold">${doctor.fees}</span></p>
        </div>
      </section>

      <section className="mt-8 md:ml-64">
        <h2 className="mb-3 text-lg font-medium text-slate-700">Booking slots</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map(([day, date], index) => (
            <button
              key={day}
              onClick={() => setSelectedDate(index)}
              className={`flex h-14 min-w-12 flex-col items-center justify-center rounded-full border px-2 text-xs transition ${selectedDate === index ? 'border-blue-500 bg-blue-500 text-white' : 'border-slate-200 bg-white text-slate-500 hover:border-blue-300'}`}
            >
              <span>{day}</span>
              <span>{date}</span>
            </button>
          ))}
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs transition ${selectedTime === time ? 'border-blue-500 bg-blue-500 text-white' : 'border-slate-200 text-slate-500 hover:border-blue-300'}`}
            >
              {time}
            </button>
          ))}
        </div>
        <button className="mt-4 rounded-full bg-blue-500 px-10 py-2.5 text-xs text-white transition hover:bg-blue-600">
          Book an appointment
        </button>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-lg font-medium text-slate-700">Related Doctors</h2>
        <p className="mt-1 text-center text-xs text-slate-500">Simply browse through our extensive list of trusted doctors.</p>
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {doctors.filter((item) => item._id !== doctor._id).slice(0, 5).map((item) => (
            <Link
              key={item._id}
              to={`/appointments/${item._id}`}
              className="overflow-hidden rounded-md border border-slate-200 bg-white text-left transition hover:-translate-y-1 hover:shadow-md"
            >
              <img src={item.image} alt={item.name} className="h-32 w-full bg-indigo-50 object-contain" />
              <div className="p-2">
                <p className="text-xs text-green-500">● Available</p>
                <p className="truncate text-xs font-semibold text-slate-700">{item.name}</p>
                <p className="truncate text-xs text-slate-500">{item.speciality}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Appointment