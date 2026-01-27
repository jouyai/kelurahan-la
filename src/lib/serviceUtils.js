import React from 'react';
import {
    CreditCard,
    Users,
    Truck,
    Baby,
    FileText,
    Briefcase,
    MapPin,
    Heart,
    Scale,
    Wallet,
    Globe2,
    Landmark,
    ShieldCheck,
    AlertCircle
} from 'lucide-react';

/**
 * Returns icon and styling based on service category
 * @param {string} category 
 */
export const getServiceTheme = (category) => {
    switch (category) {
        case 'Kependudukan':
            return {
                icon: React.createElement(CreditCard, { className: "h-6 w-6 text-blue-600" }),
                color: "bg-blue-50 border-blue-100",
                labelColor: "text-blue-600",
                bgLight: "bg-blue-50",
                borderHover: "hover:border-blue-500"
            };
        case 'Perpindahan Penduduk':
            return {
                icon: React.createElement(Truck, { className: "h-6 w-6 text-orange-600" }),
                color: "bg-orange-50 border-orange-100",
                labelColor: "text-orange-600",
                bgLight: "bg-orange-50",
                borderHover: "hover:border-orange-500"
            };
        case 'Pelayanan Umum':
            return {
                icon: React.createElement(MapPin, { className: "h-6 w-6 text-amber-500" }),
                color: "bg-amber-50 border-amber-100",
                labelColor: "text-amber-500",
                bgLight: "bg-amber-50",
                borderHover: "hover:border-amber-500"
            };
        case 'Pertanahan & Waris':
            return {
                icon: React.createElement(Landmark, { className: "h-6 w-6 text-purple-600" }),
                color: "bg-purple-50 border-purple-100",
                labelColor: "text-purple-600",
                bgLight: "bg-purple-50",
                borderHover: "hover:border-purple-500"
            };
        case 'Pernikahan':
            return {
                icon: React.createElement(Heart, { className: "h-6 w-6 text-pink-600" }),
                color: "bg-pink-50 border-pink-100",
                labelColor: "text-pink-600",
                bgLight: "bg-pink-50",
                borderHover: "hover:border-pink-500"
            };
        case 'Warga Negara Asing':
            return {
                icon: React.createElement(Globe2, { className: "h-6 w-6 text-indigo-600" }),
                color: "bg-indigo-50 border-indigo-100",
                labelColor: "text-indigo-600",
                bgLight: "bg-indigo-50",
                borderHover: "hover:border-indigo-500"
            };
        case 'Pajak & Aset':
            return {
                icon: React.createElement(Wallet, { className: "h-6 w-6 text-emerald-600" }),
                color: "bg-emerald-50 border-emerald-100",
                labelColor: "text-emerald-600",
                bgLight: "bg-emerald-50",
                borderHover: "hover:border-emerald-500"
            };
        case 'Pekerjaan & Usaha':
            return {
                icon: React.createElement(Briefcase, { className: "h-6 w-6 text-slate-700" }),
                color: "bg-slate-50 border-slate-200",
                labelColor: "text-slate-700",
                bgLight: "bg-slate-50",
                borderHover: "hover:border-slate-500"
            };
        default:
            return {
                icon: React.createElement(FileText, { className: "h-6 w-6 text-slate-600" }),
                color: "bg-slate-50 border-slate-100",
                labelColor: "text-slate-600",
                bgLight: "bg-slate-50",
                borderHover: "hover:border-slate-500"
            };
    }
};
