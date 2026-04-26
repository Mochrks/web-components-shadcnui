import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const slides = [
  {
    title: 'Mountain View',
    image: '/carousel-mountain.png',
    description: 'Breathtaking peaks and valleys.',
  },
  {
    title: 'Ocean Sunset',
    image: '/carousel-ocean.png',
    description: 'Golden hour at the horizon.',
  },
  {
    title: 'City Lights',
    image: '/carousel-city.png',
    description: 'The vibrant pulse of the urban night.',
  },
  {
    title: 'Forest Trail',
    image: '/carousel-forest.png',
    description: 'Peaceful paths through ancient trees.',
  },
  {
    title: 'Desert Dunes',
    image: '/carousel-desert.png',
    description: 'Vast golden landscapes under the sun.',
  },
]

export function CarouselDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Carousel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-xl h-[300px] flex items-center justify-center text-white text-center group">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="relative z-10 p-6">
                        <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-white/90 mb-2">{slide.description}</p>
                        <p className="text-xs text-white/60">
                          Slide {index + 1} of {slides.length}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="px-12">
            <p className="text-sm text-muted-foreground mb-3">Multi-item Carousel (3 per view)</p>
            <Carousel className="w-full" opts={{ align: 'start' }}>
              <CarouselContent className="-ml-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 basis-1/3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
