'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { leadService } from '@/services/lead.service';

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const handleFormSubmit = async (data: ContactFormValues) => {
        try {
            await leadService.createLead({
                ...data,
                spaceType: 'General',
                enquiredFor: 'Contact Page',
            });
            toast.success('Thank you! We will contact you soon.');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="grid gap-10 md:grid-cols-2 md:gap-16">
            {/* Left: Simple Contact Form */}
            <div>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                            <input
                                {...register('name')}
                                type="text"
                                placeholder="Name"
                                aria-label="Name"
                                className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-gray-900 focus:border-primary-300 focus:outline-none ${
                                    errors.name ? 'border-red-500' : 'border-gray-200'
                                }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register('phone')}
                                type="tel"
                                placeholder="Phone"
                                aria-label="Phone"
                                className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-gray-900 focus:border-primary-300 focus:outline-none ${
                                    errors.phone ? 'border-red-500' : 'border-gray-200'
                                }`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-gray-900 focus:border-primary-300 focus:outline-none ${
                                errors.email ? 'border-red-500' : 'border-gray-200'
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                    </div>

                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        rows={8}
                        aria-label="Message"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary-300 focus:outline-none resize-none"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 w-full bg-primary-400 rounded-md text-white font-medium hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col gap-6">
                <p className="text-zinc-700 leading-relaxed">
                    Feel free to contact us if you have any questions, concerns, or need assistance
                    with anything at all. We are here to help and are always happy to provide
                    support. Your satisfaction are our top priorities.
                </p>

                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center">
                        <Phone className="text-primary-500 font-bold" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Phone Number</p>
                        <p className="text-zinc-700">+123 456 7890</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center">
                        <Mail className="text-primary-500 font-bold" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Email Address</p>
                        <p className="text-zinc-700">info@coworkkerala.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary-100 flex items-center justify-center">
                        <MapPin className="text-primary-500 font-bold" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Address</p>
                        <p className="text-zinc-700">
                            123 Wanderer Street, City Name, State Name, Nation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
