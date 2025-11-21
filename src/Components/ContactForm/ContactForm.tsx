import { useState, type FormEvent } from 'react';
import './ContactForm.css';

interface ContactFormProps {
    onSubmit?: (data: FormData) => void;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Create mailto link with form data
            const mailtoLink = `mailto:marxcuadros24@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
            )}`;

            // Open mailto link
            window.location.href = mailtoLink;

            // Call custom onSubmit if provided
            if (onSubmit) {
                onSubmit(formData);
            }

            setSubmitStatus('success');

            // Reset form after 2 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setSubmitStatus('idle');
            }, 2000);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="¿En qué puedo ayudarte?"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        disabled={isSubmitting}
                    />
                </div>

                <button
                    type="submit"
                    className={`submit-btn ${submitStatus}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="spinner"></span>
                            Enviando...
                        </>
                    ) : submitStatus === 'success' ? (
                        <>
                            <span className="checkmark">✓</span>
                            ¡Enviado!
                        </>
                    ) : submitStatus === 'error' ? (
                        'Error - Intenta de nuevo'
                    ) : (
                        'Enviar Mensaje'
                    )}
                </button>

                {submitStatus === 'success' && (
                    <div className="success-message">
                        ¡Gracias por contactarme! Te responderé pronto.
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
