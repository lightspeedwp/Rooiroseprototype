import React from 'react';
import {
  Search, X, Copy, Check, Download, ChevronDown, ChevronRight, Eye, ChevronLeft, ChevronUp,
  AlertCircle, AlertTriangle, Archive, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Award,
  Banknote, Bell, BookOpen, Calendar, CalendarDays, Camera, CheckCircle, CheckCircle2,
  CheckSquare, Clock, Code, Cookie, Cpu, CreditCard, Database, ExternalLink,
  EyeOff, Facebook, FileCode, FileText, Filter, Flag, Flower2, Folder, FolderOpen,
  Gift, Globe, Grip, Handshake, Headphones, Heart, HelpCircle, Home, House, Inbox,
  Info, Instagram, Languages, Layers, LayoutDashboard, Link, Link2, Linkedin, Loader2, Lock,
  LogIn, Mail, MailCheck, MailX, Map, MapPin, Maximize2, Megaphone, Menu,
  MessageCircle, MessageSquare, Minus, Monitor, Moon, Move, Music, Newspaper, Package, Palette,
  PanelLeft, PanelLeftClose, PenLine, Phone, Play, Plus, Printer, RefreshCw, Reply,
  Rocket, Settings, Share2, Shield, ShoppingCart, SlidersHorizontal, Star, Sun, Tag,
  ThumbsUp, Ticket, Trash2, TrendingUp, Trophy, Truck, Type, Upload, User,
  UserCheck, UserCircle, UserPlus, Users, Video, WifiOff, XCircle, Youtube, Zap,
  LayoutGrid, Wrench, FileStack, ClipboardCheck, FileImage, LayoutTemplate,
  Paintbrush, Puzzle, FileJson, Sparkles
} from 'lucide-react';
import type { IconType } from '../../../data/iconBrowserData';
import { XSocialIcon, TikTokIcon, WhatsAppIcon } from './customIcons';

/** Map icon names to actual Lucide components for live preview */
export const ICON_COMPONENTS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Search, X, Copy, Check, Download, ChevronDown, ChevronRight, Eye, ChevronLeft, ChevronUp,
  AlertCircle, AlertTriangle, Archive, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Award,
  Banknote, Bell, BookOpen, Calendar, CalendarDays, Camera, CheckCircle, CheckCircle2,
  CheckSquare, Clock, Code, Cookie, Cpu, CreditCard, Database, ExternalLink,
  EyeOff, Facebook, FileCode, FileText, Filter, Flag, Flower2, Folder, FolderOpen,
  Gift, Globe, Grip, Handshake, Headphones, Heart, HelpCircle, Home, House, Inbox,
  Info, Instagram, Languages, Layers, LayoutDashboard, Link, Link2, Linkedin, Loader2, Lock,
  LogIn, Mail, MailCheck, MailX, Map, MapPin, Maximize2, Megaphone, Menu,
  MessageCircle, MessageSquare, Minus, Monitor, Moon, Move, Music, Newspaper, Package, Palette,
  PanelLeft, PanelLeftClose, PenLine, Phone, Play, Plus, Printer, RefreshCw, Reply,
  Rocket, Settings, Share2, Shield, ShoppingCart, SlidersHorizontal, Star, Sun, Tag,
  ThumbsUp, Ticket, Trash2, TrendingUp, Trophy, Truck, Type, Upload, User,
  UserCheck, UserCircle, UserPlus, Users, Video, WifiOff, XCircle, Youtube, Zap,
  LayoutGrid, Wrench, FileStack, ClipboardCheck, FileImage, LayoutTemplate,
  Paintbrush, Puzzle, FileJson, Sparkles,
  // Custom SVG social icons (outline-style to match Lucide)
  XSocial: XSocialIcon,
  TikTok: TikTokIcon,
  WhatsApp: WhatsAppIcon,
};

export const TYPE_COLORS: Record<IconType, string> = {
  interface: 'border-blue-300 dark:border-blue-500/50 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
  content: 'border-purple-300 dark:border-purple-500/50 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400',
  social: 'border-rose-300 dark:border-rose-500/50 bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400',
  both: 'border-amber-300 dark:border-amber-500/50 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
};

export const TYPE_LABELS: Record<IconType, { af: string; en: string }> = {
  interface: { af: 'Koppelvlak', en: 'Interface' },
  content: { af: 'Inhoud', en: 'Content' },
  social: { af: 'Sosiaal', en: 'Social' },
  both: { af: 'Beide', en: 'Both' },
};
