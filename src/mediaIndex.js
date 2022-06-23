import media1 from "./Views/Home/z1.png";
import media2 from "./Views/Home/z2.png";
import media3 from "./Views/Home/map1.png";
import media4 from "./Views/Home/w2.png";
import media5 from "./Views/Home/ma1.png";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
