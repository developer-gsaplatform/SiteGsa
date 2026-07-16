import { z } from "zod";
export const contactData = {
  label: "Fale Connosco",
  title: "Vamos construir algo robusto",
  desc: "Descreva o seu desafio. Respondemos em menos de 24 horas com uma proposta inicial sem compromisso.",
  interests: [
    "Plataforma Documental",
    "Contratos & Compliance",
    "Logística, Património & Manutenção",
    "Operações Mineiras",
    "Gestão Hospitalar",
    "PA2 — Procurement",
    "Plataforma Agro",
    "Mombange",
    "+1$aLo",
    "Integrações / Dados / Segurança",
    "Estágios-Pro",
    "Outro",
  ],
  info: {
    email: "edson.2m.caolo@gmail.com",
    phone: "923652110",
    hq: "Luanda, Angola",
    schedule: "Seg–Sex · 08h00–18h00 · Suporte 24/7",
  },
};

export const fieldStyles = {
  input:
    "w-full p-[13px_16px] bg-[#0a0a0a] border border-dashed border-gsa-gray-2 text-[#f5f5f0] text-[0.92rem] transition-colors duration-200 outline-none focus:border-[#9B7BC4] focus:border-solid placeholder-[#6c677d]",

  error: "border-red-500 border-solid",

  label:
    "block text-[0.72rem] font-bold text-[#9B7BC4] mb-2 uppercase tracking-[0.12em] ",

  errorMessage: "text-red-500 text-[0.75rem] mt-1.5",
};

export const INTERESTS = [
  "Plataforma Documental",
  "Contratos & Compliance",
  "Logística, Património & Manutenção",
  "Operações Mineiras",
  "Gestão Hospitalar",
  "PA2 — Procurement",
  "Plataforma Agro",
  "Mombange",
  "+1SaLo",
  "Integrações / Dados / Segurança",
  "Estágios-Pro",
  "Outro",
];

export const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").min(3, "Mínimo 3 caracteres"),

  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),

  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(/^[\d\s\-\+\(\)]+$/, "Telefone inválido")
    .min(9, "Mínimo 9 dígitos"),

  topic: z.string().min(1, "Assunto é obrigatório"),

  message: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .min(10, "Mínimo 10 caracteres"),
});
