interface Env {
  RESEND_API_KEY: string;
}

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body: ContactRequest = await context.request.json();
    const { name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Nombre, email y mensaje son requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Invent Agency <hello@inventagency.co>",
        to: ["hello@inventagency.co"],
        reply_to: email,
        subject: `Nuevo proyecto de ${company || name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0A0A0A; padding: 32px; border-bottom: 2px solid #00D4FF;">
              <h1 style="color: #FFFFFF; margin: 0; font-size: 24px;">
                <span style="color: #FFFFFF;">invent</span>
                <span style="color: #00D4FF;">agency</span>
              </h1>
            </div>
            <div style="background: #111111; padding: 32px; color: #FFFFFF;">
              <h2 style="color: #00D4FF; margin-top: 0;">Nuevo mensaje de contacto</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #00D4FF;">${email}</a></p>
              <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
              <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
              <p><strong>Mensaje:</strong></p>
              <p style="white-space: pre-wrap; color: #CCCCCC;">${message}</p>
            </div>
            <div style="background: #0A0A0A; padding: 16px; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                Este mensaje fue enviado desde el formulario de contacto de inventagency.co
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend error:", errorData);
      return new Response(
        JSON.stringify({ error: "Error al enviar el email" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
