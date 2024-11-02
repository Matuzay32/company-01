import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Zap,
  Shield,
  BarChart4,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PricingHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Potencia tu negocio con nuestros planes
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Descubre soluciones flexibles y escalables diseñadas para impulsar
              tu crecimiento y maximizar tu éxito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" passHref>
                <Button
                  variant={'gradient'}
                  className="group w-full sm:w-auto text-lg"
                  size="lg"
                >
                  Ver planes y precios
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-lg"
                size="lg"
              >
                Solicitar demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Características destacadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="rounded-full bg-blue-500/10 p-2 mr-3">
                      <Zap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Rendimiento optimizado</h3>
                      <p className="text-sm text-gray-400">
                        Mejora la velocidad y eficiencia de tus operaciones
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-500/10 p-2 mr-3">
                      <Shield className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Seguridad avanzada</h3>
                      <p className="text-sm text-gray-400">
                        Protección de nivel empresarial para tus datos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-purple-500/10 p-2 mr-3">
                      <BarChart4 className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Análisis detallados</h3>
                      <p className="text-sm text-gray-400">
                        Obtén insights valiosos para tomar mejores decisiones
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/pricing" passHref className="w-full">
                  <Button className="w-full" variant="secondary">
                    Comparar todos los planes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </section>
  );
}
