import { ReactNode, useEffect, useState, useCallback } from "react";
import { LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Card data interface
export interface StackingCardData {
  label: string;
  title: string;
  description: string;
  color?: string;
  icon: LucideIcon;
  image: string;
}

// Individual Card Component for rotating stack
interface RotatingCardProps extends StackingCardData {
  index: number;
  totalCards: number;
  activeIndex: number;
}

const RotatingCard = ({
  label,
  title,
  description,
  color = "hsl(var(--primary))",
  icon: Icon,
  index,
  totalCards,
  activeIndex,
  image,
}: RotatingCardProps) => {
  // Calculate position relative to active card
  const getRelativePosition = () => {
    const diff = index - activeIndex;
    if (diff === 0) return 0; // Active card (front)
    if (diff > 0 || (diff < 0 && Math.abs(diff) > totalCards / 2)) {
      // Cards behind (stacked up)
      const position = diff > 0 ? diff : totalCards + diff;
      return position;
    }
    return totalCards + diff; // Wrap around
  };

  const position = getRelativePosition();
  const isActive = position === 0;

  // Progressive offset for stacked cards behind - smaller on mobile
  const yOffset = position * -16; // Move up progressively
  const scale = 1 - position * 0.03; // Scale down slightly
  const zIndex = totalCards - position;
  const opacity = position > 3 ? 0 : 1 - position * 0.15;

  return (
    <motion.div
      className="absolute inset-0 w-full origin-bottom"
      initial={false}
      animate={{
        y: yOffset,
        scale: Math.max(0.85, scale),
        zIndex,
        opacity: Math.max(0, opacity),
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`relative overflow-hidden bg-card p-1.5 md:p-2 rounded-[24px] md:rounded-[42px] border border-border/30 transition-all duration-300 shadow-2xl ${
          isActive ? "border-border/60" : ""
        }`}
      >
        <div className="relative z-10 bg-muted/50 rounded-[18px] md:rounded-[34px] flex flex-col overflow-hidden min-h-[380px] md:min-h-[340px] md:flex-row">
          {/* Column 1: Image Section */}
          <div className="relative w-full md:w-2/5 h-[160px] md:h-auto md:min-h-full overflow-hidden border-b md:border-b-0 md:border-r border-border/30 bg-muted/50">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-out p-6 md:p-8"
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 w-9 h-9 md:w-10 md:h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center border border-border/50 z-20">
              <Icon size={18} className="md:hidden" style={{ color }} />
              <Icon size={20} className="hidden md:block" style={{ color }} />
            </div>
          </div>

          {/* Column 2: Text Content Section */}
          <div className="relative flex-1 p-6 md:p-10 flex flex-col justify-center gap-3 md:gap-4 bg-muted/50">
            <div className="flex flex-col gap-1.5 md:gap-2">
              <span className="text-foreground text-[10px] md:text-xs font-medium uppercase tracking-widest opacity-40">
                {label}
              </span>
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-display font-medium tracking-tight leading-tight"
                style={{ color }}
              >
                {title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {description}
            </p>

            {/* Subtle Gradient Flare */}
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 blur-[60px] pointer-events-none"
              style={{ backgroundColor: color }}
            />
          </div>

          {/* Decorative Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`rotating-card-grid-${index}`}
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#rotating-card-grid-${index})`}
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Navigation Controls with Arrows
interface NavigationControlsProps {
  totalCards: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  isPaused: boolean;
  autoRotateInterval: number;
}

const NavigationControls = ({
  totalCards,
  activeIndex,
  onSelect,
  onPrev,
  onNext,
  isPaused,
  autoRotateInterval,
}: NavigationControlsProps) => {
  return (
    <div className="flex items-center gap-4 mt-8">
      {/* Arrow Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-all duration-200"
          aria-label="Previous card"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-all duration-200"
          aria-label="Next card"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? "w-10 bg-muted"
                : "w-6 bg-muted hover:bg-muted/80"
            }`}
            aria-label={`Go to card ${index + 1}`}
          >
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 bg-primary rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? 0 : 1 }}
                transition={{
                  duration: autoRotateInterval / 1000,
                  ease: "linear",
                }}
                key={activeIndex}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Stacking Cards Section Component
interface StackingCardsSectionProps {
  badge: string;
  title: ReactNode;
  description: string;
  cards: StackingCardData[];
  supportingText?: ReactNode;
  className?: string;
  autoRotate?: boolean;
  autoRotateInterval?: number;
}

export const StackingCardsSection = ({
  badge,
  title,
  description,
  cards,
  supportingText,
  className = "",
  autoRotate = true,
  autoRotateInterval = 2500,
}: StackingCardsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate cards
  useEffect(() => {
    if (!autoRotate || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, cards.length, autoRotateInterval]);

  const handleCardSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoRotateInterval * 2);
  }, [autoRotateInterval]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoRotateInterval * 2);
  }, [cards.length, autoRotateInterval]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoRotateInterval * 2);
  }, [cards.length, autoRotateInterval]);

  // Card heights for the container - different for mobile vs desktop
  const mobileCardHeight = 420; // Taller on mobile due to stacked layout
  const desktopCardHeight = 360;

  return (
    <section className={`py-16 md:py-28 ${className}`}>
      <div className="container-width px-4 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">
        {/* Left Column: Header */}
        <div className="flex-1 flex flex-col gap-5 lg:gap-8 lg:max-w-[440px] self-start w-full">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-3.5 md:py-2 rounded-full bg-card border border-border/30 w-fit relative overflow-hidden">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
              <span className="text-xs md:text-sm font-medium tracking-wide text-foreground">
                {badge}
              </span>
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-medium leading-[1.1] tracking-tight text-foreground">
              {title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Navigation Controls */}
          <NavigationControls
            totalCards={cards.length}
            activeIndex={activeIndex}
            onSelect={handleCardSelect}
            onPrev={handlePrev}
            onNext={handleNext}
            isPaused={isPaused}
            autoRotateInterval={autoRotateInterval}
          />

          {/* Optional Supporting Text */}
          {supportingText && (
            <div className="text-muted-foreground text-sm mt-2 lg:mt-4">
              {supportingText}
            </div>
          )}
        </div>

        {/* Right Column: Rotating Card Stack */}
        <div
          className="flex-[1.2] w-full relative z-10"
          style={{
            perspective: "1000px",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile: Fixed height container */}
          <div 
            className="relative w-full"
            style={{
              height: `${mobileCardHeight + (cards.length - 1) * 16 + 20}px`,
            }}
          >
            <div 
              className="absolute inset-x-0 bottom-0 lg:hidden"
              style={{ height: `${mobileCardHeight}px` }}
            >
              {cards.map((card, index) => (
                <RotatingCard
                  key={index}
                  {...card}
                  index={index}
                  totalCards={cards.length}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
            {/* Desktop: Same as before */}
            <div 
              className="absolute inset-x-0 bottom-0 hidden lg:block"
              style={{ height: `${desktopCardHeight}px` }}
            >
              {cards.map((card, index) => (
                <RotatingCard
                  key={index}
                  {...card}
                  index={index}
                  totalCards={cards.length}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackingCardsSection;
