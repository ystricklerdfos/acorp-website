'use client';

import * as React from 'react';

export interface ToggleProps {
  label?: string;
  description?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, description, checked, onCheckedChange, disabled }, ref) => {
    return (
      <label className={`flex items-start justify-between p-4 bg-muted rounded-lg ${!disabled ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}>
        <div className="flex-1">
          {label && (
            <div className="font-medium text-foreground mb-1">{label}</div>
          )}
          {description && (
            <div className="text-sm text-secondary">{description}</div>
          )}
        </div>
        <div className="relative inline-flex items-center cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange?.(e.target.checked)}
            disabled={disabled}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
        </div>
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle };
