"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Modal from '../ui/Modal';

interface Brand { name: string; logo?: string; }
interface Product { name: string; description: string; }
interface Category { id: string; title: string; brands?: Brand[]; products?: Product[]; blurb?: string; image?: string; }

const categories: Category[] = [
	{
		id: 'lighting',
		title: 'Electrical & Lighting Services',
		image: '/photos/services/Lighting.jpg',
		brands: [{ name: 'Leviton' }, { name: 'Lutron' }],
		blurb: 'For the demanding environment of luxury properties, you need electrical work that is both flawless and durable. We use only premium-grade components from respected brands, such as Leviton, known for their reliability and long-lasting performance. We also specialize in implementing advanced lighting and automation solutions from Lutron, a global leader in high-end control systems.\n\nBy combining the trusted durability of brands like Leviton with the sophisticated controls and automation of Lutron, we ensure that every upgrade, from switches and outlets to intelligent lighting and automated shades, is safe, reliable, and a perfect match for your property\'s quality standards.'
	},
	{
		id: 'access-control',
		title: 'Access Control & Door Hardware',
		image: '/photos/services/AccessControl.jpg',
		brands: [{ name: 'Dormakaba' }, { name: 'Von Duprin' }, { name: 'Adams Rite' }, { name: 'Norton Rixson' }],
		blurb: 'Access control is a critical blend of security, convenience, and seamless design. We partner with industry-leading brands like Dormakaba and Adams Rite to create systems that are both highly secure and beautifully integrated. By combining the global security expertise of brands like Dormakaba, a leader in electronic access and mobile credentials, with the specialized hardware of Adams Rite for elegant glass and aluminum doors, we deliver solutions that enhance both guest experience and operational efficiency.\n\nOur approach also incorporates the life-safety excellence of Von Duprin, the inventor of the panic device, and the quiet, touchless door automation of Norton Rixson. This multi-brand strategy allows us to design and install a comprehensive access control system that not only meets the highest standards for safety and reliability but also preserves the architectural integrity and sophisticated atmosphere of your property. From a guest\'s first seamless entry using a mobile key to the secure, silent operation of every back-of-house door, we ensure your access control system is as flawless as your property\'s reputation.'
	},
	{
		id: 'maglocks',
		title: 'Commercial Magnetic Lock Systems',
		image: '/photos/services/Security.jpg',
		brands: [{ name: 'Allegion' }, { name: 'Schlage' }, { name: 'Cobra Controls' }],
		blurb: 'Professional electromagnetic lock installations for secure access control. We specialize in commercial-grade systems from industry leaders Allegion and Cobra Controls, delivering reliable security solutions for vacation rentals, commercial properties, and high-security facilities. Our installations include complete access control integration with proximity readers, keypads, and network connectivity for comprehensive property protection.'
	},
	{
		id: 'sauna',
		title: 'Spa & Sauna',
		image: '/photos/services/Sauna.jpg',
		brands: [{ name: 'Sunlighten' }, { name: 'Finnleo' }, { name: 'Amerec' }],
		blurb: 'Professional sauna installations and spa maintenance for luxury properties and wellness facilities. We specialize in infrared and traditional sauna systems from leading manufacturers, offering complete installation, maintenance, and repair services. From residential wellness rooms to commercial spa facilities, our expertise ensures optimal performance and guest satisfaction. We provide comprehensive service for all major sauna and spa brands, including electrical, plumbing, and control system integration.'
	},
	{
		id: 'rental',
		title: 'Vacation Rental & Property Management Solutions',
		image: '/photos/services/VacationRental.jpg',
		brands: [{ name: 'SmartThings' }, { name: 'Hubitat' }, { name: 'Control4' }],
		blurb: 'Complete automation ecosystems designed specifically for vacation rental operations and property management efficiency. Our integrated solutions combine smart locks, automated lighting, climate control, and remote monitoring systems to streamline guest experiences while reducing operational overhead. From automated check-in processes to energy management and security monitoring, we create maintenance-friendly installations that maximize revenue potential while minimizing hands-on management requirements.'
	}
];

