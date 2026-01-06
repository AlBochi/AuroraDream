import React, { useState } from 'react';
import { MapPin, Search, Navigation, CheckCircle, Truck, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

const RealOttawaMap = () => {
  const [selectedArea, setSelectedArea] = useState('ottawa');
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState({ x: 50, y: 50 });

  const serviceAreas = {
    ottawa: {
      name: 'Ottawa',
      color: '#10B981', // green-500
      neighborhoods: [
        { name: 'Kanata', x: 30, y: 40 },
        { name: 'Barrhaven', x: 25, y: 60 },
        { name: 'Nepean', x: 40, y: 50 },
        { name: 'Orleans', x: 65, y: 45 },
        { name: 'Centretown', x: 48, y: 55 },
        { name: 'Westboro', x: 42, y: 48 },
        { name: 'The Glebe', x: 46, y: 56 },
        { name: 'Hintonburg', x: 43, y: 52 },
        { name: 'Stittsville', x: 28, y: 38 },
        { name: 'Vanier', x: 52, y: 52 },
        { name: 'Beacon Hill', x: 55, y: 40 },
        { name: 'Alta Vista', x: 50, y: 58 }
      ],
      deliveryTime: '2-4 hours',
      coverage: '98%'
    },
    gatineau: {
      name: 'Gatineau',
      color: '#3B82F6', // blue-500
      neighborhoods: [
        { name: 'Gatineau (Hull)', x: 60, y: 70 },
        { name: 'Aylmer', x: 45, y: 75 },
        { name: 'Buckingham', x: 70, y: 65 },
        { name: 'Masson-Angers', x: 75, y: 60 },
        { name: 'Plateau', x: 58, y: 68 },
        { name: 'Touraine', x: 62, y: 72 }
      ],
      deliveryTime: '3-5 hours',
      coverage: '100%'
    }
  };

  const currentArea = serviceAreas[selectedArea];
  
  const filteredNeighborhoods = searchQuery
    ? currentArea.neighborhoods.filter(n => 
        n.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : currentArea.neighborhoods;

  // Ottawa River coordinates
  const ottawaRiver = [
    { x: 20, y: 75 }, { x: 30, y: 70 }, { x: 40, y: 65 }, 
    { x: 50, y: 60 }, { x: 60, y: 65 }, { x: 70, y: 70 }, { x: 80, y: 75 }
  ];

  // Highway 417 coordinates
  const highway417 = [
    { x: 10, y: 45 }, { x: 30, y: 45 }, { x: 50, y: 45 }, { x: 70, y: 45 }, { x: 90, y: 45 }
  ];

  // Highway 174 coordinates
  const highway174 = [
    { x: 50, y: 45 }, { x: 60, y: 40 }, { x: 70, y: 35 }, { x: 80, y: 30 }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 mb-6">
          <MapPin className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">All of Ottawa & Gatineau</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Free premium mattress delivery to <span className="text-green-400 font-bold">150+ neighborhoods</span> across the National Capital Region
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search your neighborhood (e.g., 'Kanata', 'Barrhaven')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-10">
        
        {/* Area Selector */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-full">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
              <Navigation className="w-5 h-5 mr-2 text-green-500" />
              Select Your Area
            </h3>
            
            <div className="space-y-3">
              {Object.entries(serviceAreas).map(([key, area]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedArea(key);
                    setSearchQuery('');
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between group ${
                    selectedArea === key
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg scale-[1.02]'
                      : 'bg-gray-900/60 text-gray-300 hover:bg-gray-800/80 hover:text-white'
                  }`}
                  style={selectedArea === key ? { background: `linear-gradient(to right, ${area.color}, #3B82F6)` } : {}}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${selectedArea === key ? 'bg-white' : ''}`}
                         style={{ backgroundColor: selectedArea === key ? 'white' : area.color }} />
                    <div>
                      <div className="font-semibold">{area.name}</div>
                      <div className="text-sm opacity-80">{area.neighborhoods.length} neighborhoods shown</div>
                    </div>
                  </div>
                  <CheckCircle className={`w-5 h-5 ${selectedArea === key ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-900/40 rounded-lg">
                  <div className="text-2xl font-bold text-green-500">150+</div>
                  <div className="text-sm text-gray-400">Neighborhoods</div>
                </div>
                <div className="text-center p-3 bg-gray-900/40 rounded-lg">
                  <Truck className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-400">Free Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REAL MAP VISUALIZATION */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 h-full">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-0">
                {currentArea.name} Service Area Map
              </h3>
              
              {/* Map Controls */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setZoom(z => Math.min(z + 0.2, 2))}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  disabled={zoom >= 2}
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </button>
                <button 
                  onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  disabled={zoom <= 0.5}
                >
                  <ZoomOut className="w-4 h-4 text-white" />
                </button>
                <button 
                  onClick={() => {
                    setZoom(1);
                    setCenter({ x: 50, y: 50 });
                  }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Maximize2 className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Interactive Map Container */}
            <div className="relative h-64 md:h-80 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
              
              {/* Map Background with Geographical Features */}
              <div className="absolute inset-0">
                {/* Ottawa River */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d={`M ${ottawaRiver.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Highways */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Highway 417 */}
                  <path
                    d={`M ${highway417.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeDasharray="8,4"
                  />
                  
                  {/* Highway 174 */}
                  <path
                    d={`M ${highway174.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeDasharray="8,4"
                  />
                </svg>

                {/* Green Spaces (Parks) */}
                <div className="absolute w-20 h-16 bg-green-900/30 rounded-full blur-sm" style={{ left: '40%', top: '60%' }}></div>
                <div className="absolute w-16 h-12 bg-green-900/30 rounded-full blur-sm" style={{ left: '60%', top: '30%' }}></div>
                <div className="absolute w-24 h-20 bg-green-900/30 rounded-full blur-sm" style={{ left: '20%', top: '40%' }}></div>
                
                {/* Urban Areas */}
                <div className="absolute w-40 h-32 bg-gray-700/20 rounded-lg" style={{ left: '45%', top: '50%' }}></div>
                <div className="absolute w-32 h-24 bg-gray-700/20 rounded-lg" style={{ left: '30%', top: '35%' }}></div>
                <div className="absolute w-36 h-28 bg-gray-700/20 rounded-lg" style={{ left: '65%', top: '65%' }}></div>
              </div>

              {/* Neighborhood Markers */}
              {currentArea.neighborhoods.map((neighborhood, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${neighborhood.x}%`,
                    top: `${neighborhood.y}%`,
                    transform: `translate(-50%, -50%) scale(${zoom})`,
                    transition: 'transform 0.3s ease'
                  }}
                  onClick={() => setSearchQuery(neighborhood.name)}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                    style={{ backgroundColor: currentArea.color }}
                  >
                    <MapPin className="w-3 h-3 text-white" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-3 py-1.5 rounded-lg text-sm font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-700">
                      {neighborhood.name}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* City Labels */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-black/70 px-4 py-2 rounded-lg border border-gray-600">
                  <span className="text-lg font-bold text-white">{currentArea.name}</span>
                </div>
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-gray-600">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: currentArea.color }}></div>
                    <span className="text-xs text-gray-300">Neighborhood</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-2"></div>
                    <span className="text-xs text-gray-300">Ottawa River</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-1 bg-amber-500 mr-2"></div>
                    <span className="text-xs text-gray-300">Highway</span>
                  </div>
                </div>
              </div>

              {/* Zoom Indicator */}
              <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1.5 rounded-lg">
                <span className="text-sm text-gray-300">{Math.round(zoom * 100)}% zoom</span>
              </div>
            </div>

            {/* Neighborhoods List */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Neighborhoods in {currentArea.name}:
              </h4>
              
              {filteredNeighborhoods.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">No neighborhoods found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Try searching for: Kanata, Barrhaven, Nepean, Gatineau, etc.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {filteredNeighborhoods.map((neighborhood, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/60 p-3 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-colors group cursor-pointer"
                      onClick={() => setSearchQuery(neighborhood.name)}
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-2" 
                          style={{ backgroundColor: currentArea.color }}
                        ></div>
                        <span className="text-gray-300 group-hover:text-white text-sm truncate">
                          {neighborhood.name}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-400">
                        Free delivery • {currentArea.deliveryTime}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="/service-area"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 group"
          >
            <MapPin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View Complete Service Area Details
          </a>
          
          <a
            href="tel:+16132900212"
            className="inline-flex items-center bg-gray-800/60 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full border border-gray-700 hover:border-green-500/50 hover:bg-gray-800 transition-all duration-300"
          >
            <Truck className="w-5 h-5 mr-2" />
            Schedule Delivery
          </a>
        </div>
        
        {/* Updated Text */}
        <p className="text-gray-500 text-sm">
          ✅ Free delivery • ✅ Same-day delivery available • ✅ 10-year warranty • ✅ Old mattress disposal
        </p>
      </div>
    </div>
  );
};

export default RealOttawaMap;
