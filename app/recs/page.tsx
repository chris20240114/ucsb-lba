import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  phone: string;
  price: string;
  link: string;
}

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  description: string;
  website: string;
  directions?: string;
}

interface RestaurantCategory {
  title: string;
  restaurants: Restaurant[];
}

export default function RecommendationsPage() {
  const hotels: Hotel[] = [
    {
      id: "1",
      name: "Best Western Plus South Coast Inn",
      location: "Isla Vista, near UCSB",
      description: "Comfortable and convenient hotel with modern amenities, outdoor pool, and free Wi-Fi.",
      phone: "(805) 967-3200",
      price: "$302",
      link: "https://www.google.com/travel/search?q=Best%20Western%20Plus%20South%20Coast%20Inn%20Santa%20Barbara",
    },
    {
      id: "2",
      name: "Ramada by Wyndham Santa Barbara",
      location: "Downtown Santa Barbara",
      description: "Mid-range hotel offering spacious rooms, fitness center, and business facilities. Great location near downtown and beaches.",
      phone: "(805) 319-4314",
      price: "$304",
      link: "https://www.google.com/travel/search?q=Ramada%20by%20Wyndham%20Santa%20Barbara",
    },
    {
      id: "3",
      name: "Motel 6 in Goleta",
      location: "Goleta, near UCSB",
      description: "Budget-friendly option close to UCSB campus. Clean rooms and convenient location for attending events.",
      phone: "(805) 362-4143",
      price: "$194",
      link: "https://www.google.com/travel/search?q=Motel%206%20Goleta%20California",
    },
  ];

  const restaurantCategories: RestaurantCategory[] = [
    {
      title: "IV Fav's",
      restaurants: [
        {
          id: "1",
          name: "Zocalo",
          cuisine: "Mexican",
          location: "Isla Vista",
          description: "Authentic Mexican cuisine with vibrant atmosphere and creative cocktails",
          website: "https://www.zocaloiv.com/",
          directions: "#",
        },
        {
          id: "2",
          name: "Marias Tacos",
          cuisine: "Mexican, Tacos",
          location: "Isla Vista",
          description: "Fresh, delicious tacos and traditional Mexican street food",
          website: "https://www.mariastacosiv.com/",
          directions: "#",
        },
        {
          id: "3",
          name: "Elubias Kitchen",
          cuisine: "Latin American",
          location: "Isla Vista",
          description: "Modern Latin American cuisine with fresh ingredients and bold flavors",
          website: "https://www.elubiaskitchen.com/",
          directions: "#",
        },
      ],
    },
    {
      title: "IV Staples",
      restaurants: [
        {
          id: "4",
          name: "Free Birds",
          cuisine: "Mexican, Burritos",
          location: "Isla Vista",
          description: "Popular burrito spot with customizable options and fresh ingredients",
          website: "https://www.fbiv.mx/",
          directions: "#",
        },
        {
          id: "5",
          name: "Woodstocks",
          cuisine: "Pizza",
          location: "Isla Vista",
          description: "Casual pizza and wings joint perfect for groups and parties",
          website: "https://woodstocksiv.com/?utm_source=gmb&utm_medium=organic",
          directions: "#",
        },
        {
          id: "6",
          name: "IV Pizza Pub",
          cuisine: "Pizza, Pub Food",
          location: "Isla Vista",
          description: "Local favorite for pizza and pub atmosphere with great vibes",
          website: "https://ivpizzapub.com/",
          directions: "#",
        },
        {
          id: "7",
          name: "Deja Vu",
          cuisine: "Cafe",
          location: "Isla Vista",
          description: "Cozy cafe perfect for coffee and a casual meal",
          website: "https://order.online/store/dejavu-cafe-isla-vista-275253",
          directions: "#",
        },
        {
          id: "8",
          name: "Blenders",
          cuisine: "Smoothies, Drinks",
          location: "Isla Vista",
          description: "Fresh smoothies, acai bowls, and healthy drinks for on-the-go",
          website: "https://www.drinkblenders.com/",
          directions: "#",
        },
      ],
    },
    {
      title: "In Goleta",
      restaurants: [
        {
          id: "9",
          name: "Los Agaves",
          cuisine: "Mexican",
          location: "Goleta",
          description: "Traditional Mexican restaurant with authentic recipes and warm hospitality",
          website: "https://los-agaves.com/",
          directions: "#",
        },
        {
          id: "10",
          name: "The Habit (the original)",
          cuisine: "Burgers",
          location: "Goleta",
          description: "Classic charburgers and fresh-cut fries since 1969",
          website: "https://www.habitburger.com/",
          directions: "#",
        },
        {
          id: "11",
          name: "Tap Thai",
          cuisine: "Thai",
          location: "Goleta",
          description: "Authentic Thai cuisine with traditional recipes and fresh flavors",
          website: "https://www.tapthaicuisine.com/",
          directions: "#",
        },
        {
          id: "12",
          name: "Kins",
          cuisine: "Japanese, Bakery",
          location: "Goleta",
          description: "Japanese bakery with fresh pastries and baked goods",
          website: "https://www.kinbake.com/",
          directions: "#",
        },
        {
          id: "13",
          name: "Nikka Ramen",
          cuisine: "Japanese, Ramen",
          location: "Goleta",
          description: "Authentic ramen with rich broths and quality noodles",
          website: "https://nikkaramen.com/",
          directions: "#",
        },
      ],
    },
    {
      title: "In SB Area",
      restaurants: [
        {
          id: "14",
          name: "Santa Barbara Public Market",
          cuisine: "Food Hall",
          location: "Downtown Santa Barbara",
          description: "Community marketplace featuring local vendors and diverse cuisine options",
          website: "https://www.sbpublicmarket.com/",
          directions: "#",
        },
        {
          id: "15",
          name: "Win~Do Burger",
          cuisine: "Burgers",
          location: "Santa Barbara",
          description: "Quality burgers and American comfort food in a welcoming atmosphere",
          website: "https://www.thewin-dow.la/santa-barbara",
          directions: "#",
        },
        {
          id: "16",
          name: "Nook",
          cuisine: "Modern American",
          location: "Santa Barbara",
          description: "Upscale casual dining with locally sourced ingredients",
          website: "https://thenooksb.com/",
          directions: "#",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-slate-900">
              Local Recommendations
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Make the most of your visit to Santa Barbara and Goleta
            </p>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="border-b border-slate-200 px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">🏨</span>
              <h2 className="text-3xl font-bold text-slate-900">
                Hotel Recommendations
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      {hotel.name}
                    </h3>
                    <span className="text-blue-600 font-bold">{hotel.price}</span>
                  </div>
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
                    <span>📍</span>
                    <span>{hotel.location}</span>
                  </div>
                  <p className="mb-4 text-slate-700">{hotel.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">{hotel.phone}</p>
                    <a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Link →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Recommendations Section */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center gap-3">
              <span className="text-3xl">🍽️</span>
              <h2 className="text-3xl font-bold text-slate-900">
                Restaurant Recommendations
              </h2>
            </div>

            {/* Restaurant Categories */}
            <div className="space-y-12">
              {restaurantCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="mb-6 text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.restaurants.map((restaurant) => (
                      <div
                        key={restaurant.id}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all hover:shadow-md"
                      >
                        <h4 className="text-lg font-semibold text-slate-900">
                          {restaurant.name}
                        </h4>
                        <p className="mt-1 text-sm font-semibold text-blue-600">
                          {restaurant.cuisine}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                          <span>📍</span>
                          <span>{restaurant.location}</span>
                        </div>
                        <p className="mt-3 text-slate-700">{restaurant.description}</p>
                        <a
                          href={restaurant.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-700"
                        >
                          Learn More →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
