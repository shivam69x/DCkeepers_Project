// export default GoogleHome;

import React, { useState, useEffect } from "react";
import {
  Play,
  Users,
  FileText,
  Calendar,
  Mail,
  MessageCircle,
  Video,
  Cloud,
  Settings,
  ChevronRight,
  Star,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import GooglePlans from "./GooglePlans";
import Clients from "../components/Clients";
import Faqsection from "../components/Faqsectionone";

const GoogleHome = () => {
  //   const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Gmail",
      description: "Professional email with custom domain",
      color: "bg-red-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Meet",
      description: "Video meetings for up to 500 participants",
      color: "bg-green-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Docs",
      description: "Real-time collaboration on documents",
      color: "bg-blue-500",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Drive",
      description: "Secure cloud storage and file sharing",
      color: "bg-yellow-500",
    },
  ];

  const workspaceApps = [
    { name: "Gmail", icon: "📧", color: "bg-red-100 text-red-600" },
    { name: "Calendar", icon: "📅", color: "bg-blue-100 text-blue-600" },
    { name: "Drive", icon: "💾", color: "bg-yellow-100 text-yellow-600" },
    { name: "Docs", icon: "📄", color: "bg-blue-100 text-blue-600" },
    { name: "Sheets", icon: "📊", color: "bg-green-100 text-green-600" },
    { name: "Slides", icon: "🎨", color: "bg-orange-100 text-orange-600" },
    { name: "Meet", icon: "🎥", color: "bg-green-100 text-green-600" },
    { name: "Chat", icon: "💬", color: "bg-green-100 text-green-600" },
  ];

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const IsometricCard = ({ children, className = "", hoverScale = true }) => (
    <div
      className={`
      relative perspective-1000 group cursor-pointer
      ${hoverScale ? "hover:scale-105" : ""}
      transition-all duration-300 ease-out
      ${className}
    `}
    >
      <div className="transform-gpu transition-all duration-300 group-hover:rotate-y-12 group-hover:rotate-x-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-10 translate-x-10"></div>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-50 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Header */}

        {/* Hero Section */}
        <div className="mb-8 flex flex-col items-center justify-start pt-4 px-4 sm:pt-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-700 text-center">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
            <span className="text-gray-600 ml-1 sm:ml-2">Workspace</span>
          </h1>
        </div>

        <section className="relative z-10 px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mb-36">
                <FloatingElement>
                  <h1 className="text-2xl lg:text-5xl font-bold text-[#0e3c47] leading-tight mb-4 ">
                    The everything
                    <span className="mb-4 block text-[#155666] ">
                      workspace
                    </span>
                  </h1>
                </FloatingElement>

                <FloatingElement delay={200}>
                  <p className="text-lg text-[#024354d8] mb-8 leading-relaxed">
                    Transform the way your team works with AI-powered apps that
                    connect seamlessly across Google Workspace.
                  </p>
                </FloatingElement>

                <FloatingElement delay={400}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button
                      className="group bg-[#126276] hover:bg-[#218aa4] text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-2 text-base"
                      aria-label="View all hosting plans"
                    >
                      <span>See All Plans</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </FloatingElement>

                <FloatingElement delay={600}>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1 text-green-500" />
                      Enterprise security
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                      AI-powered
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-blue-500" />
                      99.9% uptime
                    </div>
                  </div>
                </FloatingElement>
              </div>

              {/* Isometric Workspace Visualization */}
              <div className="relative">
                <FloatingElement delay={800}>
                  <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-700">
                    {/* Main Workspace Container */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 to-red-500"></div>

                      {/* Floating Apps */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        {workspaceApps.map((app, index) => (
                          <div
                            key={app.name}
                            className={`${app.color} p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-2`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="text-2xl mb-2">{app.icon}</div>
                            <div className="font-medium text-xs">
                              {app.name}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Collaboration Scene */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-gray-700">
                              Team Collaboration
                            </span>
                          </div>
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              A
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              B
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
                              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              C
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
                              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className="absolute top-1/2 -right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      <Video className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </section>

        <GooglePlans />

        {/* Features Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <FloatingElement>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Everything you need to
                  <span className="block text-blue-600">get work done</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Connect, create, and collaborate with Google Workspace's
                  integrated suite of AI-powered productivity tools.
                </p>
              </div>
            </FloatingElement>

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FloatingElement key={index} delay={index * 200}>
                  <IsometricCard className="h-full">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${feature.color} p-3 rounded-2xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group/btn">
                          Learn more
                          <ChevronRight className="w-4 h-4 ml-1 transform transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </IsometricCard>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Faqsection />
      <div className=" mt-20">
        <Clients />
      </div>
    </>
  );
};

export default GoogleHome;
