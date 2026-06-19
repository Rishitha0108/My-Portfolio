import { motion } from 'framer-motion';

// Engraved section heading: a manuscript rubric, a Cinzel title with a gilded
// keyword, an illuminated rule, and an elegant Cormorant description.
export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const words = title.split(' ');

  return (
    <div className={`flex flex-col ${alignment} gap-5`}>
      {eyebrow && (
        <motion.span
          className="rubric"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" />
        </motion.span>
      )}

      <h2 className="font-display text-3xl font-semibold leading-[1.12] text-parchment sm:text-4xl md:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="mr-[0.28em] inline-block"
            initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
        {highlight && (
          <motion.span
            className="text-gilded mr-[0.28em] inline-block animate-gild-pan"
            initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: words.length * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {highlight}
          </motion.span>
        )}
      </h2>

      <motion.div
        className={`h-px w-40 ${align === 'center' ? '' : 'ml-0'} rule-diamond`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />

      {description && (
        <motion.p
          className={`max-w-2xl font-accent text-lg leading-relaxed text-parchment-dim sm:text-xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
