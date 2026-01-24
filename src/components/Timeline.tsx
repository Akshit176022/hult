import { motion } from "framer-motion";
import { Calendar, Presentation, Trophy } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    title: "Round 1",
    subtitle: "Shortlisting Round and Idea Presentation",
    date: "4th February",
    icon: Presentation,
    description: "Present your initial idea and get shortlisted for the final round.",
  },
  {
    id: 2,
    title: "Final Round",
    subtitle: "Competition Finals",
    date: "7th & 8th February",
    icon: Trophy,
    description: "Final presentations and judging to determine the winners.",
  },
];

const Timeline = () => {
  const handleJoinWhatsApp = () => {
    // Replace with your actual WhatsApp group link
    window.open('https://chat.whatsapp.com/YOUR_WHATSAPP_LINK', '_blank');
  };

  return (
    <section id="timeline" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-pink-100 dark:from-pink-950/80 dark:to-pink-900/80 relative overflow-hidden timeline-section">
      {/* Background Gradient Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-pink-200/40 to-transparent dark:from-pink-800/30 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-pink-200/40 to-transparent dark:from-pink-800/30 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-pink-200/30 via-pink-100/20 to-transparent dark:from-pink-800/20 dark:via-pink-900/10 dark:to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="section-badge mx-auto mb-4 md:mb-6">
            <Calendar className="w-4 h-4" />
            <span>Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4">
            Timeline
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Important dates and milestones for the competition
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline Section - Takes 2/3 width on large screens */}
          <div className="lg:w-2/3">
            <div className="relative">
              <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/30 transform md:-translate-x-1/2 hidden sm:block" />
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/30 sm:hidden" />

              <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {timelineEvents.map((event, index) => {
                  const Icon = event.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8"
                    >
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-light to-primary/80 dark:from-primary/30 dark:to-primary/50 border-4 border-background flex items-center justify-center shadow-lg shadow-primary/20 backdrop-blur-sm">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-primary" />
                          </div>
                          <div className="absolute top-1/2 -translate-y-1/2 left-full sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 border-background shadow-md hidden sm:block" />
                        </motion.div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 pt-1 sm:pt-2 w-full sm:w-auto">
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 hover:border-primary/30 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                                {event.title}
                              </h3>
                              <div className="hidden sm:flex items-center gap-2 text-primary/60">
                                <div className="w-1 h-1 rounded-full bg-primary" />
                              </div>
                            </div>
                            <p className="text-primary font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                              {event.subtitle}
                            </p>
                            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 sm:gap-3 text-primary font-medium bg-primary-light/50 dark:bg-primary/10 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 w-fit">
                              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                              <span className="text-sm sm:text-base md:text-lg">{event.date}</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Registration Info Section - Takes 1/3 width on large screens */}
<div className="lg:w-1/3">
  <div className="sticky top-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:shadow-pink-300/30 transition-all duration-300">
    <h3 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
      Registration Steps
    </h3>
    
    <div className="space-y-6">
      <div className="flex items-start gap-12 p-4 bg-pink-50 dark:bg-slate-800/50 rounded-xl">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xl font-bold text-primary">1</span>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-foreground">Register on the Hult Prize Platform</h4>
          <p className="text-muted-foreground text-lg mt-2">
            Complete your registration on the official Hult Prize website to participate.
          </p>
          <a 
            href="https://www.hultprize.org/register" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 text-md font-medium text-primary hover:underline"
          >
            Register Now →
          </a>
        </div>
      </div>
      <div className="flex items-start gap-12 p-4 bg-pink-50 dark:bg-slate-800/50 rounded-xl">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xl font-bold text-primary">2</span>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-foreground">Join Our WhatsApp Group</h4>
          <p className="text-muted-foreground text-lg mt-2">
            Stay updated with all announcements, important dates, and event details.
          </p>
          <button
            onClick={handleJoinWhatsApp}
            className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.133.296-.345.445-.523.146-.181.194-.297.297-.494.1-.21.049-.375-.025-.524-.075-.148-.669-1.611-.915-2.209-.24-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.489 1.708.625.714.227 1.365.195 1.878.121.574-.091 1.758-.719 2.005-1.413.248-.691.248-1.289.173-1.413-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.17 9.17 0 01-4.868-1.4l-.35-.209-3.736.982.998-3.648-.235-.374a9.2 9.2 0 01-1.41-4.711 9.28 9.28 0 012.704-6.586 9.28 9.28 0 016.57-2.73 9.2 9.2 0 016.6 2.73 9.2 9.2 0 012.7 6.57 9.28 9.28 0 01-2.73 6.57 9.2 9.2 0 01-6.533 2.706z" />
            </svg>
            Join WhatsApp Group
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default  Timeline;














