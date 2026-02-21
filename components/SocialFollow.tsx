"use client";

import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function SocialFollow() {
    return (
        <div className="mb-8">
            <div className="mb-4 border-b border-black pb-1">
                <h3 className="text-sm font-bold text-black uppercase tracking-widest inline-block border-b-2 border-primary -mb-1.5 pb-2">
                    Follow Us
                </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex flex-col items-center justify-center p-4 bg-[#1877F2] text-white hover:opacity-90 transition group">
                    <Facebook size={24} className="mb-1 group-hover:scale-110 transition" />
                    <span className="text-xs font-bold">2.5M</span>
                    <span className="text-[10px] uppercase opacity-80">Fans</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 bg-[#1DA1F2] text-white hover:opacity-90 transition group">
                    <Twitter size={24} className="mb-1 group-hover:scale-110 transition" />
                    <span className="text-xs font-bold">1.2M</span>
                    <span className="text-[10px] uppercase opacity-80">Followers</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 bg-[#FF0000] text-white hover:opacity-90 transition group">
                    <Youtube size={24} className="mb-1 group-hover:scale-110 transition" />
                    <span className="text-xs font-bold">5M</span>
                    <span className="text-[10px] uppercase opacity-80">Subscribers</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 transition group">
                    <Instagram size={24} className="mb-1 group-hover:scale-110 transition" />
                    <span className="text-xs font-bold">3.8M</span>
                    <span className="text-[10px] uppercase opacity-80">Followers</span>
                </a>
            </div>
        </div>
    );
}
