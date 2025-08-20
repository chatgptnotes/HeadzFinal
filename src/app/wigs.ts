export interface Wig {
  id: string;
  name: string;
  src: string;
  hint: string;
}

export const wigs: Wig[] = [
  { id: 'short-pixie', name: 'Short Pixie', src: "/wig-images/shortpix.png", hint: 'pixie cut' },
  { id: 'curly-afro', name: 'Curly Afro', src: "/wig-images/curlyafro.jpg", hint: 'afro hair' },
  { id: 'modern-mullet', name: 'Modern Mullet', src: "/wig-images/modernmullet.png", hint: 'mullet hair' },
  { id: 'textured-quiff', name: "Textured Quiff", src: "/wig-images/Textured.png", hint: "textured quiff" },
  { id: 'pompadour', name: "Pompadour", src: "/wig-images/pompdour.png", hint: "pompadour haircut" },
  { id: 'classic-pompadour', name: "Classic Pompadour", src: "/wig-images/clasicpomp.png", hint: "classic pompadour" },
  { id: 'side-swept-pompadour', name: "Side-Swept Pompadour", src: "/wig-images/sidesweptpompadour.png", hint: "side-swept pompadour" },
  { id: 'short-side-part', name: "Short Side Part", src: "/wig-images/shortside.png", hint: "short side-part" },
  { id: 'curly-top', name: "Curly Top", src: "/wig-images/curlytop.png", hint: "curly top" },
];
