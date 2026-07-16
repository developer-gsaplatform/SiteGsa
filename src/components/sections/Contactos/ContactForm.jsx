import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { contactSchema, INTERESTS } from "./../../../config/contact";
import { Input, Textarea, Select } from "./../../common/FormField";
import Button from "./../../ui/Button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    const toastId = toast.loading("A preparar o seu e-mail...");
    try {
      const emailRecipient = "edson.2m.caolo@gmail.com";
      const subjectText = `[GSA Platform] - ${values.topic}`;
      const bodyText =
        `Olá GSAPlatform mail gestor,\n\n` +
        `Recebeu uma nova mensagem do formulário de contactos do GSA Platform:\n\n` +
        `-----------------------------------------\n` +
        `Nome completo: ${values.name}\n` +
        `E-mail: ${values.email}\n` +
        `Telefone: ${values.phone}\n` +
        `Interesse: ${values.topic}\n` +
        `-----------------------------------------\n\n` +
        `Mensagem:\n${values.message}\n\n` +
        `Atentamente,\n` +
        `GSA Platform Mailer`;

      const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

      window.location.assign(mailtoUrl);

      toast.success(
        "E-mail preparado! Por favor, envie a mensagem na sua aplicação de e-mail.",
        {
          id: toastId,
          duration: 5000,
        },
      );
      reset();
    } catch {
      toast.error("Erro ao processar o formulário. Tente novamente.", {
        id: toastId,
      });
    }
  }

  return (
    <motion.form
      id="contact-form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4.5 border border-dashed border-[#9B7BC4] p-[28px_32px] bg-[rgba(22,17,34,0.5)]"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="name"
          label="Nome completo"
          type="text"
          placeholder="O seu nome"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="email@empresa.ao"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="phone"
          label="Telefone"
          type="tel"
          placeholder="+244 ___ ___ ___"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Select
          id="topic"
          label="Interesse"
          options={INTERESTS}
          required
          error={errors.topic?.message}
          {...register("topic")}
        />
      </div>

      <Textarea
        id="message"
        label="Mensagem"
        placeholder="Conte-nos sobre o seu projecto"
        required
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />

      <Button type="submit" loading={isSubmitting}>
        Enviar Mensagem
      </Button>
    </motion.form>
  );
}
