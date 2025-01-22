import React from 'react';
import { MessageSquare, Shield, Zap, CreditCard, Key, MessageCircle, Settings, PlayCircle, Sliders, LineChart, ArrowRight, MessagesSquare, Users, Globe, MessageSquareMore, Sparkles, Eye, Clock, Check, X } from 'lucide-react';

function App() {
  const handleTalkToExpert = () => {
    window.location.href = 'YOUR_CALENDLY_URL';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950 text-white overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <nav className="flex justify-between items-center mb-8 sm:mb-10">
            <div className="flex items-center space-x-3">
              <MessagesSquare className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
              <span className="text-xl sm:text-2xl font-bold">replyG</span>
            </div>
          </nav>

          <div className="max-w-4xl mx-auto text-center py-4 sm:py-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] sm:leading-[1.1] tracking-tight">
              The best X growth strategy of 2025
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-2">
              Get a G to reply to X posts on your behalf
            </p>
            <div className="space-y-2">
              <button
                onClick={handleTalkToExpert}
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-base sm:text-lg font-semibold"
              >
                Talk to a G
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <div>
                <span className="text-base sm:text-lg text-gray-400">from $19/month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Traction Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12 border-t border-purple-500/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                metric: "200+",
                label: "Happy Users",
                desc: "Growing community of satisfied customers"
              },
              {
                icon: Globe,
                metric: "18",
                label: "Countries",
                desc: "Global reach across continents"
              },
              {
                icon: MessageSquareMore,
                metric: "1,000+",
                label: "Daily Replies",
                desc: "Automated responses every day"
              }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-purple-500/20 h-full flex flex-col items-center text-center">
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mb-3 sm:mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-400">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Safe & Secure by Design
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: "No Password Required", desc: "Secure automation without sharing your X credentials" },
              { icon: MessageSquare, title: "20 Daily Replies", desc: "Up to 20 strategic replies per account every day" },
              { icon: Zap, title: "No Browser Injection", desc: "Clean, safe, risk free automation without webscraping" }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Basic</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">$19</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>10 replies per day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Weekly tweets about replyG</span>
                  </li>
                </ul>
                <button
                  onClick={handleTalkToExpert}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-base font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Top G Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold">MOST POPULAR</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Top G</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">$69</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>20 replies per day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Completely anonymous</span>
                  </li>
                </ul>
                <button
                  onClick={handleTalkToExpert}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-base font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
            {[
              { icon: CreditCard, title: "1. Complete Payment" },
              { icon: Key, title: "2. Get Unique Code" },
              { icon: MessageCircle, title: "3. Enter Code on Telegram" },
              { icon: Settings, title: "4. Delegate Account" },
              { icon: Sliders, title: "5. Set Daily Replies" },
              { icon: Eye, title: "6. Watch Your G Reply" },
              { icon: Clock, title: "7. Change Reply Frequency Any Time" }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-purple-500/20 hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-1.5 sm:p-2 rounded-full bg-purple-500/10">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-purple-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  <span className="text-xs sm:text-sm font-medium text-purple-400 uppercase tracking-wider">Limited Time Offer</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Start Growing Your X Today
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                  Join 200+ satisfied users who are already growing their X presence with replyG
                </p>
                <div className="flex flex-col items-center justify-center gap-2">
                  <button
                    onClick={handleTalkToExpert}
                    className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-base sm:text-lg font-semibold"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div>
                    <span className="text-base sm:text-lg text-gray-400">from $19/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-4 sm:py-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">© {new Date().getFullYear()} ReplyG. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;