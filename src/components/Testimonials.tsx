import './Testimonials.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1
    },
    [Autoplay({ delay: 9000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I needed urgent funds for a medical emergency and Paycoin made it incredibly easy. The application took just 5 minutes, and I received approval within an hour. The entire process was smooth and stress-free. Highly recommend!",
      authorName: "Sarah Mitchell",
      authorRole: "Small Business Owner",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      text: "Getting a loan through Paycoin was the easiest financial transaction I've ever done. No complicated paperwork, no long waiting times. Just a straightforward process and quick approval. The funds were in my account the same day!",
      authorName: "Michael Chen",
      authorRole: "Entrepreneur",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      text: "Paycoin transformed my experience with loans. The interface is user-friendly, and the transparency about terms and rates gave me confidence. Within minutes, I had my loan approved. No hidden fees, no surprises. Just excellent service.",
      authorName: "Emily Rodriguez",
      authorRole: "Freelance Designer",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      text: "When I needed to expand my business, Paycoin was there for me. The loan application was so simple, and the approval process was incredibly fast. Their customer support answered all my questions promptly. Best loan experience ever!",
      authorName: "David Thompson",
      authorRole: "Restaurant Owner",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      text: "I was skeptical about online loans until I tried Paycoin. The entire process was seamless from start to finish. No hassle, no endless documentation. I got approved in less than 30 minutes and received my funds the next day. Absolutely impressed!",
      authorName: "Jennifer Williams",
      authorRole: "Marketing Consultant",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      text: "Paycoin made getting a loan effortless. I applied from my phone during lunch break, got approved before I finished my coffee, and had the money in my account by evening. The smooth process and quick turnaround saved me when I needed it most.",
      authorName: "Robert Anderson",
      authorRole: "Teacher",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
    },
    {
      id: 7,
      text: "After being turned down by traditional banks, Paycoin approved my loan application quickly and easily. The flexible repayment options and competitive rates made it perfect for my situation. Finally, a loan service that actually works for people!",
      authorName: "Amanda Foster",
      authorRole: "Graphic Designer",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop"
    },
    {
      id: 8,
      text: "Paycoin exceeded all my expectations. The loan process was straightforward, transparent, and incredibly fast. No hidden charges, no complicated terms. Just a simple, smooth experience that got me the funds I needed within hours. Outstanding service!",
      authorName: "James Patterson",
      authorRole: "Fitness Coach",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    }
  ];

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-label">Customers Testimonials</div>
          <h2 className="testimonials-title">Customers Testimonials</h2>
        </div>
        
        <div className="testimonials-carousel">
          <div className="testimonials-viewport" ref={emblaRef}>
            <div className="testimonials-container-slider">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.authorImage} 
                        alt={testimonial.authorName}
                        className="testimonial-avatar"
                      />
                      <div className="testimonial-author-info">
                        <h4 className="testimonial-author-name">{testimonial.authorName}</h4>
                        <p className="testimonial-author-role">{testimonial.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonials-dots">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`testimonials-dot ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => onDotButtonClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
