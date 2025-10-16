export const VALIDATION_MESSAGES = {
  // Required field messages
  REQUIRED: (fieldName: string) => `${fieldName} is required`,

  // Email validation
  INVALID_EMAIL: "Please enter a valid email address",

  // Password validation
  PASSWORD_TOO_SHORT: (minLength: number) =>
    `Password must be at least ${minLength} characters`,
  PASSWORD_REQUIREMENTS:
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",

  // Confirm password
  PASSWORD_MISMATCH: "Passwords do not match",
  CONFIRM_PASSWORD_REQUIRED: "Please confirm your password",

  // Full name
  FULLNAME_TOO_SHORT: (minLength: number) =>
    `Full name must be at least ${minLength} characters`,

  // Generic
  FIELD_TOO_SHORT: (fieldName: string, minLength: number) =>
    `${fieldName} must be at least ${minLength} characters`,
} as const;

export const SUCCESS_MESSAGES = {
  REGISTRATION_SUCCESS: "Đăng kí thành công!",
  LOGIN_SUCCESS: "Đăng nhập thành công!",
  PASSWORD_RESET_SENT:
    "Liên kết đặt lại mật khẩu đã được gửi đến email của bạn",
} as const;

export const INFO_MESSAGES = {
  FORGOT_PASSWORD_INSTRUCTION:
    "Bạn hãy điền email đã đăng ký vào ô dưới đây nhé",
  WELCOME_MESSAGE: "Xin chào quý phụ huynh!",
  WELCOME_SUBTITLE: "Chúc quý phụ huynh một ngày tốt lành",
} as const;
