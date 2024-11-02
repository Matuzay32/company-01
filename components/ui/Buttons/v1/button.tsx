import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Definir las variantes de botón
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '', // Dejar vacío para personalización
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string; // Href para enlaces
  title?: string; // Título del botón o enlace
  gradientStart?: string; // Color de inicio del gradiente
  gradientEnd?: string; // Color final del gradiente
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement, // Refs para <button> o <a>
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      title,
      gradientStart,
      gradientEnd,
      ...props
    },
    ref
  ) => {
    // Si se pasa 'asChild', usará el Slot, si se pasa href será <a>, sino será <button>
    const Comp: React.ElementType = asChild ? Slot : href ? 'a' : 'button';

    const gradientClasses =
      gradientStart && gradientEnd
        ? `bg-gradient-to-br from-[${gradientStart}] to-[${gradientEnd}]`
        : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          gradientClasses // Añadir gradientes personalizados
        )}
        ref={ref}
        href={href} // Solo se aplica href si es un <a>
        title={title}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
