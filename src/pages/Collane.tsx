import ProductCategoryPage from "@/components/sections/ProductCategoryPage";

export default function Collane() {
  return (
    <ProductCategoryPage
      eyebrow="Creazioni Preziose"
      title="Collane"
      intro="Le collane sono studiate per accompagnare il profilo con equilibrio, luce e continuità. Ogni linea è pensata per valorizzare la materia senza appesantirla."
      image="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1400&auto=format&fit=crop"
      sections={[
        {
          title: "Luce sul décolleté",
          content: "Catene sottili, pendenti e composizioni a più livelli costruite per muoversi con naturalezza e catturare la luce nei punti giusti.",
        },
        {
          title: "Metalli e finiture",
          content: "Oro giallo, bianco e rosa si alternano in finiture lucide o satinate, con attenzione alla caduta e al comfort quotidiano.",
        },
        {
          title: "Pietre protagoniste",
          content: "Diamanti, acquemarine e zaffiri vengono scelti per creare un punto focale elegante, mai eccessivo, sempre leggibile da lontano.",
        },
      ]}
    />
  );
}