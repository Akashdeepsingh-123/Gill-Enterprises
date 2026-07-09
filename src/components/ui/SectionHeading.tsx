import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useInView } from '../../hooks';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`space-y-4 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}
    >
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border ${
          light
            ? 'bg-white/10 text-white border-white/20'
            : 'bg-primary/5 text-primary border-primary/20'
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight ${
          light ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
