import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"
import photos from "@/images/photos";
import slides from "@/images/slides";

//import images
import avatar from "../images/avatar.png";
import derry from "../images/1.jpg"
import virginia from "../images/virginia.jpeg"
import bg from "../images/bg.webp"

export default function Home() {
    const [step, setStep] = useState(0);
    const [index, setIndex] = useState(-1);

    // Map
    const mapContainer = useRef(null)
    const mapContainer2 = useRef(null)
    const map = useRef(null);
    const map2 = useRef(null);
    const [lng, setLng] = useState(108.18996767210655);
    const [lat, setLat] = useState(-6.760812337288243);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        loadMap();
        // loadMap2();
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4))
            setLat(map.current.getCenter().lat.toFixed(4))
            setZoom(map.current.getZoom().toFixed(2))
        })
    })

    const loadMap = async () => {
        mapboxgl.accessToken = "pk.eyJ1IjoiaGF0c3VzaGlyb3l1a2kiLCJhIjoiY2xnMGt4MXNwMHR0NDNqcDlmb3NsdjM3ZSJ9.UEWrPDqMO_uH6ulxOOCkyw";
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        })
    }

    //   const loadMap2 = async () => {
    //     mapboxgl.accessToken = "pk.eyJ1IjoiaGF0c3VzaGlyb3l1a2kiLCJhIjoiY2xnMGt4MXNwMHR0NDNqcDlmb3NsdjM3ZSJ9.UEWrPDqMO_uH6ulxOOCkyw";
    //     if (map2.current) return;

    //     map2.current = new mapboxgl.Map({
    //       container: mapContainer2.current,
    //       style: 'mapbox://styles/mapbox/outdoors-v12',
    //       center: [lng, lat],
    //       zoom: zoom
    //     })
    //   }
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className="hero min-h-screen shadow-lg">
                <div className="hero-overlay bg-opacity-90">
                    <div className='opacity-70'>
                        <Image src={bg} layout="fill" objectFit="cover" className="bg-cover bg-center" />
                    </div>
                </div>
                <div className="card w-80 rounded-xl backdrop-blur border-2 animate-swipe-right">
                    <figure>
                        <Image src={avatar} className="mask mask-squircle scale-75" width={500} height={500} />
                    </figure>
                    <h1 className="text-center text-5xl text-white font-Dancing">Derry & Virginia</h1>
                    <div className="card-body">
                        <p className="text-center text-white font-Dancing text-3xl">Kepada Yth.</p>
                        <p className="text-center text-white font-Dancing text-2xl">Mohon maaf apabila terdapat kesalahan nama/gelar</p>
                    </div>
                </div>
            </div>
            <section id="uhhh" className="hero-overlay shadow-lg min-h-screen">
                <div className="flex h-screen">
                    <div className="m-auto">
                        <p className="text-center flex px-10 font-Dancing text-2xl">
                            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”</p>
                        <p className="text-center pt-5 text-xl font-Dancing">QS. Ar-Rum ayat 21</p>
                    </div>
                </div>
            </section>
            <section className="shadow-lg pb-5 pt-10" id="mempelai">
                <h1 className="text-center text-5xl font-Dancing">Kedua Mempelai</h1>
                <p className="text-center text-m pt-3 pb-3 text-3xl font-Dancing">Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami</p>
                <div className="container mx-auto content-center">
                    <div className="grid grid-cols-2 justify-center gap-4">
                        <div className="m-4 mr-0 my-20 max-w-full rounded-lg bg-blue-100 py-4 px-4 shadow-lg justify-center">
                            <div className="-mt-16 flex justify-center md:justify-end">
                                <Image src={derry} width={500} height={500} className="h-32 w-32 rounded-full border-2 border-indigo-500 object-cover" />
                            </div>
                            <div>
                                <p className="mt-2 text-gray-600 text-3xl font-Dancing">Derry Muliawan, S.T.</p>
                                <p className="mt-2 text-gray-600 text-2xl font-Dancing">Putra dari : Bapak H. Otong Junaedi (Alm) dan Ibu Hj. Susilawati (Alm).</p>
                            </div>
                        </div>
                        <div className="ml-0 my-20 max-w-full rounded-lg bg-pink-100 py-4 px-4 shadow-lg justify-center">
                            <div className="-mt-16 flex justify-center md:justify-end ">
                                <Image src={virginia} width={500} height={500} className="h-32 w-32 rounded-full border-2 border-indigo-500 object-cover" />
                            </div>
                            <div>
                                <p className="mt-2 text-gray-600 text-3xl font-Dancing">Virginia Sari, S.Pd.</p>
                                <p className="mt-2 text-gray-600 text-2xl font-Dancing">Putri dari : Bapak H. Mulyadi dan Ibu Hj. Siti Nurhayati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shadow-lg pb-5 pt-10 font-Dancing" id="date">
                <h1 className="text-center text-3xl">Yang akan digelar pada Tanggal:</h1>
                <p className="text-3xl font-bold pt-5 drop-shadow-md text-center">Akad: Sabtu, 06 Mei 2023 Pukul 08:00</p>
                <p className="text-3xl font-bold pt-5 drop-shadow-md text-center">Resepsi: Sabtu, 06 Mei 2023 pukul 10.00 WIB</p>
                <p className="text-2xl font-bold justify-center pt-10 text-center">Lokasi: Lingkungan Pesantren Darul Falah RT.01/05 Kel.Cijati Kec. Majalengka</p>
                <div className="container mx-auto content-center">
                    <div className="grid grid-rows-2 justify-center">
                        <div className='w-[400px] h-[200px] shadow-xl' id='map'>
                            <div ref={mapContainer} className="map-container" />
                        </div>
                        <div className='pt-5 text-blue-600 text-center'>
                            <a href="https://goo.gl/maps/w8GQ7efPsdtP3EY89" target="_blank">
                                <button className="btn btn-wide font-sans">Lihat di Google maps</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='max-w-full pt-10' id='date'>
                <div className="container justify-center">
                    <div className='hero-content content-center'>
                        <Image src={flower1} width={100} height={100} />
                        <div className='mx-auto'>
                            <p className="text-center ">Yang akan Digelar pada tanggal:</p>
                            <div className='grid md:grid'>
                                <div className='flex flex-col md:text-sm'>
                                    <p className="text-3xl font-bold pt-5 drop-shadow-md">Akad: Sabtu, 06 Mei 2023 Pukul 08:00</p>
                                    <p className="text-3xl font-bold pt-5 drop-shadow-md">Resepsi: Sabtu, 06 Mei 2023 pukul 10.00 WIB</p>
                                    <p className="text-2xl font-bold justify-center pt-10">Lokasi: Lingkungan Pesantren Darul Falah RT.01/05 Kel.Cijati Kec. Majalengka</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[400px] h-[200px] shadow-xl' id='map'>
                                <div ref={mapContainer} className="map-container" />
                            </div>
                            <div className='pt-5 text-blue-600 text-center'>
                                <a href="https://goo.gl/maps/w8GQ7efPsdtP3EY89" target="_blank">
                                    <button className="btn btn-wide">Lihat di Google maps</button>
                                </a>
                            </div>
                        </div>
                        <Image src={flower2} width={100} height={100} className="justify-end" />
                    </div>
                    <div class="container mx-auto pt-10">
                        <div className="flex gap-5 justify-center">
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                days
                            </div>
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 44 }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="gallery" className="shadow-md justify-center font-Dancing">
                <div className='hero-content flex flex-col mx-auto' id='gallery'>
                    <h1 className='text-5xl text-left'>Gallery</h1>
                </div>
                <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
            </section>
            <section id="footer" className="shadow-md pt-10">
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </section>
        </>
    );
}