export default function ServicesSection() {
	const [openModal, setOpenModal] = useState<string | null>(null);
	return (
		<section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
			{/* Advanced circuit background */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
					<defs>
						<pattern id="services-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<path d="M10,0 L10,10 M0,10 L20,10 M5,5 L15,5" stroke="#00CED1" strokeWidth="0.4" opacity="0.6"/>
							<path d="M5,0 L5,5 M15,5 L15,10" stroke="#32CD32" strokeWidth="0.3" opacity="0.5"/>
							<circle cx="10" cy="10" r="0.8" fill="#00CED1" opacity="0.7">
								<animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite"/>
							</circle>
							<circle cx="5" cy="5" r="0.5" fill="#32CD32" opacity="0.6">
								<animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
							</circle>
						</pattern>
					</defs>
					<rect width="100" height="100" fill="url(#services-circuit)"/>
				</svg>
			</div>
			<div className="container mx-auto px-4 relative z-[100]">
				<HeaderIntro />
				<div className="space-y-24">
					{categories.map((cat, idx) => (
						<CategoryBlock key={cat.id} category={cat} index={idx} onOpen={() => setOpenModal(cat.id)} />
					))}
				</div>
			</div>

			{/* Lighting / Electrical Modal */}
			<Modal
				open={openModal === 'lighting'}
				onClose={() => setOpenModal(null)}
				title="Electrical & Lighting Solutions: The Leviton & Lutron Difference"
				labelledBy="lighting-modal-title"
				id="service-modal-lighting"
			>
				<div className="space-y-10 text-slate-700">
					{/* Brand Icons Row */}
					<div className="flex items-center gap-6 pt-1">
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/leviton-logo.svg" alt="Leviton" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/lutron-logo.svg" alt="Lutron" className="h-5 w-auto" />
						</div>
					</div>

					<p>In a luxury setting, every detail matters—especially those behind the scenes. We choose to work with industry-leading brands like Leviton and Lutron to ensure your electrical and lighting systems are not just functional, but also elevate the entire guest experience.</p>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Reliable Electrical Solutions with Leviton</h3>
						<p>We choose to work with Leviton because they are the industry standard for safe, reliable, and innovative electrical products. When we install a Leviton component, you&apos;re not just getting a functional part; you&apos;re getting a solution built with durability, advanced safety, and superior aesthetics in mind.</p>
						<p className="font-medium text-slate-800">We frequently install Leviton&apos;s top-tier products, including:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Leviton Decora® Smart Wi-Fi Dimmers:</strong> These intelligent dimmers provide effortless control over lighting, allowing you to set the perfect ambiance for different areas of your property. They can be controlled via an app, voice commands, or traditional wall switches, providing a modern and convenient experience for both staff and guests.</li>
							<li><strong>Leviton Tamper-Resistant Outlets:</strong> Guest safety is a top priority. These outlets feature an internal shutter mechanism that blocks access to the contacts unless a two- or three-prong plug is inserted. This prevents objects from being inserted into the outlet, offering peace of mind in guest rooms and common areas.</li>
							<li><strong>Leviton USB Charger Outlets:</strong> With the ever-increasing number of devices guests travel with, having convenient charging options is a must. These outlets replace standard outlets and feature built-in USB ports, allowing guests to charge their phones, tablets, and other devices without needing a bulky adapter. This is a small upgrade that significantly enhances the guest experience.</li>
						</ul>
						<p>By integrating these and other Leviton products into our work, we guarantee that your electrical systems are not only up to code but also equipped to provide lasting performance, safety, and a touch of modern convenience that guests will appreciate.</p>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Advanced Lighting & Automation with Lutron</h3>
						<p>Building on this foundation of reliability, we integrate Lutron&apos;s sophisticated lighting and shade control systems to create a truly luxurious and efficient environment. Lutron is a global leader in intelligent automation, and their systems are specifically designed to meet the high standards of hospitality.</p>
						<p className="font-medium text-slate-800">Our expertise with Lutron enables us to implement solutions that offer:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Personalized Ambiance:</strong> With Lutron&apos;s myRoom system, guests can create the perfect lighting scene in their room with a single touch. We also install Ketra lighting, which provides a full spectrum of tunable white light and vibrant colors, simulating natural daylight to enhance guest well-being.</li>
							<li><strong>Effortless Control:</strong> Lutron&apos;s elegant controls, like the Palladiom keypad, are both beautiful and intuitive. Guests can adjust lights and automated shades from an elegant wall-mounted controller, or via a simple mobile interface, making their stay seamless and comfortable.</li>
							<li><strong>Seamless Design Integration:</strong> Lutron&apos;s products are renowned for their silent operation and minimalist design. Whether it’s a silent automated shade or a perfectly flush-mounted keypad, every component is installed to blend seamlessly with your property&apos;s architectural and interior design.</li>
						</ul>
					</div>
				</div>
			</Modal>

			{/* Access Control & Door Hardware Modal */}
			<Modal
				open={openModal === 'access-control'}
				onClose={() => setOpenModal(null)}
				title="Access Control & Door Hardware: The Dormakaba, Von Duprin, Adams Rite & Norton Rixson Difference"
				labelledBy="access-control-modal-title"
				id="service-modal-access-control"
			>
				<div className="space-y-10 text-slate-700">
					{/* Brand Icons Row */}
					<div className="flex items-center gap-6 pt-1">
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/dormakaba-logo.svg" alt="dormakaba" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/von-duprin-logo.svg" alt="Von Duprin" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/adams-rite-logo.svg" alt="Adams Rite" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/norton-rixson-logo.svg" alt="Norton Rixson" className="h-5 w-auto" />
						</div>
					</div>

					<p>The security of a luxury property should be robust yet discreet. We choose to work with a curated selection of industry-leading brands to ensure your access control and door hardware are not just functional but also elevate the entire guest experience while providing peace of mind for staff and management.</p>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Reliable & Smart Access with Dormakaba</h3>
						<p>We partner with dormakaba because they are a global leader in providing comprehensive access solutions specifically tailored for hospitality. Their systems are at the forefront of modern access control, integrating physical security with a seamless digital experience.</p>
						<p className="font-medium text-slate-800">We frequently install Dormakaba&apos;s top-tier products, including:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Mobile Access Solutions:</strong> Dormakaba&apos;s systems are the gold standard for mobile keys, seamlessly integrating with platforms like Apple Wallet. This allows guests to check in and access their rooms, elevators, and other common areas with their iPhone or Apple Watch, providing a convenient and modern experience that reflects your property&apos;s luxury standards.</li>
							<li><strong>Quantum Pixel+ & Saffire LX Electronic Locks:</strong> These locks represent the pinnacle of design and technology. The Quantum Pixel+ lock features a minimalist, futuristic aesthetic with hidden electronics, making it blend seamlessly with any high-end décor. The Saffire LX combines sophisticated RFID technology with an understated design. Both offer exceptional reliability and are engineered for quiet operation, ensuring guest comfort is never disturbed.</li>
							<li><strong>Ambiance Access Management Software:</strong> This powerful software provides comprehensive, real-time control over all access points, including guest rooms, common areas, and back-of-house doors. It integrates with your Property Management System (PMS) to streamline check-in and check-out, and it offers advanced features like energy management, allowing your staff to automate lighting and HVAC based on room occupancy.</li>
						</ul>
						<p>By integrating Dormakaba&apos;s solutions, we guarantee that your access control system is not only secure but also a key part of a modern, convenient, and energy-efficient guest experience.</p>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Safety & Performance with Von Duprin</h3>
						<p>Building on this foundation of modern security, we incorporate Von Duprin&apos;s exceptional life-safety and performance hardware. As the inventor of the panic device, Von Duprin is synonymous with reliability and durability in high-traffic environments.</p>
						<p className="font-medium text-slate-800">Our expertise with Von Duprin enables us to implement solutions that offer:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Quiet Electric Latch Retraction (QEL):</strong> In a luxury environment, noise is a distraction. QEL technology offers an ultra-quiet motorized latch retraction that eliminates the sound of a panic device, making it ideal for back-of-house doors near guest rooms, conference halls, or dining areas.</li>
							<li><strong>Concealed Vertical Exit Devices:</strong> Standard exit devices can disrupt a sophisticated aesthetic. Von Duprin&apos;s concealed devices are installed within the door frame, providing all the necessary life-safety functionality without compromising on clean architectural lines.</li>
							<li><strong>Electronic Monitoring and Control:</strong> We integrate Von Duprin&apos;s electronic switches (e.g., RX, LX) with your overall access control system. This allows for real-time monitoring of door status (e.g., opened, locked, unlocked) for security, while features like Remote Undogging (RU) provide the ability to remotely secure or release doors as needed, simplifying operations for your security staff.</li>
						</ul>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Aesthetic & Specialized Security with Adams Rite</h3>
						<p>For modern and architecturally significant spaces, we turn to Adams Rite, the leading authority on hardware for aluminum and glass storefront doors. Their specialized products are designed to secure the clean lines of contemporary design.</p>
						<p className="font-medium text-slate-800">We frequently install Adams Rite&apos;s top-tier products, including:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>DL100 Wireless Deadlatch:</strong> This battery-operated deadlatch is the perfect retrofit solution for aluminum and glass doors, offering a sleek, minimalist profile that doesn&apos;t detract from the aesthetic. It integrates with Aperio wireless technology to support a variety of credentials, including NFC/BLE mobile keys, ensuring perimeter security is both convenient and aesthetically pleasing.</li>
							<li><strong>Ultra-Quiet EcoLatch® Technology:</strong> Adams Rite hardware is engineered for silent operation, eliminating the jarring click of a traditional deadlatch. This quiet performance is a subtle yet crucial detail that enhances the sophisticated ambiance of your property.</li>
							<li><strong>Architectural Finishes:</strong> We select from a variety of architectural finishes that allow us to perfectly match Adams Rite&apos;s hardware to your existing design, ensuring that even the most robust security components look like a seamless part of the architecture.</li>
						</ul>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Touchless & Quiet Automation with Norton Rixson</h3>
						<p>Finally, to complete a truly seamless and accessible access experience, we utilize Norton Rixson&apos;s advanced door control solutions. As a trusted leader in door closers and operators for over a century, their products are designed for reliability and discreet performance.</p>
						<p className="font-medium text-slate-800">Our expertise with Norton Rixson allows us to implement solutions featuring:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Whisper-Quiet Door Closers:</strong> The sound of a slamming door can be a major disruption. We use Norton Rixson&apos;s whisper-quiet door closers in guest corridors, service entrances, and other sensitive areas to ensure silent and controlled closing, preserving the tranquility of your property.</li>
							<li><strong>Low Energy Door Operators:</strong> These operators provide ADA-compliant, touchless access for entrances, public restrooms, and other high-traffic areas. They can be activated via touchless wave-to-open switches or integrated directly into your access control system via a card reader, offering both convenience and enhanced security.</li>
							<li><strong>Aesthetic & Customization:</strong> Norton Rixson offers custom solutions and a wide range of finishes to ensure that their hardware seamlessly blends into your design. This attention to detail means your access points are not just functional but also a discreet part of the overall aesthetic.</li>
						</ul>
					</div>
				</div>
			</Modal>

			{/* Magnetic Lock / Security Modal */}
			<Modal
				open={openModal === 'maglocks'}
				onClose={() => setOpenModal(null)}
				title="Commercial Magnetic Lock Systems: Allegion & Cobra Controls Excellence"
				labelledBy="maglocks-modal-title"
				id="service-modal-maglocks"
			>
				<div className="space-y-10 text-slate-700">
					{/* Brand Icons Row */}
					<div className="flex items-center gap-6 pt-1">
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/allegion-logo.svg" alt="Allegion" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/cobra-controls-logo.svg" alt="Cobra Controls" className="h-5 w-auto" />
						</div>
					</div>

					<p>When security is paramount, you need electromagnetic lock systems that deliver both uncompromising protection and seamless integration. We partner with industry leaders Allegion and Cobra Controls to provide commercial-grade access control solutions that meet the demanding requirements of modern properties.</p>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Uncompromising Security with Allegion Schlage</h3>
						<p>Allegion&apos;s Schlage electromagnetic locks represent a gold standard in commercial security hardware. These systems are engineered for reliability and feature multiple configurations to secure a wide range of door types in your facility.</p>
						<p className="font-medium text-slate-800">Our Allegion installations include their premium product lines:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Schlage M490/M492 Series:</strong> High-security direct-pull electromagnetic locks offering a strong 1,500 lb. holding force, verified by BHMA standards. These units are ideal for main entrances, secure areas, and high-traffic applications where maximum security is essential. The compact design allows for clean installations on both wood and metal door frames.</li>
							<li><strong>Schlage M450/M452 Surface Mount:</strong> Versatile surface-mount maglocks perfect for glass doors, aluminum storefronts, and retrofit applications. These units provide reliable security without compromising the aesthetic appeal of modern architectural designs, making them ideal for commercial spaces.</li>
							<li><strong>Allegion Delayed Egress M490DE:</strong> Code-compliant delayed egress locks for stairwell and emergency exit applications. These specialized units meet NFPA 101 Life Safety Code requirements while maintaining security, providing a 15-second delay before release to prevent unauthorized egress while ensuring emergency compliance.</li>
							<li><strong>Schlage Shear Lock Series:</strong> Designed for sliding doors and applications requiring exceptional horizontal force resistance. These concealed units are perfect for applications where traditional direct-pull locks are not suitable, such as patio doors and warehouse entrances. They offer a powerful 3,000 lb. holding force.</li>
						</ul>
						<p>Every Allegion installation includes comprehensive monitoring capabilities, backup power systems, and integration with fire alarm systems to ensure both security and life safety compliance.</p>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Advanced Access Control with Cobra Controls</h3>
						<p>Building on this foundation of robust hardware, we integrate Cobra Controls&apos; sophisticated access control systems to create comprehensive security networks. Cobra Controls specializes in scalable solutions that grow with your property needs, from single-door systems to enterprise-wide networks.</p>
						<p className="font-medium text-slate-800">Our Cobra Controls expertise enables us to implement solutions featuring:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>ACP Network Series Controllers:</strong> TCP/IP networked access control with unlimited system expansion capabilities. These controllers support both standalone and networked configurations, allowing you to start with a single door and expand to hundreds of access points using standard network infrastructure.</li>
							<li><strong>Non-Proprietary Wiegand Compatibility:</strong> Unlike many access control systems, Cobra Controls uses the industry-standard Wiegand format for readers and inputs. This means you are not locked into proprietary hardware and can integrate with existing security systems or choose from a wide range of compatible devices.</li>
							<li><strong>CC-3800 Proximity Readers:</strong> Weatherproof proximity readers with integrated keypads for dual-credential access control. These rugged units are perfect for outdoor installations and provide both convenience and security with multiple authentication methods (card, PIN, or card+PIN).</li>
						</ul>
						<p>Whether you&apos;re securing a single vacation rental or managing access across multiple commercial properties, our Cobra Controls systems provide the flexibility and reliability you need for comprehensive property protection.</p>
					</div>
				</div>
			</Modal>

			{/* Sauna & Spa Modal */}
			<Modal
				open={openModal === 'sauna'}
				onClose={() => setOpenModal(null)}
				title="Spa and Sauna: Professional Wellness Solutions"
				labelledBy="sauna-modal-title"
				id="service-modal-sauna"
			>
				<div className="space-y-10 text-slate-700">
					{/* Brand Icons Row */}
					<div className="flex items-center gap-6 pt-1">
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/sunlighten-logo.svg" alt="Sunlighten" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/finnleo-logo.svg" alt="Finnleo" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/amerec-logo.svg" alt="Amerec" className="h-5 w-auto" />
						</div>
					</div>

					<p>Creating the perfect wellness environment requires expertise in both traditional and modern sauna technologies. We provide comprehensive installation, maintenance, and repair services for luxury residential and commercial spa facilities.</p>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Infrared Wellness Technology</h3>
						<p>Modern infrared saunas represent the pinnacle of home wellness technology, offering therapeutic benefits at lower temperatures than traditional saunas. We specialize in premium infrared systems that provide deep tissue penetration and enhanced comfort for daily use.</p>
						<p className="font-medium text-slate-800">Our infrared sauna expertise includes:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Full Spectrum Infrared Systems:</strong> Advanced heating technology combining near, mid, and far infrared wavelengths for optimal therapeutic benefits. These systems operate at comfortable temperatures while delivering deep tissue therapy and enhanced recovery benefits.</li>
							<li><strong>Smart Control Integration:</strong> Modern infrared saunas feature app-based controls, pre-programmed wellness sessions, and integration with home automation systems. We configure these systems for seamless operation and maximum user convenience.</li>
							<li><strong>Custom Installation Solutions:</strong> From pre-built cabin installations to fully custom built-in designs, we handle electrical integration, ventilation requirements, and smart home connectivity for infrared sauna systems.</li>
							<li><strong>Health-Focused Features:</strong> Premium infrared systems include chromotherapy lighting, integrated sound systems, and air purification technologies. We ensure all wellness features are properly installed and calibrated for optimal performance.</li>
						</ul>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Traditional Sauna & Steam Systems</h3>
						<p>Traditional Finnish saunas and steam rooms require specialized knowledge of heating systems, ventilation, and moisture management. Our expertise ensures these systems operate safely and efficiently while providing the authentic sauna experience that guests expect.</p>
						<p className="font-medium text-slate-800">Our traditional sauna services encompass:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Steam Generator Integration:</strong> Complete steam room systems including generators, distribution piping, and control systems. Our installations include proper drainage, ventilation, and safety features required for commercial and residential applications.</li>
							<li><strong>Ventilation and Climate Control:</strong> Critical ventilation design ensures proper air circulation, moisture management, and temperature control. We design and install ventilation systems that maintain optimal conditions while preventing moisture damage.</li>
							<li><strong>Maintenance and Repair Services:</strong> We provide ongoing maintenance, troubleshooting, and repair services for all major sauna and spa brands, ensuring your investment continues to perform reliably.</li>
						</ul>
						<p>Whether you&apos;re installing a new wellness facility or maintaining existing sauna systems, our specialized expertise ensures safe, efficient operation and guest satisfaction for years to come.</p>
					</div>
				</div>
			</Modal>

			{/* Vacation Rental & Property Management Modal */}
			<Modal
				open={openModal === 'rental'}
				onClose={() => setOpenModal(null)}
				title="Vacation Rental & Property Management Solutions: Smart Automation for Maximum Efficiency"
				labelledBy="rental-modal-title"
				id="service-modal-rental"
			>
				<div className="space-y-10 text-slate-700">
					{/* Brand Icons Row */}
					<div className="flex items-center gap-6 pt-1">
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/smartthings-logo.svg" alt="SmartThings" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/hubitat-logo.svg" alt="Hubitat" className="h-5 w-auto" />
						</div>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/70">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-icons/control4-logo.svg" alt="Control4" className="h-5 w-auto" />
						</div>
					</div>

					<p>Modern vacation rental success depends on seamless automation that enhances guest experiences while minimizing operational overhead. We design and install comprehensive smart home ecosystems specifically tailored for property management efficiency, guest satisfaction, and revenue optimization.</p>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Automated Guest Experience Systems</h3>
						<p>The guest experience begins before arrival and continues throughout their stay. Our automation systems create seamless, contactless experiences that guests love while reducing your workload and operational costs.</p>
						<p className="font-medium text-slate-800">Our guest-focused automation includes:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Smart Check-In Automation:</strong> Automated door lock codes that activate at check-in time and deactivate at checkout, integrated with your property management system. Guests receive their unique access codes automatically, eliminating key exchanges and reducing contact points.</li>
							<li><strong>Welcome Lighting Scenes:</strong> Automated lighting that creates a warm welcome when guests arrive and adjusts throughout their stay. Energy-efficient scheduling ensures lights are only on when needed, reducing utility costs while maintaining the perfect ambiance.</li>
							<li><strong>Climate Control Optimization:</strong> Smart thermostats that automatically adjust temperature based on occupancy, arrival times, and guest preferences. Pre-cooling or pre-heating before guest arrival ensures comfort while minimizing energy waste during vacant periods.</li>
							<li><strong>Security and Monitoring:</strong> Discreet security cameras for common areas, smart doorbells for guest communication, and occupancy monitoring to ensure property protection while respecting guest privacy.</li>
						</ul>
					</div>

					<div className="space-y-5">
						<h3 className="text-xl font-semibold tracking-tight text-slate-800">Property Management and Operational Efficiency</h3>
						<p>Behind the scenes, our automation systems provide property managers with powerful tools to monitor, control, and optimize their operations remotely. These systems reduce maintenance calls, prevent costly issues, and provide valuable insights for business optimization.</p>
						<p className="font-medium text-slate-800">Our management-focused solutions feature:</p>
						<ul className="list-disc pl-5 space-y-4">
							<li><strong>Remote Monitoring and Control:</strong> Comprehensive dashboards that allow you to monitor and control all property systems from anywhere. Check lock status, adjust temperatures, control lighting, and receive alerts for any issues requiring attention.</li>
							<li><strong>Preventive Maintenance Alerts:</strong> Smart sensors that monitor HVAC performance, water usage, and electrical systems, providing early warning of potential issues before they become costly problems or guest complaints.</li>
							<li><strong>Energy Management Systems:</strong> Automated systems that reduce energy consumption during vacant periods while ensuring guest comfort during occupancy. These systems typically pay for themselves through utility savings within the first year.</li>
							<li><strong>Integration with Property Management Software:</strong> Seamless integration with popular platforms like Airbnb, VRBO, and property management systems ensures your automation responds automatically to booking changes, guest communications, and operational schedules.</li>
						</ul>
						<p>Whether you&apos;re managing a single vacation rental or a portfolio of properties, our automation solutions are designed to scale with your business while providing the reliability and guest satisfaction that drives positive reviews and repeat bookings.</p>
					</div>
				</div>
			</Modal>
		</section>
	);
}

function HeaderIntro() {
	return (
		<div className="max-w-4xl mx-auto text-center mb-24">
			<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
				<span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent font-tan-headline">ReefTech Services</span>
			</h2>
			<p className="text-xl md:text-2xl text-white leading-relaxed">
ReefTech provides comprehensive solutions for Hawaii&apos;s property managers. We handle everything from Access Control to Emergency Service. Our integrated approach eliminates the need for multiple contractors, streamlining operations and reducing costs for multi-property management companies across the Big Island.			</p>
		</div>
	);
}

function CategoryBlock({ category, index, onOpen }: { category: Category; index: number; onOpen: () => void }) {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: '-80px' });
	const isLighting = category.id === 'lighting';
	const isAccessControl = category.id === 'access-control';
	const isMaglocks = category.id === 'maglocks';
	const isSauna = category.id === 'sauna';
	const isRental = category.id === 'rental';

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
			className="relative"
		>
			<div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.4)] transition-shadow overflow-hidden">
				{isLighting && (
					<div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
						<div className="relative h-32 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/leviton-lights.webp" alt="Leviton lighting installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
							<div className="absolute top-1 left-1 bg-white/85 backdrop-blur-sm rounded-md px-1 py-0.5 shadow ring-1 ring-white/60">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/photos/brand-icons/leviton-logo.svg" alt="Leviton logo" className="h-3 w-auto" loading="lazy" />
							</div>
						</div>
						<div className="relative h-32 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/lutron-lights.webp" alt="Lutron lighting system" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
							<div className="absolute top-1 left-1 bg-white/85 backdrop-blur-sm rounded-md px-1 py-0.5 shadow ring-1 ring-white/60">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/photos/brand-icons/lutron-logo.svg" alt="Lutron logo" className="h-3 w-auto" loading="lazy" />
							</div>
						</div>
					</div>
				)}
				{isLighting && (
					<div className="hidden lg:grid grid-cols-2 gap-4 absolute inset-y-6 right-6 w-[400px] xl:w-[460px]">
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/leviton-lights.webp" alt="Leviton lighting installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
							<div className="absolute top-2 left-2 bg-white/85 backdrop-blur-sm rounded-md px-1.5 py-1 shadow ring-1 ring-white/60">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/photos/brand-icons/leviton-logo.svg" alt="Leviton logo" className="h-5 w-auto" loading="lazy" />
							</div>
						</div>
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/lutron-lights.webp" alt="Lutron lighting system" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
							<div className="absolute top-2 left-2 bg-white/85 backdrop-blur-sm rounded-md px-1.5 py-1 shadow ring-1 ring-white/60">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="/photos/brand-icons/lutron-logo.svg" alt="Lutron logo" className="h-5 w-auto" loading="lazy" />
							</div>
						</div>
						<span className="absolute -bottom-5 left-0 ml-1 text-[11px] tracking-wide font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow">
							{index + 1}
						</span>
					</div>
				)}
				{isAccessControl && (
					<div className="mt-6 grid grid-cols-3 gap-2 lg:hidden">
						<div className="relative h-24 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/access-control-1.png" alt="Access control system installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-24 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock1.jpg" alt="Access control magnetic lock installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-24 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock3.jpg" alt="Access control system overview" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
					</div>
				)}
				{isAccessControl && (
					<div className="hidden lg:grid grid-cols-3 gap-3 absolute inset-y-6 right-6 w-[500px] xl:w-[580px]">
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition-shadow duration-500 z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/access-control-1.png" alt="Access control system installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition-shadow duration-500 z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock1.jpg" alt="Access control magnetic lock installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition-shadow duration-500 z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock3.jpg" alt="Access control system overview" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<span className="absolute -bottom-5 left-0 ml-1 text-[11px] tracking-wide font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow">
							{index + 1}
						</span>
					</div>
				)}
				{isMaglocks && (
					<div className="mt-6 grid grid-cols-3 gap-2 lg:hidden">
						<div className="relative h-24 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock2.jpg" alt="Magnetic lock hardware detail" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-24 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock4.jpg" alt="Magnetic lock system installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-24 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock5.jpg" alt="Magnetic lock security system" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
					</div>
				)}
				{isMaglocks && (
					<div className="hidden lg:grid grid-cols-3 gap-3 absolute inset-y-6 right-6 w-[500px] xl:w-[580px]">
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition-shadow duration-500 z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock2.jpg" alt="Magnetic lock hardware detail" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition-shadow duration-500 z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock4.jpg" alt="Magnetic lock system installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition-shadow duration-500 z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/mag-lock5.jpg" alt="Magnetic lock security system" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<span className="absolute -bottom-5 left-0 ml-1 text-[11px] tracking-wide font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow">
							{index + 1}
						</span>
					</div>
				)}
				{isSauna && (
					<div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
						<div className="relative h-32 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/Jacuzzi-Hawaii.jpg" alt="Jacuzzi spa installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-32 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/sauna-1.jpg" alt="Professional sauna installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
					</div>
				)}
				{isSauna && (
					<div className="hidden lg:grid grid-cols-2 gap-4 absolute inset-y-6 right-6 w-[500px] xl:w-[580px]">
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/Jacuzzi-Hawaii.jpg" alt="Jacuzzi spa installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/sauna-1.jpg" alt="Professional sauna installation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<span className="absolute -bottom-5 left-0 ml-1 text-[11px] tracking-wide font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow">
							{index + 1}
						</span>
					</div>
				)}
				{isRental && (
					<div className="mt-6 lg:hidden">
						<div className="relative h-48 overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/vacation-rental.jpg" alt="Smart vacation rental automation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
					</div>
				)}
				{isRental && (
					<div className="hidden lg:block absolute inset-y-6 right-6 w-[500px] xl:w-[580px]">
						<div className="relative h-full overflow-hidden rounded-xl shadow-md group z-[9999]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="/photos/brand-pictures/vacation-rental.jpg" alt="Smart vacation rental automation" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
						</div>
						<span className="absolute -bottom-5 left-0 ml-1 text-[11px] tracking-wide font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow">
							{index + 1}
						</span>
					</div>
				)}
				<div className={`relative ${isLighting ? 'lg:pr-[420px] xl:pr-[500px]' : isSauna || isMaglocks || isRental ? 'lg:pr-[520px] xl:pr-[600px]' : isAccessControl ? 'lg:pr-[520px] xl:pr-[600px]' : ''}`}>
					<h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
						<span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent">
							{category.title}
						</span>
					</h3>
					{category.brands && (
						<div className="flex flex-wrap items-center gap-2 mb-6">
							{category.brands.map(b => (
								<BrandBadge key={b.name} brand={b} />
							))}
						</div>
					)}
					{category.blurb && (
						<div className="text-lg text-gray-600 leading-relaxed space-y-5">
							{category.blurb.split(/\n\n+/).map((para, i) => (
								<p key={i}>{para}</p>
							))}
						</div>
					)}
					{category.products && !category.blurb && (
						<ul className="space-y-4">
							{category.products.map(prod => (
								<li key={prod.name} className="group">
									<div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
										<span className="font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
											{prod.name}
										</span>
										<span className="text-gray-500 text-sm hidden sm:inline">—</span>
										<p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
											{prod.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					)}
					<div className="mt-8">
						<button
							type="button"
							onClick={onOpen}
							className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white transition disabled:opacity-50"
						>
							Read More
							<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
						</button>
					</div>
				</div>
				{!isLighting && !isAccessControl && !isMaglocks && !isSauna && !isRental && (
					<div className="hidden lg:flex w-64 flex-none items-center justify-center">
						{category.image ? (
							<div className="relative w-full h-48 overflow-hidden rounded-2xl shadow-lg group">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={category.image}
									alt={category.title + ' representative image'}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
								<span className="absolute bottom-2 left-3 text-[11px] tracking-wide font-semibold text-white/90 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
									{index + 1}
								</span>
							</div>
						) : (
							<div className="w-full h-48 rounded-2xl bg-gradient-to-br from-cyan-50 to-lime-50 border border-cyan-100 flex items-center justify-center text-cyan-600 text-sm font-medium tracking-wide">
								Category {index + 1}
							</div>
						)}
					</div>
				)}
				<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent hover:ring-cyan-300/40 transition-all duration-500" />
			</div>
		</motion.div>
	);
}

function BrandBadge({ brand }: { brand: Brand }) {
	return (
		<span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-lime-500/10 border border-cyan-300/30 text-[11px] font-semibold tracking-wide text-cyan-700 shadow-[0_0_0_3px_rgba(6,182,212,0.08)]">
			{brand.name}
		</span>
	);
}
