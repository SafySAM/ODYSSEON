import React from 'react';

function AboutUs() {
  const team = [
    {
      name: 'Mustafa Amer Samhoun',
      role: 'Co-Founder',
      positions: ['Chief Executive Officer', 'Chief Operating Officer', 'Chief Marketing Officer', 'Head Of Investor Relations', 'Head Of Fundraising']
    },
    {
      name: 'Rashad Ziad Fattouh',
      role: 'Co-Founder',
      positions: ['Chief Executive Officer', 'Chief Financial Officer', 'Chief Investment Officer', 'Head Of Portfolio Management', 'Head Of Treasury']
    },
    {
      name: 'Ashton Stewart',
      role: 'Creative Director',
      positions: ['Co-Head Of Odysseon Creative', 'Fundraising & Strategic Growth']
    },
    {
      name: 'Joe Assad',
      role: 'Technical Lead',
      positions: ['Head Of Python', 'Machine Learning Developer', 'Head Of Analytics']
    },
    {
      name: 'Ghaith Al Ramahi',
      role: 'Strategy Lead',
      positions: ['Head Of Trading Logic & Strategy']
    },
    {
      name: 'Mateus Oliveria',
      role: 'Development Lead',
      positions: ['Web3 Development', 'AI Integration']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl font-light">
              Members Of The Odyssey
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-2 font-heading">{member.name}</h2>
              <p className="text-gray-900 font-medium mb-4">{member.role}</p>
              <ul className="space-y-2 text-gray-700">
                {member.positions.map((position) => (
                  <li key={position}>• {position}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Our Location</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700">
              Based In Abu Dhabi, United Arab Emirates, We Operate At The Intersection Of Traditional Finance
              And Digital Innovation, Leveraging The Region's Position As A Global Financial Hub.
            </p>
            <div className="mt-6 text-gray-700">
              <p>Contact Us:</p>
              <p className="mt-2">Email: odysseonfhs@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;