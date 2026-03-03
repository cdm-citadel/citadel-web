/**
 * icon-map.ts
 * Maps icon name strings (used in industries-data.ts) to actual Lucide React components.
 * Only imported by "use client" components — never by server components.
 */

import type { LucideIcon } from "lucide-react";
import {
  /* Industry hero icons */
  Stethoscope, ShoppingBag, UtensilsCrossed, Building2, Dumbbell, Bus,
  GraduationCap, Factory, Landmark,
  /* Use-case icons */
  Tv, MapPin, Users, Clock, Tag, Zap, Heart, RotateCcw, Gift,
  BarChart2, Megaphone, Star, Navigation, Calendar, Flame, TrendingUp, Sparkles,
  DollarSign, Map, ShieldCheck,
  /* Feature icons */
  Lock, AlertTriangle, Globe, Plug, CreditCard, Layers,
  Wheat, Radio, RefreshCcw, MessageSquare, Database, Film, Droplets,
  Wifi, Activity, Cloud,
  /* General */
  Monitor,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope, ShoppingBag, UtensilsCrossed, Building2, Dumbbell, Bus,
  GraduationCap, Factory, Landmark,
  Tv, MapPin, Users, Clock, Tag, Zap, Heart, RotateCcw, Gift,
  BarChart2, Megaphone, Star, Navigation, Calendar, Flame, TrendingUp, Sparkles,
  DollarSign, Map, ShieldCheck,
  Lock, AlertTriangle, Globe, Plug, CreditCard, Layers,
  Wheat, Radio, RefreshCcw, MessageSquare, Database, Film, Droplets,
  Wifi, Activity, Cloud,
  Monitor,
};
