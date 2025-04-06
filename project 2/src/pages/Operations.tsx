import React from 'react';

function Operations() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Operations</h1>
            <p className="text-xl text-white/90 max-w-2xl font-light">
              Strategic Execution Across Multiple Ventures
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Operation Calypso</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Capital Allocation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• 65% Spot-Holding</li>
                    <li>• 35% Sanctum (Staking Protocol)</li>
                    <li>• Duration: One Year Program</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Expected Returns</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• 1:1 Staking Protocols</li>
                    <li>• Monthly Accumulation Strategy</li>
                    <li>• Risk-Managed Portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Algorithmic Trading Strategy</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Odysseon Is Actively Developing Proprietary Algorithmic Trading Models As The Foundation
                Of Our Crypto Hedge Fund Operations. These Models Are Built To Extract Alpha From Volatility,
                Automate Execution With Discipline, And Scale Capital Deployment With Precision.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Model Components</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Momentum Signals</li>
                    <li>• Volatility Compression</li>
                    <li>• Mean Reversion</li>
                    <li>• Liquidity Mapping</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Risk Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Multi-Cycle Backtesting</li>
                    <li>• Stress Testing</li>
                    <li>• Dynamic Position Sizing</li>
                    <li>• Portfolio Risk Parameters</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Operations;