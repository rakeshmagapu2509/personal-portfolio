import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Send, Copy, Check, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest handling: Launches user default email client prefilled.
    const mailtoUrl = "mailto:" + personalInfo.email + 
      "?subject=" + encodeURIComponent("[" + formData.name + "] " + formData.subject) +
      "&body=" + encodeURIComponent(
        "Sender Name: " + formData.name + "\n" +
        "Sender Email: " + formData.email + "\n\n" +
        "Message:\n" + formData.message
      );

    window.location.href = mailtoUrl;
    setSubmittedStatus(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Let's Build <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Something Together</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Have an AI opportunity, research idea, hackathon collaboration, or simply want to connect? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Left Column: Direct Contact & Email Card */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          
          <div className="rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:border-purple-500/35 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">
              Direct Communication
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              I actively monitor my inbox for academic projects, hackathon invitations, research discussions, and AI engineering roles.
            </p>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-purple-950/25 border border-purple-500/20 mb-6 shadow-inner">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-1 font-semibold">
                Primary Transceiver
              </span>
              <a
                href={"mailto:" + personalInfo.email}
                className="text-sm sm:text-base font-mono text-purple-300 hover:text-white break-all font-semibold block mb-3 transition-colors"
              >
                {personalInfo.email}
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={"mailto:" + personalInfo.email}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-purple-500/15 border border-purple-500/25 text-purple-200 font-medium text-xs transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-purple-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick System Diagnostics */}
            <div className="space-y-3 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center justify-between pb-2 border-b border-purple-500/15">
                <span className="text-zinc-400">Location</span>
                <span className="text-white font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-purple-500/15">
                <span className="text-zinc-400">Status</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Opportunities
                </span>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center justify-between pb-2 border-b border-purple-500/15">
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-purple-400" />
                    <span>Phone</span>
                  </span>
                  <a
                    href={`tel:${personalInfo.phoneRaw || '07989894262'}`}
                    className="text-purple-300 hover:text-white font-medium transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Target Role</span>
                <span className="text-purple-300 font-medium">{personalInfo.careerGoal}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Futuristic Contact Form */}
        <div className="lg:col-span-7 text-left">
          
          <div className="rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:border-purple-500/35 transition-all">
            <h3 className="text-lg font-bold text-white mb-1">
              Dispatch Message
            </h3>
            <p className="text-xs text-purple-400/80 mb-6 font-mono">
              Prefills and launches your default messaging client directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                  Your Name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Alex Johnson"
                  className={"w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border text-sm text-white placeholder:text-zinc-500 focus:bg-purple-950/30 focus:outline-none transition-all " + (
                    errors.name ? 'border-rose-500/80 focus:border-rose-400' : 'border-purple-500/25 focus:border-purple-400 focus:shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-[11px] font-mono text-rose-400">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                  Your Email Address <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="alex@example.com"
                  className={"w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border text-sm text-white placeholder:text-zinc-500 focus:bg-purple-950/30 focus:outline-none transition-all " + (
                    errors.email ? 'border-rose-500/80 focus:border-rose-400' : 'border-purple-500/25 focus:border-purple-400 focus:shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] font-mono text-rose-400">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                  Subject <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="e.g. AI Research / Hackathon Collaboration"
                  className={"w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border text-sm text-white placeholder:text-zinc-500 focus:bg-purple-950/30 focus:outline-none transition-all " + (
                    errors.subject ? 'border-rose-500/80 focus:border-rose-400' : 'border-purple-500/25 focus:border-purple-400 focus:shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  )}
                />
                {errors.subject && (
                  <p className="mt-1 text-[11px] font-mono text-rose-400">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Write your note or idea here..."
                  className={"w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border text-sm text-white placeholder:text-zinc-500 focus:bg-purple-950/30 focus:outline-none transition-all resize-none " + (
                    errors.message ? 'border-rose-500/80 focus:border-rose-400' : 'border-purple-500/25 focus:border-purple-400 focus:shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] font-mono text-rose-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button with Neon Violet Gradient */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Status Notice */}
            {submittedStatus && (
              <div className="mt-4 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs text-zinc-300 animate-in fade-in duration-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white mb-0.5">Transceiver protocol ready in your default email client.</p>
                    <p className="text-zinc-400 text-[11px]">
                      If your client did not launch automatically, feel free to copy <strong className="text-purple-300">{personalInfo.email}</strong> and transmit your message directly.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
