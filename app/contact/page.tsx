import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h2>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {siteMetadata.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Remote / Worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Availability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:block p-8 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Mail className="h-16 w-16 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  We'll get back to you soon!
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Or connect with us on social media
            </h3>
            <div className="flex space-x-4">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={siteMetadata.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
