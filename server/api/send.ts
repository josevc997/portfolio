import { Resend } from "resend";

const resend = new Resend("re_Gp3GG1B8_DHurAfEk4Vs9Wh9PqcCKyKQQ");

const email_to = process.env.EMAIL_TO || "";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = await resend.emails.send({
      from: `${body.contactForm.firstName} ${body.contactForm.lastName} <onboarding@resend.dev>`,
      to: [email_to],
      subject: "Contact Form Jose Valencia",
      html: `<div role="article" aria-roledescription="email" aria-label="Confirm your email address" lang="en">
      <div style="padding-right: 16px !important; padding-left: 16px !important; background-color: #f8fafc; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif">
        <table align="center" cellpadding="0" cellspacing="0" role="none">
          <tr>
            <td style="width: 552px; max-width: 100%">
              <table style="margin-top: 80px; margin-bottom: 80px; width: 100%" cellpadding="0" cellspacing="0" role="none">
                <tr>
                  <td style="padding-left: 24px !important; padding-right: 24px !important; border-radius: 4px; background-color: #fff; padding: 48px; font-size: 16px; color: #334155; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                    <h1 style="line-height: 32px !important; margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #000">
                      Hola,
                    </h1>
                    <p style="margin: 0;">
                      <span style="font-weight: 700">Nombre:</span> ${body.contactForm.firstName} ${body.contactForm.lastName}
                    </p>
                    <p style="margin: 0;">
                      <span style="font-weight: 700;">Email:</span> ${body.contactForm.email}
                    </p>
                    <p style="margin: 0;">
                      <span style="font-weight: 700;">País:</span> ${body.contactForm.country}
                    </p>
                    <br>
                    <br>
                    <p>
                      <span style="font-weight: 700;">Mensaje:</span>
                    </p>
                    <p style="margin: 0; line-height: 24px">
                    ${body.contactForm.message}
                    </p>
                  </td>
                </tr>
                <tr role="separator">
                  <td style="line-height: 48px">&zwj;</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>`,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
