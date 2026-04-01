"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Event {
  time: string;
  title: string;
  location: string;
}

interface Day {
  date: string;
  dayName: string;
  events: Event[];
}

const scheduleDays: Day[] = [
  {
    date: "Friday, April 18",
    dayName: "Friday",
    events: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "Registration & Breakfast",
        location: "Main Hall",
      },
      {
        time: "10:00 AM - 11:30 AM",
        title: "Opening Keynote",
        location: "Auditorium",
      },
      {
        time: "11:45 AM - 1:00 PM",
        title: "Workshop: Entrepreneurship 101",
        location: "Room A",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Lunch",
        location: "Dining Hall",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Workshop: Financial Planning",
        location: "Room B",
      },
      {
        time: "3:45 PM - 5:00 PM",
        title: "Networking Reception",
        location: "Main Hall",
      },
    ],
  },
  {
    date: "Saturday, April 19",
    dayName: "Saturday",
    events: [
      {
        time: "8:00 AM - 9:00 AM",
        title: "Breakfast & Coffee",
        location: "Dining Hall",
      },
      {
        time: "9:00 AM - 10:30 AM",
        title: "Panel Discussion: Leadership",
        location: "Auditorium",
      },
      {
        time: "10:45 AM - 12:00 PM",
        title: "Workshop: Marketing Strategy",
        location: "Room A",
      },
      {
        time: "12:00 PM - 1:30 PM",
        title: "Lunch",
        location: "Dining Hall",
      },
      {
        time: "1:30 PM - 3:00 PM",
        title: "Workshop: Digital Transformation",
        location: "Room B",
      },
      {
        time: "3:15 PM - 5:00 PM",
        title: "Networking Session",
        location: "Main Hall",
      },
      {
        time: "6:00 PM - 9:00 PM",
        title: "Gala Dinner",
        location: "Grand Ballroom",
      },
    ],
  },
  {
    date: "Sunday, April 20",
    dayName: "Sunday",
    events: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "Breakfast",
        location: "Dining Hall",
      },
      {
        time: "10:00 AM - 11:30 AM",
        title: "Closing Panel: Future Trends",
        location: "Auditorium",
      },
      {
        time: "11:45 AM - 12:30 PM",
        title: "Closing Remarks",
        location: "Auditorium",
      },
    ],
  },
];

export default function Schedule() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-12">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Event Schedule
          </h1>
          <p className="text-lg text-slate-600">
            Three days of workshops, networking, and inspiration
          </p>
        </div>

        {/* Schedule Days */}
        <div className="space-y-8">
          {scheduleDays.map((day) => (
            <div key={day.date}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {day.date}
              </h2>
              <div className="space-y-3">
                {day.events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-600 mb-1">
                          {event.time}
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 whitespace-nowrap">
                        📍 {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Information Sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Parking Information
            </h3>
            <p className="text-slate-600">
              Complimentary parking is available in Lot A and Lot B. Please
              display your parking pass on your vehicle. For accessibility
              parking, please check in at the registration desk.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Additional Information
            </h3>
            <p className="text-slate-600">
              All sessions will be held at the main conference venue. Meals and
              refreshments are provided for all registered attendees. Please
              bring your ID and event pass to all sessions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
