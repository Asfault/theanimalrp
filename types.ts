import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  // Fix: Imported React to resolve the 'React' namespace required for ReactNode
  icon: React.ReactNode;
}