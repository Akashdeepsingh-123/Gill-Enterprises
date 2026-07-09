import PageHero from '../components/ui/PageHero';
import TrackingCard from '../components/sections/TrackingCard';

export default function TrackShipmentPage() {
  return (
    <>
      <PageHero
        label="COURIER TRACKING"
        title="Track Your Shipment"
        subtitle="Enter your tracking number to get real-time status updates on your delivery."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Track Shipment' },
        ]}
        backgroundImage="/images/heroes/bg-track.png"
      />

      {/* Tracking Card Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <TrackingCard />
        </div>
      </section>

      {/* Courier Partners Info */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'DHL Express', desc: 'Global express shipping with tracking number auto-fill support.', logo: '/official-dhl-logo.svg' },
              { name: 'DTDC', desc: 'India\'s leading domestic and international courier network.', logo: '/official-dtdc-logo.png' },
              { name: 'Blue Dart', desc: 'South Asia\'s premier express air and integrated transport company.', logo: '/official-bluedart-logo.svg' },
            ].map((partner) => (
              <div key={partner.name} className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-border text-center group hover:shadow-lg transition-all duration-300">
                <div className="h-12 mx-auto mb-4 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="font-heading font-bold text-text-primary mb-2">{partner.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
