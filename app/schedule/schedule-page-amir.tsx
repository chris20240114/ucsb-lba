"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Event {
  time: string;
  title: string;
  location: string;
  description?: string;
  requirements?: string[];
}

interface Day {
  date: string;
  dayName: string;
  events: Event[];
}

const scheduleDays: Day[] = [
  {
    date: "Friday, April 17",
    dayName: "Friday",
    events: [
      {
        time: "9:00 PM - 12:00 AM",
        title: "Banda Night",
        location: "Location TBD",
        description: "Start the weekend off right! Get ready to dance and have a great time!",
        requirements: ["🎟 Wristbands Required for Entry", "BYOB"],
      },
    ],
  },
  {
    date: "Saturday, April 18",
    dayName: "Saturday",
    events: [
      {
        time: "12:00 PM - 5:00 PM",
        title: "Community Service and Field Day",
        location: "Goleta Beach Park",
        description: "Share some kind words and give back to our community by writing cards for kids. Enjoy good food, fun games, and quality time to get to know members from other chapters! LBA will provide Burgers & Hot Dogs, but bring any food items you want to snack on or drink! Or even grill! Most importantly BRING YOUR ENERGY!",
        requirements: ["Feel free to bring anything you want to eat, drink, or play games with"],
      },
      {
        time: "9:00 PM - 12:00 AM",
        title: "Gauchella Night Party",
        location: "6707 DP",
        requirements: ["🎟 Wristbands Required for Entry", "BYOB"],
      },
    ],
  },
  {
    date: "Sunday, April 19",
    dayName: "Sunday",
    events: [
      {
        time: "12:00 PM - 3:00 PM",
        title: "ULSA General Meeting",
        location: "TBD",
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
            Three days of fun, community service, and unforgettable memories
          </p>
        </div>

        {/* Important Notes */}
        <div className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">📌 Important Notes</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Wristbands are required for Banda Night (Friday) and Gauchella (Saturday)</li>
            <li>• Pickup Times: Friday (Local Pickup) and Saturday (At Community Service event & BBQ)</li>
            <li>• Friends can pick them up for you! Just make sure they provide all names and how many tickets purchased</li>
            <li>• T-Shirts can also be picked up during this time, and at the community service event on day 2</li>
            <li>• Everyone must sign the waiver before attending any events</li>
          </ul>
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
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-1">
                          ⏱️ {event.time}
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                          {event.title}
                        </h3>
                        <p className="text-slate-600">
                          📍 {event.location}
                        </p>
                      </div>
                      {event.description && (
                        <p className="text-slate-600 text-sm">{event.description}</p>
                      )}
                      {event.requirements && event.requirements.length > 0 && (
                        <ul className="text-sm text-slate-600 space-y-1">
                          {event.requirements.map((req, idx) => (
                            <li key={idx}>• {req}</li>
                          ))}
                        </ul>
                      )}
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
            <p className="text-slate-600 mb-3">
              Use the ParkMobile app for smart, contactless parking at UCSB.
            </p>
            <a
              href="https://www.tps.ucsb.edu/news/parkmobile-smart-contactless-parking"
              className="text-blue-600 hover:text-blue-800 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download ParkMobile →
            </a>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              What You Need to Know
            </h3>
            <p className="text-slate-600">
              Make sure to bring your wristband, sign the waiver before events, and bring your energy! Questions? Reach out to us!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
