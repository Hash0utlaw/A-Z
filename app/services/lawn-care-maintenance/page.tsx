import ServicePageTemplate from "@/components/service-page-template"

export default function LawnCareMaintenancePage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Lawn Care & Maintenance"
      description="Keep your lawn healthy, green, and beautiful year-round with our comprehensive lawn care and maintenance services."
      heroImage="/lawn-care-maintenance/hero.png"
      benefits={[
        "Save time and energy with professional lawn care services",
        "Maintain a consistently healthy, green lawn throughout the growing season",
        "Prevent weed growth, disease, and pest infestations with proactive treatments",
        "Improve soil health and grass root development with proper fertilization",
        "Enhance your property's curb appeal and value with a well-maintained lawn",
        "Receive customized care plans based on your lawn's specific needs and conditions",
      ]}
      process={[
        {
          title: "Initial Lawn Assessment",
          description:
            "We evaluate your lawn's current condition, identifying grass types, problem areas, soil quality, and specific needs.",
        },
        {
          title: "Customized Care Plan",
          description:
            "Based on the assessment, we develop a tailored lawn care program addressing your lawn's unique requirements and your goals.",
        },
        {
          title: "Regular Maintenance",
          description:
            "We provide scheduled mowing, edging, and trimming services to keep your lawn looking its best at all times.",
        },
        {
          title: "Seasonal Treatments",
          description:
            "Throughout the year, we apply appropriate fertilizers, weed control, and pest management treatments as needed.",
        },
        {
          title: "Ongoing Monitoring",
          description:
            "Our team continuously monitors your lawn's health, making adjustments to the care plan as conditions change.",
        },
        {
          title: "Annual Review",
          description:
            "We conduct yearly comprehensive reviews to evaluate progress and plan improvements for the coming season.",
        },
      ]}
      gallery={[
        {
          image: "/lawn-care-maintenance/lush-lawn.png",
          title: "Lush Green Lawn",
          description: "Perfectly maintained residential lawn with clean edges",
        },
        {
          image: "/lawn-care-maintenance/commercial-property.png",
          title: "Commercial Property Maintenance",
          description: "Well-maintained commercial property with manicured lawn areas",
        },
        {
          image: "/lawn-care-maintenance/lawn-renovation.png",
          title: "Lawn Renovation",
          description: "Before and after of a lawn renovation project",
        },
        {
          image: "/lawn-care-maintenance/fall-cleanup.png",
          title: "Seasonal Cleanup",
          description: "Fall cleanup service with leaf removal and lawn preparation",
        },
        {
          image: "/lawn-care-maintenance/weed-control.png",
          title: "Weed Control Treatment",
          description: "Professional weed control application for a healthier lawn",
        },
        {
          image: "/lawn-care-maintenance/lawn-aeration.png",
          title: "Lawn Aeration",
          description: "Core aeration service to improve soil health and grass growth",
        },
      ]}
      testimonials={[
        {
          name: "David & Lisa Thompson",
          location: "Residential Clients",
          rating: 5,
          text: "We've been using A-Z Landscaping for our lawn care for three years now, and our yard has never looked better. Their team is reliable, thorough, and always professional.",
        },
        {
          name: "Amanda Rodriguez",
          location: "Homeowners Association Manager",
          rating: 5,
          text: "A-Z maintains all the common areas in our community, and they do an outstanding job. The lawns are always immaculate, and they're very responsive to any special requests.",
        },
        {
          name: "James Wilson",
          location: "Residential Client",
          rating: 5,
          text: "My lawn was in terrible shape when I bought my home. A-Z developed a restoration plan, and within one season, it was transformed into the best-looking lawn on the block!",
        },
      ]}
      faqs={[
        {
          question: "How often should my lawn be mowed?",
          answer:
            "During the growing season, most lawns benefit from weekly mowing. However, this can vary based on grass type, weather conditions, and your preferences. We'll recommend an optimal mowing schedule for your specific lawn as part of your maintenance plan.",
        },
        {
          question: "What's included in your basic lawn maintenance service?",
          answer:
            "Our basic lawn maintenance service includes mowing, edging along walkways and driveways, trimming around obstacles, and cleanup of clippings from hard surfaces. We can also include additional services such as fertilization, weed control, and seasonal treatments in a comprehensive care package.",
        },
        {
          question: "When is the best time to fertilize my lawn?",
          answer:
            "The optimal fertilization schedule depends on your grass type and local climate. Generally, cool-season grasses benefit from fertilization in early spring and fall, while warm-season grasses should be fertilized in late spring and summer. Our lawn care programs include properly timed fertilization applications for your specific grass type.",
        },
        {
          question: "How do you handle weed control?",
          answer:
            "We use a combination of pre-emergent and post-emergent herbicides applied at strategic times throughout the year to prevent and control weeds. Our approach focuses on targeted applications rather than blanket treatments, minimizing environmental impact while effectively managing weeds.",
        },
        {
          question: "Do you offer organic lawn care options?",
          answer:
            "Yes, we offer organic and eco-friendly lawn care programs that use natural fertilizers and biological controls instead of synthetic chemicals. While these programs may take longer to show results, they can be very effective while being safer for children, pets, and the environment.",
        },
      ]}
      relatedServices={[
        {
          title: "Garden Design & Planting",
          slug: "garden-design-planting",
        },
        {
          title: "Irrigation Systems",
          slug: "irrigation-systems",
        },
        {
          title: "Seasonal Services",
          slug: "seasonal-services",
        },
      ]}
    />
  )
}
