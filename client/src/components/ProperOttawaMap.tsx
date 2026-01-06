import React, { useState } from 'react';
import { MapPin, Search, Navigation, CheckCircle, Truck, ZoomIn, ZoomOut, Compass } from 'lucide-react';

const ProperOttawaMap = () => {
  const [selectedArea, setSelectedArea] = useState('ottawa');
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(1);

  // PROPER GEOGRAPHICAL LAYOUT:
  // Ottawa is SOUTH of the river, Gatineau is NORTH of the river
  
  const serviceAreas = {
    ottawa: {
      name: 'Ottawa',
      color: '#10B981', // green-500
      // Ottawa neighborhoods (SOUTH of river)
      neighborhoods: [
        { name: 'Kanata', x: 20, y: 60 },     // West
        { name: 'Stittsville', x: 18, y: 55 }, // West of Kanata
        { name: 'Barrhaven', x: 25, y: 75 },  // Southwest
        { name: 'Nepean', x: 40, y: 65 },     // Central-West
        { name: 'Westboro', x: 45, y: 60 },   // Central-West
        { name: 'Hintonburg', x: 48, y: 58 }, // Central
        { name: 'Centretown', x: 50, y: 55 }, // Downtown
        { name: 'The Glebe', x: 52, y: 57 },  // South of downtown
        { name: 'Old Ottawa South', x: 53, y: 60 }, // South
        { name: 'Vanier', x: 55, y: 50 },     // East of downtown
        { name: 'Rockcliffe Park', x: 60, y: 45 }, // Northeast
        { name: 'Orleans', x: 70, y: 55 },    // East
        { name: 'Blackburn Hamlet', x: 65, y: 60 }, // East
        { name: 'Beacon Hill', x: 60, y: 65 }, // East-Central
        { name: 'Gloucester', x: 55, y: 70 }, // South
        { name: 'Alta Vista', x: 52, y: 65 }, // South-Central
        { name: 'South Keys', x: 48, y: 72 }, // South
        { name: 'Riverside South', x: 42, y: 75 }, // South
        { name: 'Manotick', x: 35, y: 80 },   // Far South
        { name: 'Greely', x: 40, y: 85 }      // Far South
      ],
      deliveryTime: '2-4 hours',
      coverage: '98%'
    },
    gatineau: {
      name: 'Gatineau',
      color: '#3B82F6', // blue-500
      // Gatineau neighborhoods (NORTH of river)
      neighborhoods: [
        { name: 'Aylmer', x: 30, y: 30 },        // West Gatineau
        { name: 'Deschênes', x: 35, y: 28 },     // West
        { name: 'Gatineau (Hull)', x: 50, y: 35 }, // Central (across from Ottawa)
        { name: 'Plateau', x: 55, y: 32 },       // Central-East
        { name: 'Touraine', x: 58, y: 30 },      // East
        { name: 'Masson-Angers', x: 65, y: 28 }, // Far East
        { name: 'Buckingham', x: 70, y: 25 },    // Northeast
        { name: 'Val-Tétreau', x: 48, y: 38 },   // Central
        { name: 'Lac-Beauchamp', x: 60, y: 22 }, // Northeast
        { name: 'Parc-de-la-Montagne', x: 53, y: 40 } // North
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

  // Ottawa River coordinates (flows EAST-WEST, separates Ottawa/Gatineau)
  const ottawaRiver = [
    { x: 10, y: 45 }, { x: 20, y: 44 }, { x: 30, y: 43 }, 
    { x: 40, y: 44 }, { x: 50, y: 45 }, { x: 60, y: 46 },
    { x: 70, y: 47 }, { x: 80, y: 48 }, { x: 90, y: 49 }
  ];

  // Highway 417 (East-West across Ottawa)
  const highway417 = [
    { x: 15, y: 65 }, { x: 30, y: 65 }, { x: 50, y: 65 }, { x: 70, y: 65 }, { x: 85, y: 65 }
  ];

  // Highway 174 (East to Orleans)
  const highway174 = [
    { x: 50, y: 65 }, { x: 60, y: 62 }, { x: 70, y: 58 }, { x: 80, y: 55 }
  ];

  // Highway 5 (North to Gatineau)
  const highway5 = [
    { x: 50, y: 45 }, { x: 50, y: 40 }, { x: 50, y: 35 }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 mb-6">
          <Compass className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">All of Ottawa & Gatineau</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Free premium mattress delivery to <span className="text-green-400 font-bold">150+ neighborhoods</span> across the National Capital Region
        </p>
        
        {/* Map Orientation Note */}
        <div className="mt-4 inline-flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
          <Compass className="w-4 h-4 mr-2 text-blue-400" />
          <span className="text-sm text-gray-400">Map orientation: Gatineau (North) • Ottawa (South)</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search your neighborhood (e.g., 'Kanata', 'Gatineau')..."
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
              Select Your City
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
                      <div className="text-sm opacity-80">{area.name === 'Ottawa' ? 'South of river' : 'North of river'}</div>
                    </div>
                  </div>
                  <CheckCircle className={`w-5 h-5 ${selectedArea === key ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                </button>
              ))}
            </div>

            {/* Map Legend */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Map Legend</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                  <span className="text-xs text-gray-400">Ottawa River</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-1 bg-amber-500 mr-2"></div>
                  <span className="text-xs text-gray-400">Highway</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-2 bg-green-600"></div>
                  <span className="text-xs text-gray-400">Ottawa Area</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-2 bg-blue-600"></div>
                  <span className="text-xs text-gray-400">Gatineau Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROPER MAP VISUALIZATION */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 h-full">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-0">
                {currentArea.name} Service Area Map
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({currentArea.name === 'Ottawa' ? 'South of Ottawa River' : 'North of Ottawa River'})
                </span>
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
                <div className="h-6 w-px bg-gray-700"></div>
                <div className="flex items-center text-sm text-gray-400">
                  <Compass className="w-3 h-3 mr-1" />
                  {Math.round(zoom * 100)}%
                </div>
              </div>
            </div>

            {/* PROPER MAP CONTAINER */}
            <div className="relative h-64 md:h-80 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
              
              {/* Compass Rose */}
              <div className="absolute top-4 left-4">
                <div className="relative w-12 h-12">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-blue-400 font-bold">N</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">S</div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">W</div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">E</div>
                </div>
              </div>

              {/* Map Background */}
              <div className="absolute inset-0">
                {/* Ottawa River (separates Ottawa/Gatineau) */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d={`M ${ottawaRiver.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Highways */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Highway 417 (East-West across Ottawa) */}
                  <path
                    d={`M ${highway417.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeDasharray="6,3"
                  />
                  
                  {/* Highway 174 (East to Orleans) */}
                  <path
                    d={`M ${highway174.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeDasharray="6,3"
                  />
                  
                  {/* Highway 5 (North to Gatineau) */}
                  <path
                    d={`M ${highway5.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeDasharray="6,3"
                  />
                </svg>

                {/* Area Backgrounds */}
                {/* Gatineau Area (NORTH of river) */}
                <div className="absolute inset-0" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)' }}>
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent"></div>
                </div>
                
                {/* Ottawa Area (SOUTH of river) */}
                <div className="absolute inset-0" style={{ clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)' }}>
                  <div className="absolute inset-0 bg-green-900/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/5 to-transparent"></div>
                </div>

                {/* Major Parks/Green Spaces */}
                <div className="absolute w-24 h-20 bg-green-900/20 rounded-full blur-md" style={{ left: '40%', top: '30%' }}></div>
                <div className="absolute w-20 h-16 bg-green-900/20 rounded-full blur-md" style={{ left: '60%', top: '25%' }}></div>
                <div className="absolute w-28 h-24 bg-green-900/20 rounded-full blur-md" style={{ left: '25%', top: '70%' }}></div>
                <div className="absolute w-22 h-18 bg-green-900/20 rounded-full blur-md" style={{ left: '65%', top: '75%' }}></div>
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
                    transition: 'transform 0.3s ease',
                    zIndex: 10
                  }}
                  onClick={() => setSearchQuery(neighborhood.name)}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-xl animate-pulse border-2 border-white"
                    style={{ backgroundColor: currentArea.color }}
                  >
                    <MapPin className="w-4 h-4 text-white" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 px-3 py-2 rounded-lg text-sm font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl border border-gray-700 min-w-[120px] text-center">
                      {neighborhood.name}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* City Labels */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/80 px-4 py-2 rounded-lg border border-gray-600 backdrop-blur-sm">
                  <span className="text-lg font-bold text-white">Ottawa River</span>
                  <div className="text-xs text-gray-400 mt-1">Separates Ontario & Quebec</div>
                </div>
              </div>

              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-900/70 px-3 py-1.5 rounded-lg border border-blue-700 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-white">Gatineau</span>
                  <div className="text-xs text-blue-300">Québec (North)</div>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-900/70 px-3 py-1.5 rounded-lg border border-green-700 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-white">Ottawa</span>
                  <div className="text-xs text-green-300">Ontario (South)</div>
                </div>
              </div>

              {/* Scale Indicator */}
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1.5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-1 bg-gray-400 mr-2"></div>
                  <span className="text-xs text-gray-400">~10 km</span>
                </div>
              </div>

              {/* Zoom Level */}
              <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1.5 rounded-lg">
                <span className="text-sm text-gray-300">Zoom: {Math.round(zoom * 100)}%</span>
              </div>
            </div>

            {/* Neighborhoods List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">
                  Neighborhoods in {currentArea.name}:
                </h4>
                <div className="text-sm text-gray-500">
                  {filteredNeighborhoods.length} of {currentArea.neighborhoods.length} shown
                </div>
              </div>
              
              {filteredNeighborhoods.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">No neighborhoods found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Try: Kanata, Barrhaven, Orleans, Gatineau, Aylmer, etc.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {filteredNeighborhoods.map((neighborhood, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/60 p-3 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-colors group cursor-pointer hover:scale-[1.02]"
                      onClick={() => setSearchQuery(neighborhood.name)}
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2 animate-pulse" 
                          style={{ backgroundColor: currentArea.color }}
                        ></div>
                        <span className="text-gray-300 group-hover:text-white text-sm font-medium truncate">
                          {neighborhood.name}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-400 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {currentArea.name} • Free delivery
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

export default ProperOttawaMap;
