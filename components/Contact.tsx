'use client';
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@yourname.dev",
      href: "mailto:hello@yourname.dev"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
          <span className="text-orange-400">#</span>
          <span>contact</span>
          <div className="w-32 h-px bg-orange-400"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's work <span className="text-orange-400">together</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Have a project in mind or just want to chat? I'm always open to discussing new opportunities and interesting ideas.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-orange-400 transition-all duration-300"
                    >
                      <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 bg-gray-800/50">
                      <div className="text-orange-400">{item.icon}</div>
                      <div>
                        <div className="text-sm text-gray-400">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-orange-400 transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Code Block */}
          <div className="hidden lg:block">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-purple-400">const <span className="text-blue-400">contact</span> = {`{`}</div>
                <div className="ml-4 text-gray-300">name: <span className="text-green-400">"Your Name"</span>,</div>
                <div className="ml-4 text-gray-300">email: <span className="text-green-400">"hello@yourname.dev"</span>,</div>
                <div className="ml-4 text-gray-300">location: <span className="text-green-400">"San Francisco, CA"</span>,</div>
                <div className="ml-4 text-gray-300">available: <span className="text-orange-400">true</span></div>
                <div className="text-purple-400">{`}`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Ready to collaborate?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always interested in new opportunities and exciting projects. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@yourname.dev"
                className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 text-gray-500">
          <div className="w-16 h-px bg-gray-600"></div>
          <span className="text-sm font-mono">EOF</span>
          <div className="w-16 h-px bg-gray-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;