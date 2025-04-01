'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/Buttons/v1/button';
import CreditCard3D from '../3d/CreditCard3D';
import CustomSection from '../ui/Others/CustomSection';
import ModalCalendly from '../Modals/ModalCalendly';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for your project start-up',
      price: { monthly: 20, annual: 15 },
      features: ['Website', 'Landing page', 'Web design', '5 hours support'],
    },
    {
      name: 'Pro',
      description: 'For growing businesses and teams',
      price: { monthly: 39, annual: 30 },
      features: [
        'Up to 3 customized websites',
        '2 advanced landing pages with SEO optimization',
        'Google Analytics integration',
        'Web design',
        'Projects planning',
        '8 hours support',
        'Outsourcing',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description:
        'Advanced scalability, innovation and premium support for your business.',
      price: { monthly: "Let's talk", annual: "Let's talk" },
      features: [
        'Unlimited websites with advanced functionalities',
        'Unlimited Landing pages optimized for conversion',
        'Unlimited web designs',
        'Advanced integrations with custom tools and APIs',
        'Custom support',
        'Tailor-made strategies: design, UX/UI and digital marketing consultancy',
        'Ongoing management and maintenance of all projects',
        'Outsourcing',
        'Need anything else? contact us',
      ],
    },
  ];

  const featureComparison = [
    {
      feature: 'Web sites',
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Support',
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Projects planning',
      starter: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Outsourcing',
      starter: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Unlimited websites',
      starter: false,
      pro: false,
      enterprise: true,
    },
    {
      feature: 'Unlimited landing pages',
      starter: false,
      pro: false,
      enterprise: true,
    },
  ];

  const faqs = [
    {
      question: 'What kind of digital products and services do we offer?',
      answer:
        'Our products and services include custom website design and development, optimized landing page design and development, custom software development, and Staff Augmentation+Outsourcing.',
    },
    {
      question:
        'Can I request changes or adjustments after the project is finished?',
      answer:
        'Of course! We offer a post-delivery review period. In addition, we have maintenance and upgrade plans for those who wish to optimize or add new features in the future.',
    },
    {
      question: 'How involved can I be in the design and development process?',
      answer:
        'We work closely with each client and throughout the project, providing regular updates and reviews to ensure that every detail is aligned with your expectations.',
    },
    {
      question: 'Do you offer customized services?',
      answer:
        'Yes, each of our services is fully customizable. We adapt each project to the needs and style of your brand, ensuring a unique and authentic result.',
    },
    {
      question: 'Can you handle the maintenance of my website or application?',
      answer:
        'We offer ongoing maintenance services so that your site or application is always up to date and running optimally. This includes technical support, content updates and security monitoring.',
    },
    {
      question: 'What is the cost of a landing page or website?',
      answer:
        'Cost varies according to complexity and customization. We offer customized quotes for each project as well as pre-designed packages with flexible payment options.',
    },
    {
      question: 'How is payment handled and do you have financing options?',
      answer:
        'To ensure transparency and convenience, we accept payments in different modalities, generally divided into milestones: a down payment, an interim payment and the final balance upon completion of the project. We also offer financing options for larger projects.',
    },
    {
      question: 'Why should I choose your agency and not another?',
      answer:
        'We differentiate ourselves by our focus on innovation, customization and constant support throughout the process. We ensure that each project is unique and has a real impact on the growth of your business.',
    },
  ];
  const renderCellContent = (value: boolean) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="h-5 w-5 text-primary" /> : '—';
    }
    return value;
  };
  return (
    <div className="md:mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-black">
      {/* Pricing Header */}
      <motion.div
        className="text-center mb-16 mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Choose the best plan to boost your growth
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best suits your needs and scale as you grow
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span
            className={`text-lg ${
              !isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'
            }`}
          >
            Monthly
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
            yearly{' '}
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
                plan.popular ? 'border shadow-lg md:scale-105' : ''
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
                    Most Popular
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
                      /month
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
                <Button
                  className="w-full text-lg py-6 "
                  variant={'outline'}
                  onClick={handleOpenModal}
                >
                  Schedule a meet
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <CustomSection mt="mt-40">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Compare</h3>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Features</TableHead>
                  <TableHead>Starter</TableHead>
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
                    <TableCell>{renderCellContent(item.starter)}</TableCell>
                    <TableCell>{renderCellContent(item.pro)}</TableCell>
                    <TableCell>{renderCellContent(item.enterprise)}</TableCell>
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
          <h3 className="text-3xl font-bold text-center mb-8">FAQ</h3>
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
      <CustomSection>
        <CreditCard3D></CreditCard3D>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join our selected group of clients
          </p>
          <Button
            size="lg"
            variant={'outline'}
            className="text-lg py-6 px-8 "
            onClick={() => router.push('/contact')}
          >
            Join
          </Button>
        </motion.div>
      </CustomSection>
      <ModalCalendly
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        url="https://calendly.com/digenovalucas/vortexpulse-interview"
      />
    </div>
  );
}
