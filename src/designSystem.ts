
/**
 * Balingkang Design System
 * 
 * This file documents the color schemes, typography, spacing, component styles,
 * and other visual design elements used throughout the Balingkang application.
 * 
 * Use this as a reference when creating or modifying UI components to maintain
 * consistency in the visual design.
 */

/**
 * Color System
 * 
 * Primary color palette derived from Confucius Institute
 */
export const colors = {
  // Primary brand colors
  confucius: {
    green: '#008A5E',       // Primary brand color
    blue: '#00375F',        // Secondary brand color
    red: '#C42127',         // Accent color (for warnings, important actions)
    gold: '#E7A92F',        // Accent color (for highlights, awards)
    
    // Lighter variations for backgrounds, etc.
    lightGreen: '#E5F3EE',  
    lightBlue: '#E5EEF3',
    lightRed: '#F9E5E6',
    lightGold: '#FCF6E9',
  },

  // UI colors
  ui: {
    background: {
      primary: '#FFFFFF',    // Main background
      secondary: '#F9FAFB',  // Secondary background (cards, etc)
      tertiary: '#F3F4F6',   // Tertiary background (sidebars, etc)
    },
    text: {
      primary: '#111827',    // Main text
      secondary: '#4B5563',  // Secondary text
      tertiary: '#6B7280',   // Placeholder text, disabled
    },
    border: {
      light: '#E5E7EB',      // Light borders
      medium: '#D1D5DB',     // Medium borders
      focus: '#008A5E',      // Focus borders
    },
    states: {
      success: '#10B981',    // Success states
      error: '#EF4444',      // Error states
      warning: '#F59E0B',    // Warning states
      info: '#3B82F6',       // Info states
    }
  },

  // Semantic colors for specific purposes
  semantic: {
    student: '#008A5E',      // Student-related UI elements
    teacher: '#00375F',      // Teacher-related UI elements
    guardian: '#E7A92F',     // Guardian-related UI elements
    course: {
      yct: '#008A5E',        // YCT course-related elements
      hsk: '#00375F',        // HSK course-related elements
      vip: '#C42127',        // VIP course-related elements
    }
  }
};

/**
 * Typography System
 */
export const typography = {
  fontFamily: {
    primary: 'sans-serif',  // Default font family
    display: 'sans-serif',  // For headings
    mono: 'monospace',      // For code blocks
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  }
};

/**
 * Spacing System (in rem)
 */
export const spacing = {
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  32: '8rem',       // 128px
  40: '10rem',      // 160px
  48: '12rem',      // 192px
  56: '14rem',      // 224px
  64: '16rem',      // 256px
};

/**
 * Layout values
 */
export const layout = {
  container: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
};

/**
 * Border Radius
 */
export const borderRadius = {
  none: '0',
  sm: '0.125rem',      // 2px
  DEFAULT: '0.25rem',  // 4px
  md: '0.375rem',      // 6px
  lg: '0.5rem',        // 8px
  xl: '0.75rem',       // 12px
  '2xl': '1rem',       // 16px
  '3xl': '1.5rem',     // 24px
  full: '9999px',      // Full rounded (circle)
};

/**
 * Shadows
 */
export const boxShadow = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

/**
 * Component-specific styles and variants
 */
