import "../styles/makayDescription.css";
import mBab from "./images/makay-babord.jpeg";
import mCoc from "./images/makay-cockpit-rs.jpeg";
import manchored from "./images/makay-anchored.jpeg";

const boats = [
	{
		id: 1,
		name: "Makay",
		image: manchored,
		description:
			"The MAKAI M37 seamlessly combines luxury and performance, redefining powercat standards.",
		technicalDetails: {
			length: 37,
			width: 15.2,
			draft: 1.9,
			cabins: 2,
			maxMotorization: 740,
			passengerCapacity: 12,
		},
		cockpitDescription: `The Makay M37 is a luxurious and high-performance motor catamaran that 
        sets a new standard in its category. Designed with a perfect blend of elegance, comfort, and
        functionality, the Makay M37 offers an unparalleled experience on the water, whether for
        leisure, extended cruising, or social gatherings.nspired by the timeless elegance of sports cars,
        the Makay M37 features sleek lines and a modern profile.
The spacious layout ensures both comfort and practicality, making it ideal for family outings or
hosting guests.
The cockpit is one of the largest in its class, designed for socializing, dining, or simply enjoying the view.
Its ergonomic design ensures seamless movement and comfort for passengers.Powered by twin engines with a maximum motorization of up to 740 HP, the Makay M37 delivers high performance and efficiency.
Its advanced hull design ensures a smooth ride even in challenging conditions, with speeds reaching up to 35 knots.Whether you’re seeking an adventurous cruise, a relaxing getaway, or a memorable social event on the water, the Makay M37 delivers a unique experience that combines style, functionality, and unmatched comfort.
`,
	},
	{
		id: 2,
		name: "Port-side Cabin",
		image: mBab,
		description:
			"The M37 motor catamaran features two well-appointed cabins: a spacious master cabin and a comfortable guest cabin.",
		technicalDetails: {
			length: 37,
			width: 15.2,
			draft: 1.9,
			cabins: 2,
			maxMotorization: 740,
			passengerCapacity: 12,
		},
		cockpitDescription: `The master cabin is equipped with a queen-size bed,
         providing a restful and comfortable sleeping area.
It also includes plenty of storage spaces and a privateen-suite bathroom,
ensuring convenience during long voyages.Guest Cabin:
The guest cabin offers a double bed and an additional single bed, making it suitable for
family or friends. It is thoughtfully arranged to provide comfort and privacy, even for extended stays.
Each cabin comes with a private bathroom, equipped with modern amenities, including a separate shower.
These spacious bathrooms ensure the comfort and privacy of every guest onboard.
Both cabins are crafted using high-quality materials, such as luxurious upholstery and elegant finishes.
This attention to detail enhances the onboard experience, providing a sense of opulence.
Natural Light and Ventilation:
Large windows in the cabins allow for abundant natural light and breathtaking views of the sea.
Adequate ventilation ensures a fresh and airy environment at all times.`,
	},
	{
		id: 3,
		name: "Makay Cockpit",
		image: mCoc,
		description:
			"The Makay M37 boasts an exceptionally spacious cockpit, one of the largest in its class.",

		technicalDetails: {
			length: 37,
			width: 15.2,
			draft: 1.9,
			cabins: 2,
			maxMotorization: 740,
			passengerCapacity: 12,
		},
		cockpitDescription: `The cockpit is exceptionally large, 
            allowing for seamless movement and plenty of space for passengers
            to gather and enjoy.The layout is thoughtfully designed to maximize social interaction,
             whether for relaxing, dining, or simply enjoying the view.Built with high-quality materials,
             the cockpit ensures both durability and elegance.The Makay M37 cockpit is a masterpiece
             of design and functionality, offering the perfect combination of luxury, comfort, and versatility. Whether hosting guests or
             embarking on serene cruises, it’s designed to deliver an unmatched experience at sea.`,
	},
];
export default boats;
