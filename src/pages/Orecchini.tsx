import ProductCategoryPage from "@/components/sections/ProductCategoryPage";

export default function Orecchini() {
  return (
    <ProductCategoryPage
      eyebrow="Creazioni Preziose"
      title="Orecchini"
      intro="Gli orecchini definiscono il volto con precisione: piccoli movimenti di luce che accompagnano il profilo senza appesantirlo."
      image="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=1400&q=80"
      sections={[
        {
          title: "Sagome essenziali",
          content: "Dal punto luce alle forme pendenti, la priorità è mantenere il viso al centro con una geometria pulita e raffinata.",
        },
        {
          title: "Movimento controllato",
          content: "Ogni orecchino è progettato per muoversi con il corpo in modo morbido, evitando vibrazioni eccessive o sbilanciamenti.",
        },
        {
          title: "Accenti di luce",
          content: "Diamanti e pietre colorate vengono usati per creare un punto di riflessione vicino al viso, discreto ma memorabile.",
        },
      ]}
    />
  );
}