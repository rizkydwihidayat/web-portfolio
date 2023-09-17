export const formConfig = {
  validateMessages: {
    required: "Silakan memasukkan ${label} Anda.",
    whitespace: " Silakan memasukkan ${label} Anda.",
    string: {
      min: "${label} minimal ${min} karakter.",
      max: "${label} maksimal ${max} karakter.",
      range: "${label} harus antara ${min} sampai ${max} karakter.",
    },
    types: {
      email:
        "${label} yang Anda masukkan tidak valid, silakan memeriksa data Anda kembali.",
      number:
        "${label} yang Anda masukkan tidak valid, silakan memeriksa data Anda kembali.",
    },
    pattern: {
      mismatch:
        "${label} yang Anda masukkan tidak valid, silakan memeriksa data Anda kembali.",
    },
  },
  requiredMark: true,
};
