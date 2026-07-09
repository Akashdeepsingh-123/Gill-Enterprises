import { motion } from 'framer-motion';
import { Users, Package, Award, Heart } from 'lucide-react';
import { stats } from '../../data/products';
import { useAnimatedCounter, useInView } from '../../hooks';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';

// Map icon string names to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  package: Package,
  award: Award,
  heart: Heart,
};

// Individual stat card with animated counter
function StatCard({
  value,
  suffix,
  label,
  icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  index: number;
}) {
  const { ref, isInView } = useInView(0.3);
  const count = useAnimatedCounter(value, 2000 + index * 200, isInView);
  const Icon = iconMap[icon] || Award;

  // Color themes per stat for visual variety
  const colorThemes = [
    { iconBg: 'bg-primary/10', iconColor: 'text-primary-light', glow: 'glow-blue' },
    { iconBg: 'bg-secondary/10', iconColor: 'text-secondary-light', glow: 'glow-green' },
    { iconBg: 'bg-accent/10', iconColor: 'text-accent', glow: 'glow-gold' },
    { iconBg: 'bg-red-500/10', iconColor: 'text-red-500', glow: 'glow-blue' },
  ];

  const theme = colorThemes[index % colorThemes.length];

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      whileHover={{
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(30, 58, 138, 0.12)',
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      }}
      className="relative glass-white dark:bg-dark-card/80 dark:border-dark-border rounded-2xl p-8 text-center backdrop-blur-sm group transition-colors duration-300"
    >
      {/* Subtle hover glow */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${theme.glow}`}
        style={{ filter: 'blur(20px)', zIndex: -1 }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${theme.iconBg} mb-5`}
      >
        <Icon className={`w-7 h-7 ${theme.iconColor}`} />
      </motion.div>

      {/* Animated Counter */}
      <div className="mb-2">
        <span className="gradient-text-gold text-4xl md:text-5xl font-bold font-heading tabular-nums">
          {count}
        </span>
        <span className="gradient-text-gold text-3xl md:text-4xl font-bold font-heading ml-0.5">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-text-secondary dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  );
}

export default function TrustStats() {
  return (
    <section id="stats" className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-primary/[0.02] to-surface dark:from-dark-bg dark:via-primary/[0.05] dark:to-dark-bg pointer-events-none" />
      <div className="absolute inset-0 pattern-dots pointer-events-none" />

      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-[0.15em]">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary dark:text-white">
            Numbers That{' '}
            <span className="gradient-text-gold">Speak Trust</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
