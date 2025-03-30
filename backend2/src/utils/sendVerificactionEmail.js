import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, verificationCode) => {
    try {
        // Configurar el transporte SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail", // O usa SMTP de otro proveedor
            auth: {
                user: process.env.EMAIL_USER, // Tu email
                pass: process.env.EMAIL_PASS, // Contraseña o App Password
            },
        });

        // Configurar el contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Verificación de cuenta",
            html: `
                <h2>Verificación de cuenta</h2>
                <p>Tu código de verificación es: <strong>${verificationCode}</strong></p>
                <p>Por favor, ingrésalo en la aplicación para completar tu registro.</p>
            `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);
        console.log(`Correo de verificación enviado a ${email}`);
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        throw new Error("No se pudo enviar el correo de verificación");
    }
};
