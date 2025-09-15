import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon,
} from '@heroicons/react/24/outline';
import * as emailjs from '@emailjs/browser';
import { Instagram, Linkedin, Mail, MessageCircle, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // Initialize EmailJS
  useEffect(() => {
    // EmailJS v4 doesn't require initialization
    // But to make it compatible with both v3 and v4, we'll handle both cases
    const publicKey = 'u3rj0Cd53f7nkm2og';
    
    try {
      // For v3, this method exists and is required
      if (typeof emailjs.init === 'function') {
        emailjs.init(publicKey);
        console.log('EmailJS initialized (v3)');
      } else {
        console.log('EmailJS v4+ detected (no init required)');
      }
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) {
      console.error('Form reference is null');
      return;
    }
    
    // Check honeypot field - if it's filled, it's likely a bot
    const honeypotField = form.current.querySelector('input[name="website"]') as HTMLInputElement;
    if (honeypotField && honeypotField.value) {
      // Silently reject the submission but pretend it succeeded
      console.log('Honeypot field filled, likely a bot');
      setSubmissionStatus({ success: true, message: 'Your message has been sent successfully! I will get back to you soon.' });
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // EmailJS configuration
    const serviceID = 'service_wijy3il';
    const templateID = 'template_6tcv8vs';
    const publicKey = 'u3rj0Cd53f7nkm2og';
    
    console.log('Attempting to send email with EmailJS');
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('Form data:', {
      name: formData.name,
      email: formData.email,
      message: formData.message?.substring(0, 20) + '...' // Log first 20 chars for privacy
    });

    // Try with sendForm first (preferred method)
    try {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          console.log('SUCCESS!', result.text);
          setSubmissionStatus({ success: true, message: 'Your message has been sent successfully! I typically respond within 24-48 hours.' });
          setFormData({ name: '', email: '', message: '' });
        }, (error) => {
          console.error('FAILED with sendForm...', error.text);
          console.error('Error details:', error);
          
          // If sendForm fails, try with send as fallback
          console.log('Trying fallback method...');
          emailjs.send(serviceID, templateID, {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact: ${formData.name}`
          }, publicKey)
            .then((result) => {
              console.log('SUCCESS with fallback!', result.text);
              setSubmissionStatus({ success: true, message: 'Your message has been sent successfully! I typically respond within 24-48 hours.' });
              setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
              console.error('FAILED with fallback too...', error);
              setSubmissionStatus({ 
                success: false, 
                message: `Failed to send message. Please try again later or contact me directly at shadyabacus@gmail.com` 
              });
            });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (err) {
      console.error('Exception in emailjs call:', err);
      setSubmissionStatus({ 
        success: false, 
        message: 'An unexpected error occurred. Please try again later or contact me directly at shadyabacus@gmail.com' 
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/hp_brains',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/osike-shadrack/',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Gmail',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:shadyabacus@gmail.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/254701570902',
      color: 'hover:text-green-500',
    },
    {
      name: 'Github',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/osike',
      color: 'hover:text-gray-800 dark:hover:text-white',
    },
  
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy dark:text-white mb-4">
            Contact <span className="text-teal-500">Shadrack Osike</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Ready to bring your next project to life? Let's have a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form for Shadrack Osike">
              {/* Hidden input for the subject line */}
              <input 
                type="hidden" 
                name="subject" 
                value={`Portfolio Contact: ${formData.name}`} 
              />
              
              {/* Hidden input for from_name field (often required by EmailJS templates) */}
              <input 
                type="hidden" 
                name="from_name" 
                value={formData.name} 
              />
              
              {/* Hidden input for to_name field (often required by EmailJS templates) */}
              <input 
                type="hidden" 
                name="to_name" 
                value="Shadrack Osike" 
              />
              
              {/* Honeypot field for spam prevention */}
              <div style={{ display: 'none' }}>
                <label htmlFor="website">Website (Leave this empty)</label>
                <input 
                  type="text" 
                  id="website" 
                  name="website" 
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  aria-required="true"
                  aria-label="Your name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  aria-required="true"
                  aria-label="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you with your project?"
                  aria-required="true"
                  aria-label="Your message to Shadrack Osike"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-colors resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                aria-label="Send message to Shadrack Osike"
                className="w-full py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submissionStatus && (
                <div 
                  className={`mt-4 text-center p-3 rounded-lg ${submissionStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'}`}
                  role="alert"
                  aria-live="assertive"
                >
                  {submissionStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                    <EnvelopeIcon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">shadyabacus@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                    <PhoneIcon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+254 701 570 902</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-6">
                Connect With Me
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center transition-all ${link.color} hover:shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
