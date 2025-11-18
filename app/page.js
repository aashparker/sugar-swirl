"use client"

import React from 'react';
import {
    ShoppingCartIcon,
    MapPinIcon,
    HeartIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    TrophyIcon
} from '@heroicons/react/24/outline';

export default function CrumbleCookies() {
    const cookies = [
        {
            name: "Crumble Classic Chunk",
            description: "Our signature browned butter dough loaded with Belgian dark & milk chocolate chunks",
            price: "R30.00",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop&q=80&auto=format"
        },
        {
            name: "Crumble Double Cocoa Core",
            description: "Intense chocolate cookie with molten cocoa fudge swirls baked into the center",
            price: "R30.00",
            image: "https://images.unsplash.com/photo-1588639079985-e72ff1073992?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Crumble Cookies & Cream",
            description: "Creamy vanilla base packed with crushed chocolate sandwich biscuits & white choc",
            price: "R30.00",
            image: "https://images.unsplash.com/photo-1519682214708-973477a2529a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Crumble Velvet Cheesecake",
            description: "Decadent red velvet cookie finished with a whipped cheesecake topping",
            price: "R30.00",
            image: "https://images.unsplash.com/photo-1690976991784-517d7763e0fa?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-pink-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-2">
                            <span className="text-3xl font-black text-gray-900">Sugar & Swirl</span>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#cookies"
                               className="text-gray-700 hover:text-pink-400 text-sm font-semibold transition-colors">Menu</a>
                            <a href="#about"
                               className="text-gray-700 hover:text-pink-400 text-sm font-semibold transition-colors">About</a>
                            {/* Changed Reviews -> Location */}
                            <a href="#location"
                               className="text-gray-700 hover:text-pink-400 text-sm font-semibold transition-colors">How
                                it works</a>
                            <a href="#contact"
                               className="text-gray-700 hover:text-pink-400 text-sm font-semibold transition-colors">Contact</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            {/*<a href="#location" className="text-gray-700 hover:text-pink-400 transition-colors">*/}
                            {/*    <MapPinIcon className="w-5 h-5"/>*/}
                            {/*</a>*/}
                            <button
                                className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-12 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                        {/* Left Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div
                                className="inline-flex items-center space-x-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-slow">
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                                </span>
                                <span>Now taking pre-orders!</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                                Freshly baked
                                <span className="block text-pink-400">
                                    cookies
                                </span>
                                <span className="block">made to order</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Handcrafted cookies made with premium ingredients. Pre-order now for weekend collection,
                                or add delivery for extra convenience.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <a
                                    href="#cookies"
                                    className="group bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                    <ShoppingCartIcon className="w-5 h-5 group-hover:animate-bounce"/>
                                    <span>Pre-Order Now</span>
                                </a>
                                <a
                                    href="#location"
                                    className="group border-2 border-gray-300 hover:border-pink-400 hover:bg-pink-50 text-gray-700 hover:text-pink-600 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2">
                                    <ClockIcon className="w-5 h-5"/>
                                    <span>View Schedule</span>
                                </a>
                            </div>

                            {/* Social Proof */}
                            {/*<div className="flex items-center justify-center lg:justify-start space-x-6 text-sm">*/}
                            {/*    <div className="flex items-center space-x-1">*/}
                            {/*        <div className="flex -space-x-2">*/}
                            {/*            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white"/>*/}
                            {/*            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white"/>*/}
                            {/*            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white"/>*/}
                            {/*        </div>*/}
                            {/*        <span className="text-gray-600 ml-2">200+ happy customers</span>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center space-x-1">*/}
                            {/*        <StarIcon className="w-4 h-4 fill-pink-400 text-pink-400"/>*/}
                            {/*        <span className="font-bold text-gray-900">5.0</span>*/}
                            {/*        <span className="text-gray-600">(48 reviews)</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative z-10 group">
                                    <img
                                        src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop&q=80&auto=format"
                                        alt="Assorted freshly baked cookies"
                                        className="relative rounded-[2rem] shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                                    />

                                    {/* Floating Badge 1 */}
                                    <div
                                        className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                                        <div className="flex items-center space-x-3">
                                            <div
                                                className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center">
                                                <TrophyIcon className="w-6 h-6 text-white"/>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-gray-900">4</div>
                                                <div className="text-xs text-gray-600 font-medium">Flavours</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badge 2 */}
                                    <div
                                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-2000">
                                        <div className="flex items-center space-x-3">
                                            <div
                                                className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center">
                                                <ClockIcon className="w-6 h-6 text-white"/>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-gray-900">Weekend</div>
                                                <div className="text-xs text-gray-600 font-medium">Pickup</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Small images */}
                                {/*<div className="hidden lg:block absolute -bottom-12 -left-12 w-48 h-48 rounded-3xl overflow-hidden shadow-xl border-4 border-white animate-float animation-delay-1000">*/}
                                {/*    <img*/}
                                {/*        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&q=80"*/}
                                {/*        alt="Cookie detail"*/}
                                {/*        className="w-full h-full object-cover"*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        <div
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50">
                            <div
                                className="w-14 h-14 bg-pink-400 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                <ClockIcon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">Pre-Order System</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Order ahead for weekend collection or
                                delivery</p>
                        </div>
                        <div
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50">
                            <div
                                className="w-14 h-14 bg-pink-400 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                <TrophyIcon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">Premium Quality</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Only the finest ingredients in every
                                bite</p>
                        </div>
                        <div
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50">
                            <div
                                className="w-14 h-14 bg-pink-400 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                <HeartIcon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">Made with Love</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Handcrafted in small batches with
                                care</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cookie Menu Section */}
            <section id="cookies" className="py-24 px-4 sm:px-6 lg:px-8 bg-pink-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our cookies</h2>
                        <p className="text-lg text-gray-600">Handcrafted favorites, baked to perfection</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cookies.map((cookie, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div
                                    className="relative aspect-square mb-4 overflow-hidden rounded-3xl border-4 border-white shadow-lg">
                                    <img
                                        src={cookie.image}
                                        alt={cookie.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/*<div className="absolute top-3 right-3">*/}
                                    {/*    <button*/}
                                    {/*        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-white transition-all hover:scale-110">*/}
                                    {/*        <HeartIcon className="w-5 h-5"/>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-bold text-gray-900">{cookie.name}</h3>
                                        <span className="text-pink-400 font-bold">{cookie.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{cookie.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Baking happiness since 2019
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    What started as a small passion project in a home kitchen has grown into something
                                    we're incredibly proud of. Every cookie we make represents our commitment to quality
                                    and our love for the craft.
                                </p>
                                <p>
                                    We believe the best cookies come from the best ingredients. That's why we source
                                    premium chocolate, real butter, and fresh ingredients to create cookies that bring
                                    joy to every bite.
                                </p>
                            </div>

                            {/*<div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-pink-100">*/}
                            {/*    <div>*/}
                            {/*        <div className="text-3xl font-bold text-pink-400 mb-1">50+</div>*/}
                            {/*        <div className="text-sm text-gray-600">Cookie varieties</div>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <div className="text-3xl font-bold text-pink-400 mb-1">100+</div>*/}
                            {/*        <div className="text-sm text-gray-600">Store locations</div>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <div className="text-3xl font-bold text-pink-400 mb-1">1M+</div>*/}
                            {/*        <div className="text-sm text-gray-600">Happy customers</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1617470232113-0e07c7257f8f?w=800&h=1000&fit=crop&q=80&auto=format"
                                alt="Stack of gourmet cookies"
                                className="rounded-3xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works + Schedule Section (replaces Map) */}
            <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-pink-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How ordering works</h2>
                        <p className="text-lg text-gray-600">Simple weekly pre-orders with pickup or delivery
                            options</p>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                        <div
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100">
                            <div
                                className="w-14 h-14 bg-pink-400 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                <ShoppingCartIcon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">1. Place your pre-order</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Choose your flavours and checkout
                                before the weekly cutoff.</p>
                        </div>
                        <div
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100">
                            <div
                                className="w-14 h-14 bg-pink-400 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                <HeartIcon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">2. We bake fresh</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Small batches, premium ingredients,
                                baked the morning of pickup/delivery.</p>
                        </div>
                        <div
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100">
                            <div
                                className="w-14 h-14 bg-pink-400 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                <MapPinIcon className="w-7 h-7 text-white"/>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">3. Collect or get delivery</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Pickup in Athlone or choose local
                                delivery during the window below.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to taste happiness?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Order now and get warm, fresh cookies delivered to your door.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/27682796536?text=Hi%21%20I%27d%20like%20to%20place%20a%20cookie%20order."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                            <ShoppingCartIcon className="w-5 h-5"/>
                            <span>Order on WhatsApp</span>
                        </a>
                        {/* Changed to link to Location section */}
                        <a href="#location"
                           className="border-2 border-pink-400 hover:bg-pink-50 text-pink-500 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2">
                            <MapPinIcon className="w-5 h-5"/>
                            <span>How it works</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="border-t border-pink-100 py-12 px-4 sm:px-6 lg:px-8 bg-pink-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">About</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-pink-400 text-sm transition-colors">Our
                                    Story</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-pink-400 text-sm transition-colors">Contact
                                    Us</a>
                                </li>
                                {/*<li><a href="/allergens" className="text-gray-600 hover:text-pink-400 text-sm transition-colors">Allergen*/}
                                {/*    Info</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#"
                                       className="text-gray-600 hover:text-pink-400 text-sm transition-colors">Locations</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center space-x-2 hover:text-pink-400 transition-colors cursor-pointer">
                                    <PhoneIcon className="w-4 h-4"/>
                                    <span>068 2796 536</span>
                                </li>
                                <li className="flex items-center space-x-2 hover:text-pink-400 transition-colors cursor-pointer">
                                    <EnvelopeIcon className="w-4 h-4"/>
                                    <span>imaangabier24@gmail.com</span>
                                </li>
                                <li className="flex items-center space-x-2 hover:text-pink-400 transition-colors cursor-pointer">
                                    <MapPinIcon className="w-4 h-4"/>
                                    <span>Athlone, Cape Town</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-pink-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600">© 2025 Sugar & Swirl. All rights reserved.</p>
                        {/*<div className="flex space-x-6 mt-4 sm:mt-0">*/}
                        {/*    <a href="#"*/}
                        {/*       className="text-sm text-gray-600 hover:text-pink-400 transition-colors">Privacy</a>*/}
                        {/*    <a href="#"*/}
                        {/*       className="text-sm text-gray-600 hover:text-pink-400 transition-colors">Terms</a>*/}
                        {/*    <a href="#"*/}
                        {/*       className="text-sm text-gray-600 hover:text-pink-400 transition-colors">Sitemap</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}
