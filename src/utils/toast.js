import { toast } from 'sonner';

export const showSuccess = (message) => {
  toast.success(message || 'Operação concluída com sucesso!');
};

export const showError = (message) => {
  toast.error(message || 'Algo correu mal. Tente novamente.');
};

export const showWarning = (message) => {
  toast.warning(message || 'Aviso!');
};

export const showInfo = (message) => {
  toast.info(message || 'Informação');
};

export const showLoading = (message) => {
  return toast.loading(message || 'Carregando...');
};

export const dismissToast = (id) => {
  toast.dismiss(id);
};

export const updateToast = (id, options) => {
  toast.success(options.message, {
    id,
    ...options,
  });
};
