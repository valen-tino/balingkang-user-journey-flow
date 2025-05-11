
import { 
  colors, 
  typography, 
  spacing, 
  borderRadius, 
  boxShadow,
  components,
  animations
} from '@/designSystem';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div className="flex flex-col items-center">
    <div 
      className="w-16 h-16 rounded-md shadow-md mb-2" 
      style={{ backgroundColor: color }}
    />
    <span className="text-xs text-gray-700 font-medium">{name}</span>
    <span className="text-xs text-gray-500">{color}</span>
  </div>
);

const TypographySample = ({ 
  size, 
  weight = 'normal',
  sample = 'Typography Example'
}: { 
  size: string; 
  weight?: string;
  sample?: string;
}) => (
  <div className="mb-3">
    <p style={{ 
      fontSize: typography.fontSize[size as keyof typeof typography.fontSize] || size, 
      fontWeight: typography.fontWeight[weight as keyof typeof typography.fontWeight] || weight
    }}>
      {sample}
    </p>
    <span className="text-xs text-gray-500">
      Size: {typography.fontSize[size as keyof typeof typography.fontSize] || size}, 
      Weight: {weight}
    </span>
  </div>
);

const SpacingSample = ({ size }: { size: string }) => {
  // Handle safe access to spacing values with proper type handling
  const spacingValue = (() => {
    // First check if it's a direct key in spacing
    if (size in spacing) {
      const key = size as unknown as keyof typeof spacing;
      const value = spacing[key];
      return typeof value === 'number' ? `${value}rem` : value as string;
    }
    // If not found, try converting to number and using that as key
    const numKey = Number(size);
    if (!isNaN(numKey) && numKey in spacing) {
      const value = spacing[numKey as keyof typeof spacing];
      return typeof value === 'number' ? `${value}rem` : value as string;
    }
    // Fallback
    return size;
  })();

  return (
    <div className="flex flex-col items-center mb-3">
      <div 
        className="bg-gray-300" 
        style={{ 
          width: '100px', 
          height: spacingValue
        }} 
      />
      <span className="text-xs text-gray-500 mt-1">
        {spacingValue}
      </span>
    </div>
  );
};

// New component for hover state demonstration
const HoverStateDemo = ({ 
  children, 
  normalState, 
  hoverState 
}: { 
  children: React.ReactNode; 
  normalState: React.CSSProperties; 
  hoverState: React.CSSProperties;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="transition-all duration-300 cursor-pointer p-4 rounded-md mb-2"
      style={isHovering ? { ...normalState, ...hoverState } : normalState}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      <div className="mt-2 text-xs">
        {isHovering ? 'Hover State' : 'Normal State'}
      </div>
    </div>
  );
};

const DesignSystemPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">
        Balingkang Design System
      </h1>

      {/* Color Palette Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch color={colors.confucius.green} name="Green" />
            <ColorSwatch color={colors.confucius.blue} name="Blue" />
            <ColorSwatch color={colors.confucius.red} name="Red" />
            <ColorSwatch color={colors.confucius.gold} name="Gold" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Light Variations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch color={colors.confucius.lightGreen} name="Light Green" />
            <ColorSwatch color={colors.confucius.lightBlue} name="Light Blue" />
            <ColorSwatch color={colors.confucius.lightRed} name="Light Red" />
            <ColorSwatch color={colors.confucius.lightGold} name="Light Gold" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">UI Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ColorSwatch color={colors.ui.background.primary} name="Bg Primary" />
            <ColorSwatch color={colors.ui.background.secondary} name="Bg Secondary" />
            <ColorSwatch color={colors.ui.text.primary} name="Text Primary" />
            <ColorSwatch color={colors.ui.text.secondary} name="Text Secondary" />
            <ColorSwatch color={colors.ui.border.light} name="Border Light" />
            <ColorSwatch color={colors.ui.border.medium} name="Border Medium" />
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Typography</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Font Sizes</h3>
          <TypographySample size="xs" sample="Extra Small Text" />
          <TypographySample size="sm" sample="Small Text" />
          <TypographySample size="base" sample="Base Text" />
          <TypographySample size="lg" sample="Large Text" />
          <TypographySample size="xl" sample="Extra Large Text" />
          <TypographySample size="2xl" sample="2XL Text" />
          <TypographySample size="3xl" sample="3XL Text" />
          <TypographySample size="4xl" sample="4XL Text" />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Font Weights</h3>
          <TypographySample size="xl" weight="normal" sample="Normal Weight" />
          <TypographySample size="xl" weight="medium" sample="Medium Weight" />
          <TypographySample size="xl" weight="semibold" sample="Semibold Weight" />
          <TypographySample size="xl" weight="bold" sample="Bold Weight" />
        </div>
      </section>

      {/* Spacing Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Spacing Scale</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SpacingSample size="1" />
          <SpacingSample size="2" />
          <SpacingSample size="4" />
          <SpacingSample size="8" />
          <SpacingSample size="12" />
          <SpacingSample size="16" />
        </div>
      </section>

      {/* Border Radius Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(borderRadius).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center">
              <div 
                className="w-16 h-16 bg-confucius-lightGreen border border-confucius-green mb-2"
                style={{ borderRadius: value }}
              />
              <span className="text-xs text-gray-700">{name}</span>
              <span className="text-xs text-gray-500">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hover States Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Hover States</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Button Hover States</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HoverStateDemo
              normalState={{ backgroundColor: colors.confucius.green, color: 'white' }}
              hoverState={{ backgroundColor: '#006f4b' }}
            >
              Primary Button Hover
            </HoverStateDemo>
            
            <HoverStateDemo
              normalState={{ backgroundColor: 'white', color: colors.confucius.green, border: `1px solid ${colors.confucius.green}` }}
              hoverState={{ backgroundColor: colors.confucius.lightGreen }}
            >
              Secondary Button Hover
            </HoverStateDemo>
            
            <HoverStateDemo
              normalState={{ backgroundColor: 'transparent', color: colors.ui.text.primary }}
              hoverState={{ backgroundColor: colors.ui.background.tertiary }}
            >
              Tertiary Button Hover
            </HoverStateDemo>
            
            <HoverStateDemo
              normalState={{ backgroundColor: colors.confucius.red, color: 'white' }}
              hoverState={{ backgroundColor: '#a31c22' }}
            >
              Destructive Button Hover
            </HoverStateDemo>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Card Hover States</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HoverStateDemo
              normalState={{ 
                backgroundColor: 'white', 
                border: `1px solid ${colors.ui.border.light}`, 
                boxShadow: boxShadow.sm,
              }}
              hoverState={{ 
                boxShadow: boxShadow.md,
                transform: 'translateY(-2px)'
              }}
            >
              Default Card Hover
            </HoverStateDemo>
            
            <HoverStateDemo
              normalState={{ 
                background: `linear-gradient(to bottom right, white, ${colors.confucius.lightGreen})`,
                borderLeft: `4px solid ${colors.confucius.green}`,
                padding: '1rem'
              }}
              hoverState={{ 
                boxShadow: boxShadow.md,
              }}
            >
              Course Card Hover
            </HoverStateDemo>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Link Hover States</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HoverStateDemo
              normalState={{ 
                color: colors.confucius.blue,
                textDecoration: 'none'
              }}
              hoverState={{ 
                textDecoration: 'underline'
              }}
            >
              Default Link Hover
            </HoverStateDemo>
            
            <HoverStateDemo
              normalState={{ 
                color: colors.confucius.green,
                position: 'relative'
              }}
              hoverState={{ 
                color: colors.confucius.green,
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              Primary Link Hover
            </HoverStateDemo>
            
            <HoverStateDemo
              normalState={{ 
                color: colors.ui.text.secondary,
                position: 'relative'
              }}
              hoverState={{ 
                color: colors.ui.text.primary,
              }}
            >
              Secondary Link Hover
            </HoverStateDemo>
          </div>
        </div>
      </section>

      {/* Animations Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Animations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Transitions</h3>
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-medium">Fast Transition</p>
                <Button 
                  className="transition-all duration-150"
                  onClick={(e) => e.preventDefault()}
                >
                  Fast (150ms)
                </Button>
              </div>
              
              <div>
                <p className="mb-1 text-sm font-medium">Default Transition</p>
                <Button 
                  className="transition-all duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  Default (300ms)
                </Button>
              </div>
              
              <div>
                <p className="mb-1 text-sm font-medium">Slow Transition</p>
                <Button 
                  className="transition-all duration-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Slow (500ms)
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Keyframe Animations</h3>
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-medium">Fade In</p>
                <div className="animate-fade-in p-4 bg-confucius-lightGreen">
                  Fade In Animation
                </div>
              </div>
              
              <div>
                <p className="mb-1 text-sm font-medium">Scale In</p>
                <div className="animate-scale-in p-4 bg-confucius-lightBlue">
                  Scale In Animation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Components</h2>
        
        {/* Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button className="bg-confucius-green hover:bg-confucius-green/90 text-white">
              Primary Button
            </Button>
            <Button variant="outline" className="border-confucius-green text-confucius-green hover:bg-confucius-lightGreen">
              Secondary Button
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
              Tertiary Button
            </Button>
            <Button variant="destructive">
              Destructive Button
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small Button</Button>
            <Button>Default Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </div>
        
        {/* Badges */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Badges</h3>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-confucius-lightGreen text-confucius-green border-0">
              YCT Course
            </Badge>
            <Badge className="bg-confucius-lightBlue text-confucius-blue border-0">
              HSK Course
            </Badge>
            <Badge className="bg-confucius-lightGold text-confucius-gold border-0">
              VIP Course
            </Badge>
            <Badge className="bg-confucius-lightRed text-confucius-red border-0">
              Required
            </Badge>
          </div>
        </div>
        
        {/* Cards */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* YCT Course Card */}
            <div className="bg-gradient-to-br from-white to-confucius-lightGreen border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="border-l-4 border-confucius-green p-6">
                <h3 className="font-semibold text-lg mb-2">YCT Course</h3>
                <p className="text-gray-600 mb-4">For children 7-12 years old</p>
                <div className="flex justify-between items-center">
                  <Badge className="bg-confucius-lightGreen text-confucius-green border-0">
                    Level 1
                  </Badge>
                  <Button size="sm">Enroll</Button>
                </div>
              </div>
            </div>
            
            {/* HSK Course Card */}
            <div className="bg-gradient-to-br from-white to-confucius-lightBlue border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="border-l-4 border-confucius-blue p-6">
                <h3 className="font-semibold text-lg mb-2">HSK Course</h3>
                <p className="text-gray-600 mb-4">For students 13+ years old</p>
                <div className="flex justify-between items-center">
                  <Badge className="bg-confucius-lightBlue text-confucius-blue border-0">
                    Level 1
                  </Badge>
                  <Button size="sm">Enroll</Button>
                </div>
              </div>
            </div>
            
            {/* VIP Course Card */}
            <div className="bg-gradient-to-br from-white to-confucius-lightGold border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="border-l-4 border-confucius-gold p-6">
                <h3 className="font-semibold text-lg mb-2">VIP Course</h3>
                <p className="text-gray-600 mb-4">One-on-one personalized sessions</p>
                <div className="flex justify-between items-center">
                  <Badge className="bg-confucius-lightGold text-confucius-gold border-0">
                    Custom
                  </Badge>
                  <Button size="sm">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Elements */}
        <div>
          <h3 className="text-lg font-medium mb-3">Form Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name"
                className="border-gray-300 focus:border-confucius-green focus:ring-2 focus:ring-confucius-green/20" 
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="Enter your email"
                className="border-gray-300 focus:border-confucius-green focus:ring-2 focus:ring-confucius-green/20" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Standalone HTML Button Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Standalone HTML Version</h2>
        <p className="mb-4">Use the button below to download a standalone HTML version of this design system:</p>
        
        <Button 
          className="bg-confucius-blue hover:bg-confucius-blue/90 text-white"
          onClick={() => exportToHTML()}
        >
          Export as HTML
        </Button>
      </section>
    </div>
  );
};

