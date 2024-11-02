'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CustomSection from '../ui/Others/CustomSection';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Free',
      description: 'Perfecto para pruebas y proyectos pequeños',
      price: { monthly: 0, annual: 0 },
      features: [
        '100 emails/día',
        '1 miembro del equipo',
        'Análisis básico',
        'Tiempo de respuesta de soporte de 24h',
      ],
    },
    {
      name: 'Pro',
      description: 'Para negocios y equipos en crecimiento',
      price: { monthly: 20, annual: 15 },
      features: [
        '50,000 emails/mes',
        'Miembros de equipo ilimitados',
        'Análisis avanzado',
        'Tiempo de respuesta de soporte de 4h',
        'Dominios personalizados',
        'Plantillas de email',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Para operaciones de email a gran escala',
      price: { monthly: 'Personalizado', annual: 'Personalizado' },
      features: [
        'Volumen de email personalizado',
        'Soporte dedicado',
        'SLA',
        'Contratos personalizados',
        'Seguridad avanzada',
        'Envío prioritario',
      ],
    },
  ];

  const featureComparison = [
    {
      feature: 'Acceso a API de Email',
      free: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Dominios Personalizados',
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Plantillas de Email',
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Panel de Análisis',
      free: 'Básico',
      pro: 'Avanzado',
      enterprise: 'Personalizado',
    },
    {
      feature: 'Tiempo de Respuesta de Soporte',
      free: '24h',
      pro: '4h',
      enterprise: '1h',
    },
  ];

  const faqs = [
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer:
        'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejarán en tu próxima factura.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos todas las principales tarjetas de crédito y débito, así como PayPal para ciertos países.',
    },
    {
      question: '¿Ofrecen descuentos para organizaciones sin fines de lucro?',
      answer:
        'Sí, ofrecemos descuentos especiales para organizaciones sin fines de lucro verificadas. Por favor, contacta a nuestro equipo de ventas para más información.',
    },
    {
      question: '¿Cómo funciona el período de prueba?',
      answer:
        'Ofrecemos un período de prueba gratuito de 14 días para el plan Pro. No se requiere tarjeta de crédito para comenzar.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-black">
      {/* Pricing Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Precios simples y transparentes
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades y escala a medida
          que creces
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span
            className={`text-lg ${
              !isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Mensual
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]"
          />
          <span
            className={`text-lg ${
              isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Anual{' '}
            <span className="text-sm font-normal text-green-500">
              (Ahorra 25%)
            </span>
          </span>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`flex flex-col h-full ${
                plan.popular ? 'border shadow-lg scale-105' : ''
              }`}
            >
              <div
                aria-hidden="true"
                className="left-1/2 top-0 w-[300px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, #FBD38D 50%, rgba(0, 0, 0, 0) 100%)`,
                }}
              ></div>{' '}
              <CardHeader>
                {plan.popular && (
                  <div className="text-sm font-medium  mb-2  py-1 px-3 rounded-full w-fit">
                    Más Popular
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    {typeof plan.price[isAnnual ? 'annual' : 'monthly'] ===
                    'number'
                      ? `$${plan.price[isAnnual ? 'annual' : 'monthly']}`
                      : plan.price[isAnnual ? 'annual' : 'monthly']}
                  </span>
                  {typeof plan.price[isAnnual ? 'annual' : 'monthly'] ===
                    'number' && (
                    <span className="text-muted-foreground ml-2 text-lg">
                      /mes
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg py-6 " variant={'outline'}>
                  {plan.name === 'Enterprise'
                    ? 'Contactar Ventas'
                    : 'Comenzar Ahora'}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <CustomSection>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Comparación de Características
          </h3>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Característica</TableHead>
                  <TableHead>Free</TableHead>
                  <TableHead>Pro</TableHead>
                  <TableHead>Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureComparison.map((item) => (
                  <TableRow key={item.feature}>
                    <TableCell className="font-medium">
                      {item.feature}
                    </TableCell>
                    <TableCell>
                      {typeof item.free === 'boolean' ? (
                        item.free ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          '—'
                        )
                      ) : (
                        item.free
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.pro === 'boolean' ? (
                        item.pro ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          '—'
                        )
                      ) : (
                        item.pro
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          '—'
                        )
                      ) : (
                        item.enterprise
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </CustomSection>

      {/* FAQ Section */}
      <CustomSection>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Preguntas Frecuentes
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </CustomSection>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h3>
        <p className="text-xl text-muted-foreground mb-8">
          Únete a miles de desarrolladores que confían en nuestra plataforma
        </p>
        <Button size="lg" variant={'outline'} className="text-lg py-6 px-8 ">
          Prueba Gratis por 14 Días
        </Button>
      </motion.div>
    </div>
  );
}
