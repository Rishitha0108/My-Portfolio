import { motion } from 'framer-motion';
import {
  Sparkles, Network, BrainCircuit, Workflow, Database, ShieldCheck,
} from 'lucide-react';
import { skillGroups, accentHex } from '../data/resume';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Reveal from './ui/Reveal';

const iconMap = { Sparkles, Network, BrainCircuit, Workflow, Database, ShieldCheck };

const incantation = [
  'PyTorch', 'TensorFlow', 'LangChain', 'LlamaIndex', 'Pinecone', 'Claude', 'GPT-4o',
  'LLaMA 3', 'Mistral', 'LangGraph', 'AutoGen', 'MCP', 'SageMaker', 'Vertex AI',
  'Kubernetes', 'ONNX', 'TensorRT', 'MLflow', 'Kafka', 'Spark', 'Snowflake', 'FastAPI',
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[2200px] px-6">
        <SectionHeading
          eyebrow="Disciplines"
          title="Six schools of"
          highlight="applied magic"
          description="From data ingestion to governed deployment — the disciplines I wield to ship AI that performs and complies."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            const hex = accentHex[group.accent];
            return (
              <Reveal key={group.key} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full" glareColor={`${hex}33`}>
                  <div className="rune-card ornament relative h-full overflow-hidden rounded-3xl p-6">
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
                      style={{ background: hex }}
                    />

                    <div className="relative flex items-center gap-3">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-2xl ring-1 ring-white/10"
                        style={{ background: `${hex}22`, color: hex }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-display text-[10px] uppercase tracking-[0.3em]" style={{ color: hex }}>
                          {group.rune}
                        </div>
                        <h3 className="font-display text-base font-semibold leading-tight text-parchment">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill, j) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.04 * j }}
                          className="rounded-lg border border-gold/15 bg-obsidian-950/40 px-2.5 py-1 text-xs text-parchment-dim transition-colors hover:border-gold/40 hover:text-parchment"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* incantation ribbon */}
      <div className="relative mt-16 overflow-hidden border-y border-gold/10 py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {[...incantation, ...incantation].map((t, i) => (
            <span
              key={i}
              className="font-display text-sm uppercase tracking-[0.2em] text-parchment-faint transition-colors hover:text-gold"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
