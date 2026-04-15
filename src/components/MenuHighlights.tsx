import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "Les Entrées",
    items: [
      { name: "Samossas viandes (2 pièces)", price: "7,00" },
      { name: "Samossas légumes (2 pièces)", price: "6,00" },
      { name: "Mixte Pakora (beignets d'ognons, pommes de terre, aubergines)", price: "9,50" },
      { name: "Poulet Tikka (morceaux de poulet blanc)", price: "9,50" },
      { name: "Agneau Tikka (morceaux d'agneau)", price: "10,50" },
      { name: "Agneau Sheek Kabab", price: "9,50" },
      { name: "Saumon Tikka (morceaux de saumon)", price: "10,00" },
      { name: "Poulet Tandoori", price: "7,50" },
      { name: "Mixed Grill (poulet et agneau Tikka)", price: "11,00" },
    ],
  },
  {
    title: "Les Salades",
    items: [
      { name: "Salade Raïta", price: "5,50" },
      { name: "Salade Crevettes", price: "7,00" },
      { name: "Salade Poulet", price: "9,50" },
      { name: "Salade Saumon", price: "10,50" },
      { name: "Salade Végétarienne", price: "8,00" },
    ],
  },
  {
    title: "Les Pains",
    items: [
      { name: "Nan Nature", price: "2,50" },
      { name: "Nan Garlic (à l'Ail)", price: "4,50" },
      { name: "Nan Garlic au fromage", price: "5,00" },
      { name: "Nan au Beurre", price: "3,00" },
      { name: "Nan au Fromage", price: "4,00" },
      { name: "Nan Légumes", price: "5,00" },
    ],
  },
  {
    title: "Agneau",
    items: [
      { name: "Agneau au Curry", price: "17,00" },
      { name: "Agneau Tikka Massala", price: "17,50" },
      { name: "Agneau aux Épinards", price: "17,50" },
      { name: "Agneau Korma (à la crème)", price: "17,50" },
      { name: "Agneau Baigan (Aubergines)", price: "17,50" },
      { name: "Agneau Dal Ghost (Lentilles)", price: "17,50" },
    ],
  },
  {
    title: "Poissons et fruits de mer",
    items: [
      { name: "Saumon au Curry", price: "17,50" },
      { name: "Saumon Tikka Massala", price: "18,00" },
      { name: "Saumon Malai (à la crème)", price: "18,00" },
      { name: "Crevettes au Curry", price: "17,50" },
      { name: "Crevettes Korma (à la crème)", price: "18,00" },
      { name: "Crevettes Tikka Massala", price: "18,00" },
    ],
  },
  {
    title: "Plats végétariens",
    items: [
      { name: "Aloo Jeera (Pommes de terre grillées au cumin)", price: "14,00" },
      { name: "Baingan Bartha (Caviar d'aubergine)", price: "14,00" },
      { name: "Dal Makhani (Lentilles au beurre et à la crème)", price: "14,00" },
      { name: "Saag Malai (Épinards à la crème)", price: "14,00" },
      { name: "Mixed Légumes Curry ou Korma", price: "14,00" },
      { name: "Dal Palak (Lentilles aux curry et épinards)", price: "14,00" },
    ],
  },
  {
    title: "Les Plats",
    items: [
      { name: "Poulet au curry", price: "15,50" },
      { name: "Poulet Tikka Massala", price: "17,50" },
      { name: "Poulet aux Épinards", price: "17,50" },
      { name: "Poulet Korma (à la crème)", price: "17,50" },
      { name: "Poulet Dal (Lentilles)", price: "17,00" },
    ],
  },
  {
    title: "Biryani (les plats complets)",
    items: [
      { name: "Biryani Légumes", price: "15,00" },
      { name: "Biryani Poulet", price: "16,00" },
      { name: "Biryani Agneau", price: "18,00" },
      { name: "Biryani Crevettes", price: "18,00" },
      { name: "Riz Basmati (supplément)", price: "3,50" },
    ],
  },
  {
    title: "Les Desserts",
    items: [
      { name: "Halwa Maison (gâteau de semoule)", price: "5,10" },
      { name: "Gulab Jamun (pâtisserie au miel)", price: "5,10" },
    ],
  },
];

const MenuCategory = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-8 tracking-wide italic">
        {cat.title}
      </h3>
      <div className="space-y-6">
        {cat.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline gap-4 group cursor-default"
          >
            <div className="flex-1">
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </p>
            </div>
            {item.price && (
              <span className="font-heading text-primary text-lg shrink-0 group-hover:text-terracotta transition-colors duration-300">
                {item.price} €
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mt-8" />
    </div>
  );
};

const MenuHighlights = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            La Carte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Cuisine indienne · Déjeuner & Dîner · Fait maison
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title + i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
