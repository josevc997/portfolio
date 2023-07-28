import { Resend } from "resend";

const resend = new Resend("re_Gp3GG1B8_DHurAfEk4Vs9Wh9PqcCKyKQQ");

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = await resend.emails.send({
      from: `${body.contactForm.firstName} ${body.contactForm.lastName} <onboarding@resend.dev>`,
      //   from: `${body.contactForm.firstName} ${body.contactForm.lastName} <${body.contactForm.email}>`,
      to: ["19josevalencia97@gmail.com"],
      subject: "Contact Form Jose Valencia",
      html: `<strong>${body.contactForm.message}</strong>`,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
