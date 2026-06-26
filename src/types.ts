/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Benefit {
  id: string;
  text: string;
}

export interface ProblemCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
  vibeText: string;
}

export interface Pilar {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceOriginal: string;
  installments: string;
  features: string[];
  isPopular?: boolean;
}
