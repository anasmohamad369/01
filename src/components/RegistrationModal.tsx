"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Sparkles, User, Mail, Phone, MessageSquare, PhoneCall, Send } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass?: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  defaultClass = "Teja Taekwondo & Karate Little Champions",
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    phone: "",
    email: "",
    selectedClass: defaultClass,
    experienceLevel: "Beginner",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const buildWhatsAppUrl = (customData = formData) => {
    const student = customData.studentName || "Champion";
    const userPhone = customData.phone || "Not specified";
    const program = customData.selectedClass;
    const level = customData.experienceLevel;

    const message = `Hi Coach B. Sai Teja! 🥋 I want to register for Teja Taekwondo Club.\n\n👤 *Student Name:* ${student}\n📞 *Phone:* ${userPhone}\n🥋 *Selected Program:* ${program}\n🏅 *Experience Level:* ${level}`;

    return `https://wa.me/917981278696?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebration confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C8232C", "#FACC15", "#22C55E", "#1C1C1C"],
    });

    // Open WhatsApp with prefilled registration data
    const url = buildWhatsAppUrl();
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-[#FBF9F5] rounded-3xl border border-[#EAE4D9] shadow-2xl max-w-lg w-full overflow-hidden relative text-left">
        
        {/* Header Bar */}
        <div className="bg-[#1C1C1C] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#FACC15] text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Teja Taekwondo Club Registration</span>
          </div>

          <h3 className="font-bebas text-3xl text-white tracking-wide font-extrabold">
            Register With Coach B. Sai Teja
          </h3>
          <p className="text-xs text-gray-300">
            Call or message directly via WhatsApp for instant class confirmation.
          </p>

          {/* Instant Quick Action Buttons (Call & WhatsApp) */}
          <div className="flex items-center gap-2 pt-3">
            <a
              href="tel:+917981278696"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Call: +91 7981278696</span>
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#22C55E]/10 text-[#22C55E] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-bebas text-3xl text-[#1C1C1C] font-bold">
                Registration Prefilled & Sent!
              </h4>
              <p className="text-xs sm:text-sm text-[#555555]">
                Thank you <span className="font-semibold text-[#1C1C1C]">{formData.studentName || "Champion"}</span>!
                Your registration details have been prefilled for <span className="font-bold text-[#25D366]">WhatsApp</span>. Coach B. Sai Teja (+91 7981278696) will confirm your session immediately.
              </p>
              
              <div className="p-4 rounded-2xl bg-[#F1ECE3] text-xs text-[#333333] font-medium space-y-1 text-left">
                <p>👤 <strong>Student Name:</strong> {formData.studentName || "Champion"}</p>
                <p>📞 <strong>Phone:</strong> {formData.phone || "+91 7981278696"}</p>
                <p>🥋 <strong>Selected Program:</strong> {formData.selectedClass}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs py-3 rounded-xl shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Message</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full bg-[#1C1C1C] hover:bg-[#C8232C] text-white font-medium text-xs py-3 rounded-xl transition-all cursor-pointer"
                >
                  Close & Return to Dojo
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-[#1C1C1C] uppercase tracking-wide mb-1">
                  Student Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Harrison"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E7DFCE] bg-white text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#C8232C]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] uppercase tracking-wide mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 7981278696"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E7DFCE] bg-white text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#C8232C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1C1C] uppercase tracking-wide mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E7DFCE] bg-white text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#C8232C]"
                    />
                  </div>
                </div>
              </div>

              {/* Program Picker */}
              <div>
                <label className="block text-xs font-bold text-[#1C1C1C] uppercase tracking-wide mb-1">
                  Select Program
                </label>
                <select
                  value={formData.selectedClass}
                  onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E7DFCE] bg-white text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#C8232C]"
                >
                  <option value="Teja Taekwondo Little Champions (Ages 4-7)">Teja Taekwondo Little Champions (Ages 4-7)</option>
                  <option value="Junior Taekwondo Poomsae (Ages 8-12)">Junior Taekwondo Poomsae (Ages 8-12)</option>
                  <option value="Youth Olympic Sparring (Ages 13-17)">Youth Olympic Sparring (Ages 13-17)</option>
                  <option value="Adult Taekwondo & Self-Defense (Ages 18+)">Adult Taekwondo & Self-Defense (Ages 18+)</option>
                  <option value="Master Black Belt Dan Examination">Master Black Belt Dan Examination</option>
                  <option value="Family Taekwondo Bonding Class">Family Taekwondo Bonding Class</option>
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold text-[#1C1C1C] uppercase tracking-wide mb-1">
                  Experience Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setFormData({ ...formData, experienceLevel: lvl })}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                        formData.experienceLevel === lvl
                          ? "bg-[#C8232C] text-white border-[#C8232C]"
                          : "bg-white text-[#444444] border-[#E7DFCE] hover:bg-[#F1ECE3]"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit via WhatsApp CTA */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-sm py-3.5 rounded-xl shadow-lg transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 mt-2 font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Register & Prefill WhatsApp Message</span>
              </button>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