// Function to export the design system as a standalone HTML file
const exportToHTML = () => {
  // Create the HTML content with embedded styles and Tailwind
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Balingkang Design System</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            confucius: {
              green: '#008A5E',
              blue: '#00375F',
              red: '#C42127',
              gold: '#E7A92F',
              lightGreen: '#E5F3EE',
              lightBlue: '#E5EEF3',
              lightRed: '#F9E5E6',
              lightGold: '#FCF6E9',
            }
          },
          animation: {
            'fade-in': 'fadeIn 0.3s ease-out',
            'scale-in': 'scaleIn 0.2s ease-out',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            scaleIn: {
              '0%': { transform: 'scale(0.95)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' },
            }
          }
        }
      }
    };
  </script>
  <style>
    /* Base styles */
    body {
      font-family: sans-serif;
      line-height: 1.5;
      color: #111827;
    }
    
    /* Interactive elements */
    .hover-card {
      transition: all 0.3s ease;
    }
    .hover-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.375rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    
    .button-primary {
      background-color: #008A5E;
      color: white;
    }
    .button-primary:hover {
      background-color: #006f4b;
    }
    
    .button-secondary {
      background-color: white;
      color: #008A5E;
      border: 1px solid #008A5E;
    }
    .button-secondary:hover {
      background-color: #E5F3EE;
    }
    
    .button-destructive {
      background-color: #C42127;
      color: white;
    }
    .button-destructive:hover {
      background-color: #a31c22;
    }
    
    .badge {
      display: inline-flex;
      align-items: center;
      border-radius: 9999px;
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      font-weight: 600;
    }
  </style>
