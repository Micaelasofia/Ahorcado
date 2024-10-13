import image0 from '../assets/imagenes/0.png';
import image1 from '../assets/imagenes/1.png';
import image2 from '../assets/imagenes/2.png';
import image3 from '../assets/imagenes/3.png';
import image4 from '../assets/imagenes/4.png';
import image5 from '../assets/imagenes/5.png';
import image6 from '../assets/imagenes/6.png';
import image7 from '../assets/imagenes/7.png';
import image8 from '../assets/imagenes/8.png';
import image9 from '../assets/imagenes/9.png';

const images : string[] = [
   image0,
   image1,
   image2,
   image3,
   image4,
   image5,
   image6,
   image7,
   image8,
   image9,
];

interface Props {
    imageNumber: number;
}

export function HangImage( { imageNumber }: Props ) {
    if ( imageNumber >= 9 ) {
        imageNumber = 9;
    }

    return (
        <img 
        src= {images [imageNumber]} alt=""
        style={{ width: 250 }}
        />
    );

}