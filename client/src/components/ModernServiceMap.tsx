import React, { useState } from 'react';
import { MapPin, Search, Navigation, CheckCircle, Truck, Clock, Shield } from 'lucide-react';

const ModernServiceMap = () => {
  const [selectedArea, setSelectedArea] = useState('ottawa');
  const [searchQuery, setSearchQuery] = useState('');

  const serviceAreas = {
    ottawa: {
      name: 'Ottawa',
      color: 'from-green-500 to-emerald-600',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-600',
      neighborhoods: [
        'Kanata', 'Barrhaven', 'Nepean', 'Orleans', 'Centretown',
        'Westboro', 'The Glebe', 'Hintonburg', 'Stittsville', 'Manotick',
        'Findlay Creek', 'Riverside South', 'Vanier', 'Beacon Hill',
        'Hunt Club', 'South Keys', 'Greenboro', 'Blossom Park', 'Alta Vista',
        'Bells Corners', 'Crystal Beach', 'Britannia', 'Carlington', 'Dow\'s Lake'
      ],
      deliveryTime: '2-4 hours',
      coverage: '98%'
    },
    gatineau: {
      name: 'Gatineau',
      color: 'from-blue-500 to-cyan-600',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      neighborhoods: [
        'Gatineau (Hull)', 'Aylmer', 'Buckingham', 'Masson-Angers',
        'Plateau', 'Touraine', 'Lac-Beauchamp', 'Deschênes',
        'Mont-Bleu', 'Hautes-Plaines', 'Parc-de-la-Montagne', 'Saint-Rédempteur'
      ],
      deliveryTime: '3-5 hours',
      coverage: '100%'
    },
    surrounding: {
      name: 'Surrounding Areas',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-600',
      neighborhoods: [
        'Kemptville', 'Rockland', 'Russell', 'Chelsea', 'Wakefield',
        'Carleton Place', 'Arnprior', 'Cumberland', 'Greely', 'Metcalfe',
        'Navan', 'Carp', 'Dunrobin', 'Constance Bay', 'Fitzroy Harbour'
      ],
      deliveryTime: '1-2 days',
      coverage: '85%'
    }
  };

  const currentArea = serviceAreas[selectedArea];
  
  const filteredNeighborhoods = searchQuery
    ? currentArea.neighborhoods.filter(n => 
        n.toLowerCase().includes(searchQuery.toLowerCase()))
    : currentArea.neighborhoods;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 mb-6">
          <MapPin className="w-8 h-8 md:w-10 md:h-10 text-green-500 animate-pulse" />
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
                      ? `${area.gradient} text-white shadow-lg scale-[1.02]`
                      : 'bg-gray-900/60 text-gray-300 hover:bg-gray-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      selectedArea === key ? 'bg-white' : `${area.gradient}`
                    }`} />
                    <div>
                      <div className="font-semibold">{area.name}</div>
                      <div className="text-sm opacity-80">{area.neighborhoods.length} neighborhoods</div>
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

        {/* Map Visualization & Neighborhoods */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 h-full">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 sm:mb-0">
                {currentArea.name} Service Area
                {searchQuery && (
                  <span className="text-green-400 ml-2 text-sm font-normal">
                    ({filteredNeighborhoods.length} matches)
                  </span>
                )}
              </h3>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  {currentArea.neighborhoods.length} neighborhoods
                </div>
                <div className="hidden sm:flex items-center text-sm text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentArea.deliveryTime} delivery
                </div>
              </div>
            </div>

            {/* Interactive Map Visualization */}
            <div className="relative h-48 md:h-56 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700/50">
              
              {/* Animated Dots */}
              {currentArea.neighborhoods.slice(0, 9).map((_, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                return (
                  <div
                    key={index}
                    className={`absolute w-3 h-3 rounded-full ${currentArea.gradient} animate-pulse`}
                    style={{
                      left: `${20 + col * 25}%`,
                      top: `${20 + row * 25}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-current rounded-full animate-ping opacity-30"></div>
                  </div>
                );
              })}
              
              {/* Area Name Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white/10 select-none">
                    {currentArea.name.toUpperCase()}
                  </div>
                </div>
              </div>
              
              {/* Coverage Indicator */}
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center bg-black/50 px-3 py-1.5 rounded-full">
                  <div className={`w-2 h-2 rounded-full ${currentArea.gradient} mr-2`} />
                  <span className="text-sm text-gray-300">{currentArea.coverage} coverage</span>
                </div>
              </div>
            </div>

            {/* Neighborhoods Grid */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Neighborhoods We Serve in {currentArea.name}:
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
                      className="bg-gray-900/60 p-3 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${currentArea.gradient}`} />
                        <span className="text-gray-300 group-hover:text-white text-sm truncate">
                          {neighborhood}
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

      {/* CTA Section - UPDATED TEXT AS YOU REQUESTED */}
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
        
        {/* UPDATED TEXT - Only keep: Free delivery, Same-day, 10-year warranty, Old mattress disposal */}
        <p className="text-gray-500 text-sm">
          ✅ Free delivery • ✅ Same-day delivery available • ✅ 10-year warranty • ✅ Old mattress disposal
        </p>
      </div>
    </div>
  );
};

export default ModernServiceMap;
