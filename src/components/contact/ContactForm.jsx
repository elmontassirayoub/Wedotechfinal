import React, { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!showSuccess) return
    const timer = setTimeout(() => setShowSuccess(false), 5000)
    return () => clearTimeout(timer)
  }, [showSuccess])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
  }

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8 mx-auto max-w-5xl relative">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30" onClick={() => setShowSuccess(false)}>
          <div className="bg-green-600 text-white rounded-2xl shadow-xl max-w-md w-full p-6 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <CheckCircleIcon className="h-12 w-12 flex-shrink-0 text-green-200" />
            <div>
              <p className="font-semibold text-lg">Message sent successfully</p>
              <p className="text-green-100 text-sm mt-1">Thank you! We have received your form and message and will get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-2xl">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center lg:text-left">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 text-center lg:text-left">
         Send us a message below, and we'll come back to you as soon as possible.
        </p>
      </div>

      <form action="#" method="POST" className="mt-16 max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-xl sm:text-sm"
          />

          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-xl sm:text-sm"
          />

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company Name"
            className="sm:col-span-2 block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-xl sm:text-sm"
          />

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Business Email"
            className="sm:col-span-2 block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-xl sm:text-sm"
          />

          <div className="sm:col-span-2">
            <div className="relative">
              <select
                id="country"
                name="country"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full bg-transparent text-sm text-gray-400 pl-4 pr-9 rounded-3xl focus:ring-2 focus:ring-indigo-600"
              >
                <option>MA</option>
                <option>FR</option>
                <option>ES</option>
                <option>DE</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none absolute left-20 top-3 w-5 h-5 text-gray-400"
              />
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                placeholder="Phone number"
                autoComplete="tel"
                className="block w-full rounded-3xl border-0 pl-28 py-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-xl sm:text-sm"
              />
            </div>
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Your message | Let us Know how we can help"
            rows={4}
            className="sm:col-span-2 block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-xl sm:text-sm"
          ></textarea>

          <div className="sm:col-span-2 flex items-center gap-x-4">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`${
                agreed ? "bg-black" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  agreed ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
            <label className="text-sm text-gray-600">
              I agree to the&nbsp;
              <a href="#" className="font-semibold text-yellow-600">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-3xl bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
