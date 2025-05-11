import { 
  colors, 
  typography, 
  spacing, 
  borderRadius, 
  boxShadow,
  components
} from '@/designSystem';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    const key = size as keyof typeof spacing;
    if (key in spacing) {
      const value = spacing[key];
      return typeof value === 'number' ? `${value}rem` : value;
    }
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
            <div className="bg-gradient-to-br from-white to-confucius-lightGreen border border-gray-200 rounded-lg shadow-sm overflow-hidden">
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
            <div className="bg-gradient-to-br from-white to-confucius-lightBlue border border-gray-200 rounded-lg shadow-sm overflow-hidden">
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
            <div className="bg-gradient-to-br from-white to-confucius-lightGold border border-gray-200 rounded-lg shadow-sm overflow-hidden">
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
    </div>
  );
};

export default DesignSystemPage;
