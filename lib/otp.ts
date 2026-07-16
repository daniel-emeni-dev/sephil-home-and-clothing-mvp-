const MOCK_OTP = "123456";

export async function sendOtp(
  email: string
) {
  console.log(
    `[otp] Sending OTP to ${email}`
  );

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return true;
}

export async function verifyOtp(
  code: string
) {
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  return code === MOCK_OTP;
}