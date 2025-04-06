import React from 'react';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            Odysseon Holdings Limited
          </h1>
          <p className="text-lg md:text-xl text-orange-500 font-heading tracking-wider mb-8">
            The Odyssey Begins
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
            Educate & Execute Financial Literacy & Competency
          </p>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-16 text-center">Our Ventures</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Odysseon',
                subtitle: 'Crypto Hedge Fund',
                description: 'High-Yield Staking, Spot-Holding, And Sophisticated Algorithmic Trading Strategies For Optimal Alpha Generation.'
              },
              {
                title: 'Odysseon+ / ODEX',
                subtitle: 'Educational & Trading Platform',
                description: 'Decentralized Capital-Trader Marketplace Bridging Knowledge Gaps In Digital Finance Through Comprehensive Education.'
              },
              {
                title: 'Odysseon Creative',
                subtitle: 'Cultural Innovation',
                description: 'Expanding Horizons Through Music, Production, And Strategic Brand Development In The Middle East.'
              }
            ].map((venture) => (
              <div key={venture.title} className="space-y-4 text-center">
                <h3 className="text-2xl font-bold text-blue-900">{venture.title}</h3>
                <p className="text-gray-900 font-medium">{venture.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{venture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-16 text-center">Our Vision</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                To Spread Knowledge About Digital Assets, Educate Others In Cryptocurrency Literacy, And Navigate The Market With Skill And Expertise.
              </p>
              <p className="text-lg text-gray-700">
                Through All Of Odysseon's Ventures, We Provide Diverse Pathways For Achieving Financial Growth, Competency, And Empowerment.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Members Of The Odyssey Are Dedicated To Creating A World Of Financial Literacy And Empowering Individuals To Make Their Capital Work For Them.
              </p>
              <p className="text-lg text-gray-700">
                At Odysseon, We Are Steadfast In Our Mission And Committed To Demonstrating That We Are An Entity Worthy Of Trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-6 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Our Legacy</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed">
              The Legacy We Strive For Is To Be Architects Of An Empire That Future Generations Study And Continue. Like The Great Empires Of Old, We Are Building Institutions And A Culture Within Odysseon That Outlasts Us.
            </p>
            <p className="text-white/90 leading-relaxed mt-6">
              Our Destiny Is To Not Only Create Wealth But To Inspire A Movement Of Educated Investors, Fearless Innovators, Creators, And Leaders Across Domains Who Are Connected Through The Odysseon Ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;