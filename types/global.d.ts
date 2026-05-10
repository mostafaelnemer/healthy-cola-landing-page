/**
 * @file global.d.ts
 * @description This file contains global type declarations for the project.
 */

export {};

declare global {
  interface NavMenuItem {
    title: string;
    href: string;
  }

  interface Brand {
    name: string;
    logo: string;
  }

  interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  interface RoadmapItem {
    index: number;
    time: string;
    title: string;
    content: string[];
  }

  interface TeamMember {
    name: string;
    position: string;
    image: string;
  }

  interface FaqItem {
    title: string;
    content: string;
  }

  interface ServiceItem {
    title: string;
    services: ServiceTypeItem[];
  }

  interface SocialItem {
    Icon: React.ElementType;
    href: string;
  }

  interface APITokenInfoResponse {
    success: boolean;
    response: {
      ico: string;
      total: string;
      total_amount: string;
      total_token: number;
      sold: string;
      sold_amount: string;
      sold_token: number;
      progress: number;
      price: number;
      next_price: number;
      bonus: {
        base: number;
        start: string;
        end: string;
        timezone: string;
        amount: { [key: string]: number };
      };
      start: string;
      end: string;
      timezone: string;
      min: number;
      max: number;
      soft: {
        cap: number;
        amount: string;
        percent: number;
      };
      hard: {
        cap: number;
        amount: string;
        percent: number;
      };
    };
  }
}
