import {
  ArrowRight,
  BarChart4,
  Check,
  ChevronRight,
  Shield,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/Buttons/v2/button";
import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Enhance your business with our plans
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Discover flexible and scalable solutions designed to drive your
              growth and maximize your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
              <Link href="/pricing" passHref>
                <Button
                  variant={"gradient"}
                  className="group w-full sm:w-auto text-lg"
                  size="lg"
                >
                  Plans & prices
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-10">
                  <li className="flex items-center">
                    <div className="rounded-full bg-blue-500/10 p-2 mr-3 w-1/12">
                      <Zap className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="flex flex-col justify-center w-11/12">
                      <h3 className="font-semibold">Optimized performance</h3>
                      <p className="text-sm text-gray-400">
                        Enhance the performance of your operations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-green-500/10 p-2 mr-3 w-1/12">
                      <Shield className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex flex-col justify-center w-11/12">
                      <h3 className="font-semibold w-full">
                        Advanced security
                      </h3>
                      <p className="text-sm text-gray-400">Protect your data</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-purple-500/10 p-2 mr-3 w-1/12">
                      <BarChart4 className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="flex flex-col justify-center w-11/12">
                      <h3 className="font-semibold">Actionable Insights</h3>
                      <p className="text-sm text-gray-400">
                        Empower your strategy with insights
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/pricing" passHref className="w-full">
                  <Button className="w-full" variant="secondary">
                    Compare all the plans
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
