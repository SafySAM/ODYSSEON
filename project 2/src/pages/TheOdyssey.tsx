import React from 'react';

function TheOdyssey() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] bg-[url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/75"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">The Odyssey</h1>
            <p className="text-xl text-white/90 max-w-2xl font-light">
              Forging a new era in digital finance, education, and creative enterprise
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-12">
          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Odysseon Holdings Limited, we are not just building a company — we are forging a new era.
              The Odyssey is our journey toward becoming the most trusted name in digital finance, education, and creative enterprise.
              It is a path paved by ambition, driven by purpose, and guided by a belief that we are destined to reshape the world's financial and cultural landscapes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Our Progress</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In just months, Odysseon has evolved from concept to execution, with capital under management,
              trading strategies in play, and major partnerships on the horizon. From hedge fund development
              to the creation of ODEX (our decentralized trading platform), from Odysseon+ (our educational arm)
              to Odysseon Creative (our cultural expansion), we are laying the foundation for a modern conglomerate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Beyond Business</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Odysseon is more than a name. It's a symbol of trust, innovation, and the future of diversified capital.
              Our ventures are bold by design—spanning decentralized trading, financial literacy, algorithmic investing,
              and cultural infrastructure. We're not here to follow. We're here to build what hasn't been built before.
            </p>
          </section>

          <section className="bg-blue-900 text-white -mx-6 px-6 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl font-light italic leading-relaxed">
                "The collective energy this team brings is infectious. Our ambition is and will remain unmatched. The Odysseon team is fully united behind a clear mission, this team can and will achieve extraordinary heights"
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TheOdyssey;