</head>
<body class="bg-white">
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <h1 class="text-3xl font-bold mb-8 border-b pb-4">
      Balingkang Design System
    </h1>

    <!-- Color Palette Section -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Color Palette</h2>
      
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Brand Colors</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-green"></div>
            <span class="text-xs text-gray-700 font-medium">Green</span>
            <span class="text-xs text-gray-500">#008A5E</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-blue"></div>
            <span class="text-xs text-gray-700 font-medium">Blue</span>
            <span class="text-xs text-gray-500">#00375F</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-red"></div>
            <span class="text-xs text-gray-700 font-medium">Red</span>
            <span class="text-xs text-gray-500">#C42127</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-gold"></div>
            <span class="text-xs text-gray-700 font-medium">Gold</span>
            <span class="text-xs text-gray-500">#E7A92F</span>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Light Variations</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-lightGreen"></div>
            <span class="text-xs text-gray-700 font-medium">Light Green</span>
            <span class="text-xs text-gray-500">#E5F3EE</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-lightBlue"></div>
            <span class="text-xs text-gray-700 font-medium">Light Blue</span>
            <span class="text-xs text-gray-500">#E5EEF3</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-lightRed"></div>
            <span class="text-xs text-gray-700 font-medium">Light Red</span>
            <span class="text-xs text-gray-500">#F9E5E6</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-md shadow-md mb-2 bg-confucius-lightGold"></div>
            <span class="text-xs text-gray-700 font-medium">Light Gold</span>
            <span class="text-xs text-gray-500">#FCF6E9</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography Section -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Typography</h2>
      
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Font Sizes</h3>
        <div class="mb-3">
          <p class="text-xs">Extra Small Text</p>
          <span class="text-xs text-gray-500">Size: 0.75rem, Weight: normal</span>
        </div>
        <div class="mb-3">
          <p class="text-sm">Small Text</p>
          <span class="text-xs text-gray-500">Size: 0.875rem, Weight: normal</span>
        </div>
        <div class="mb-3">
          <p class="text-base">Base Text</p>
          <span class="text-xs text-gray-500">Size: 1rem, Weight: normal</span>
        </div>
        <div class="mb-3">
          <p class="text-lg">Large Text</p>
          <span class="text-xs text-gray-500">Size: 1.125rem, Weight: normal</span>
        </div>
        <div class="mb-3">
          <p class="text-xl">Extra Large Text</p>
          <span class="text-xs text-gray-500">Size: 1.25rem, Weight: normal</span>
        </div>
        <div class="mb-3">
          <p class="text-2xl">2XL Text</p>
          <span class="text-xs text-gray-500">Size: 1.5rem, Weight: normal</span>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-3">Font Weights</h3>
        <div class="mb-3">
          <p class="text-xl font-normal">Normal Weight</p>
          <span class="text-xs text-gray-500">Size: 1.25rem, Weight: normal</span>
        </div>
        <div class="mb-3">
          <p class="text-xl font-medium">Medium Weight</p>
          <span class="text-xs text-gray-500">Size: 1.25rem, Weight: medium</span>
        </div>
        <div class="mb-3">
          <p class="text-xl font-semibold">Semibold Weight</p>
          <span class="text-xs text-gray-500">Size: 1.25rem, Weight: semibold</span>
        </div>
        <div class="mb-3">
          <p class="text-xl font-bold">Bold Weight</p>
          <span class="text-xs text-gray-500">Size: 1.25rem, Weight: bold</span>
        </div>
      </div>
    </section>

    <!-- Hover States Section -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Hover States</h2>

      <div class="mb-8">
        <h3 class="text-lg font-medium mb-3">Buttons</h3>
        <div class="flex flex-wrap gap-4 mb-4">
          <button class="button button-primary">Primary Button</button>
          <button class="button button-secondary">Secondary Button</button>
          <button class="button bg-white text-gray-700 hover:bg-gray-100">Tertiary Button</button>
          <button class="button button-destructive">Destructive Button</button>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-3">Cards</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Default Card -->
          <div class="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover-card">
            <h4 class="font-medium mb-2">Card Title</h4>
            <p class="text-gray-600 text-sm">This is a default card with hover effect. Try hovering over it.</p>
          </div>
          
          <!-- Course Card -->
          <div class="bg-gradient-to-br from-white to-confucius-lightGreen border border-gray-200 rounded-lg overflow-hidden hover-card">
            <div class="border-l-4 border-confucius-green p-4">
              <h4 class="font-medium mb-2">Course Card</h4>
              <p class="text-gray-600 text-sm">This is a course card with hover effect. Try hovering over it.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-3">Links</h3>
        <div class="flex flex-col gap-2">
          <a href="#" class="text-confucius-blue hover:underline">Default Link</a>
          <a href="#" class="text-confucius-green hover:underline hover:underline-offset-4">Primary Link</a>
          <a href="#" class="text-gray-500 hover:text-gray-900">Secondary Link</a>
        </div>
      </div>
    </section>

    <!-- Components Section -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">Components</h2>
      
      <!-- Buttons -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-3">Buttons</h3>
        <div class="flex flex-wrap gap-4 mb-4">
          <button class="button button-primary">Primary Button</button>
          <button class="button button-secondary">Secondary Button</button>
          <button class="button bg-transparent text-gray-700 hover:bg-gray-100">Tertiary Button</button>
          <button class="button button-destructive">Destructive Button</button>
        </div>
      </div>
      
      <!-- Badges -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-3">Badges</h3>
        <div class="flex flex-wrap gap-3">
          <span class="badge bg-confucius-lightGreen text-confucius-green">YCT Course</span>
          <span class="badge bg-confucius-lightBlue text-confucius-blue">HSK Course</span>
          <span class="badge bg-confucius-lightGold text-confucius-gold">VIP Course</span>
          <span class="badge bg-confucius-lightRed text-confucius-red">Required</span>
        </div>
      </div>
      
      <!-- Cards -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-3">Cards</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- YCT Course Card -->
          <div class="bg-gradient-to-br from-white to-confucius-lightGreen border border-gray-200 rounded-lg shadow-sm overflow-hidden hover-card">
            <div class="border-l-4 border-confucius-green p-6">
              <h3 class="font-semibold text-lg mb-2">YCT Course</h3>
              <p class="text-gray-600 mb-4">For children 7-12 years old</p>
              <div class="flex justify-between items-center">
                <span class="badge bg-confucius-lightGreen text-confucius-green">Level 1</span>
                <button class="button button-primary text-sm py-1">Enroll</button>
              </div>
            </div>
          </div>
          
          <!-- HSK Course Card -->
          <div class="bg-gradient-to-br from-white to-confucius-lightBlue border border-gray-200 rounded-lg shadow-sm overflow-hidden hover-card">
            <div class="border-l-4 border-confucius-blue p-6">
              <h3 class="font-semibold text-lg mb-2">HSK Course</h3>
              <p class="text-gray-600 mb-4">For students 13+ years old</p>
              <div class="flex justify-between items-center">
                <span class="badge bg-confucius-lightBlue text-confucius-blue">Level 1</span>
                <button class="button button-primary text-sm py-1">Enroll</button>
              </div>
            </div>
          </div>
          
          <!-- VIP Course Card -->
          <div class="bg-gradient-to-br from-white to-confucius-lightGold border border-gray-200 rounded-lg shadow-sm overflow-hidden hover-card">
            <div class="border-l-4 border-confucius-gold p-6">
              <h3 class="font-semibold text-lg mb-2">VIP Course</h3>
              <p class="text-gray-600 mb-4">One-on-one personalized sessions</p>
              <div class="flex justify-between items-center">
                <span class="badge bg-confucius-lightGold text-confucius-gold">Custom</span>
                <button class="button button-primary text-sm py-1">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Form Elements -->
      <div>
        <h3 class="text-lg font-medium mb-3">Form Elements</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <div class="space-y-1">
            <label class="block text-sm font-medium text-gray-700" for="name">Full Name</label>
            <input 
              id="name" 
              type="text"
              placeholder="Enter your full name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-confucius-green focus:ring-2 focus:ring-confucius-green/20"
            />
          </div>
          
          <div class="space-y-1">
            <label class="block text-sm font-medium text-gray-700" for="email">Email Address</label>
            <input 
              id="email" 
              type="email"
              placeholder="Enter your email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-confucius-green focus:ring-2 focus:ring-confucius-green/20"
            />
          </div>
        </div>
      </div>
    </section>

    <footer class="mt-12 pt-8 border-t text-center text-gray-500">
      <p>Balingkang Design System - Generated on ${new Date().toLocaleDateString()}</p>
    </footer>
  </div>
</body>
</html>
  `;

  // Create a Blob with the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });
  
  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);
  
  // Create a link and click it to trigger download
  const a = document.createElement('a');
  a.href = url;
  a.download = 'balingkang-design-system.html';
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
};

export default DesignSystemPage;