export const components = {
  // Button variations
  button: {
    variants: {
      primary: {
        background: colors.confucius.green,
        text: 'white',
        hover: 'opacity-90',
        active: 'opacity-100',
      },
      secondary: {
        background: 'white',
        text: colors.confucius.green,
        border: `1px solid ${colors.confucius.green}`,
        hover: colors.confucius.lightGreen,
      },
      tertiary: {
        background: 'transparent',
        text: colors.ui.text.primary,
        hover: colors.ui.background.tertiary,
      },
      destructive: {
        background: colors.confucius.red,
        text: 'white',
        hover: 'opacity-90',
      }
    },
    sizes: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-2.5 text-lg',
      xl: 'px-6 py-3 text-xl',
    }
  },
  
  // Card variations
  card: {
    variants: {
      default: {
        background: colors.ui.background.primary,
        border: `1px solid ${colors.ui.border.light}`,
        shadow: boxShadow.sm,
      },
      elevated: {
        background: colors.ui.background.primary,
        border: 'none',
        shadow: boxShadow.md,
      },
      flat: {
        background: colors.ui.background.secondary,
        border: 'none',
        shadow: 'none',
      },
      course: {
        yct: {
          gradientBg: `from-white to-${colors.confucius.lightGreen}`,
          accentBorder: `border-l-4 border-${colors.confucius.green}`,
        },
        hsk: {
          gradientBg: `from-white to-${colors.confucius.lightBlue}`,
          accentBorder: `border-l-4 border-${colors.confucius.blue}`,
        },
        vip: {
          gradientBg: `from-white to-${colors.confucius.lightGold}`,
          accentBorder: `border-l-4 border-${colors.confucius.gold}`,
        },
      }
    }
  },
  
  // Form elements
  form: {
    input: {
      default: {
        background: colors.ui.background.primary,
        text: colors.ui.text.primary,
        border: `1px solid ${colors.ui.border.medium}`,
        focus: {
          border: `1px solid ${colors.ui.border.focus}`,
          ring: `ring-2 ring-${colors.confucius.green}/20`,
        },
        placeholder: colors.ui.text.tertiary,
      },
      error: {
        border: `1px solid ${colors.ui.states.error}`,
        ring: `ring-2 ring-${colors.ui.states.error}/20`,
      },
    },
    label: {
      default: {
        text: colors.ui.text.secondary,
        fontSize: typography.fontSize.sm,
      }
    }
  },
  
  // Badge/Tag styles
  badge: {
    variants: {
      green: {
        background: colors.confucius.lightGreen,
        text: colors.confucius.green,
      },
      blue: {
        background: colors.confucius.lightBlue,
        text: colors.confucius.blue,
      },
      red: {
        background: colors.confucius.lightRed,
        text: colors.confucius.red,
      },
      gold: {
        background: colors.confucius.lightGold,
        text: colors.confucius.gold,
      },
    }
  },
};

/**
 * Animation styles
 */
export const animations = {
  transition: {
    fast: 'transition duration-150 ease-in-out',
    default: 'transition duration-300 ease-in-out',
    slow: 'transition duration-500 ease-in-out',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    slideIn: {
      from: { transform: 'translateY(10px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 }
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 }
    },
  },
  animation: {
    fadeIn: 'fadeIn 0.3s ease-in-out',
    slideIn: 'slideIn 0.4s ease-out',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  }
};

/**
 * Common utility classes
 */
export const utilities = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  pageTitle: 'text-3xl font-bold text-gray-900 mb-6',
  sectionTitle: 'text-xl font-semibold text-gray-900 mb-4',
  cardGrid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
  formGroup: 'space-y-1 mb-4',
};

/**
 * Design system usage examples
 * 
 * These examples demonstrate how to use the design system in components.
 */
export const examples = {
  // A primary button
  primaryButton: `
    <Button 
      className="bg-confucius-green text-white px-4 py-2 rounded-md hover:opacity-90"
    >
      Primary Button
    </Button>
  `,
  
  // A course card using the design system
  courseCard: `
    <div className="bg-gradient-to-br from-white to-confucius-lightGreen p-6 rounded-lg shadow border-l-4 border-confucius-green">
      <h3 className="text-xl font-semibold text-gray-900">HSK Level 1</h3>
      <p className="text-gray-600 mt-2">Introductory course for beginners</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="bg-confucius-lightGreen text-confucius-green px-3 py-1 rounded-full text-sm">
          12 Weeks
        </span>
        <button className="bg-confucius-green text-white px-3 py-1 rounded-md hover:opacity-90">
          Enroll
        </button>
      </div>
    </div>
  `,
  
  // Form input using the design system
  formInput: `
    <div className="space-y-1 mb-4">
      <label htmlFor="name" className="text-sm text-gray-700 font-medium">
        Full Name
      </label>
      <input
        id="name"
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-confucius-green/20 focus:border-confucius-green"
        placeholder="Enter your full name"
      />
    </div>
  `
};
