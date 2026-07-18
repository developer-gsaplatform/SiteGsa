import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Input, Textarea, Select } from "./../../common/FormField";
import Button from "./../../ui/Button";

export default function ContactForm() {
  const { t } = useTranslation();
  const contactSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(1, t("contact.validation.nameRequired"))
          .min(3, t("contact.validation.nameMin")),
        email: z
          .string()
          .min(1, t("contact.validation.emailRequired"))
          .email(t("contact.validation.emailInvalid")),
        phone: z
          .string()
          .min(1, t("contact.validation.phoneRequired"))
          .regex(/^[\d\s\-\+\(\)]+$/, t("contact.validation.phoneInvalid"))
          .min(9, t("contact.validation.phoneMin")),
        topic: z.string().min(1, t("contact.validation.topicRequired")),
        message: z
          .string()
          .min(1, t("contact.validation.messageRequired"))
          .min(10, t("contact.validation.messageMin")),
      }),
    [t],
  );

  const interests = useMemo(() => {
    const values = t("contact.interests", { returnObjects: true });
    return Array.isArray(values) ? values : [];
  }, [t]);

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
    const toastId = toast.loading(t("contact.toasts.preparing"));
    try {
      const emailRecipient = "geral@gsaplatform.co";
      const subjectText = `[GSA Platform] - ${values.topic}`;
      const bodyText =
        `Olá GSAPlatform,\n\n` +
        `Recebeu uma nova mensagem do formulário de contactos do GSA Platform:\n\n` +
        `-----------------------------------------\n` +
        `Nome completo: ${values.name}\n` +
        `E-mail: ${values.email}\n` +
        `Telefone: ${values.phone}\n` +
        `Interesse: ${values.topic}\n` +
        `-----------------------------------------\n\n` +
        `Mensagem:\n${values.message}\n\n` +
        `Atentamente,\n` +
        `${values.name}`;

      const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

      window.location.assign(mailtoUrl);

      toast.success(t("contact.toasts.success"), {
        id: toastId,
        duration: 5000,
      });
      reset();
    } catch {
      toast.error(t("contact.toasts.error"), {
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
          label={t("contact.form.name")}
          type="text"
          placeholder={t("contact.form.namePlaceholder")}
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          label={t("contact.form.email")}
          type="email"
          placeholder={t("contact.form.emailPlaceholder")}
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="phone"
          label={t("contact.form.phone")}
          type="tel"
          placeholder={t("contact.form.phonePlaceholder")}
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Select
          id="topic"
          label={t("contact.form.topic")}
          placeholder={t("contact.form.selectPlaceholder")}
          options={interests}
          required
          error={errors.topic?.message}
          {...register("topic")}
        />
      </div>

      <Textarea
        id="message"
        label={t("contact.form.message")}
        placeholder={t("contact.form.messagePlaceholder")}
        required
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />

      <Button type="submit" loading={isSubmitting}>
        {t("contact.form.submit")}
      </Button>
    </motion.form>
  );
}
