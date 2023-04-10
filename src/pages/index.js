import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"

//import images
import avatar from "../images/avatar.png";
import derry from "../images/1.jpg"
import virginia from "../images/virginia.jpeg"

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
            style: 'mapbox://styles/mapbox/outdoors-v12',
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
                <div className="hero-overlay bg-opacity-50">
                    <div className='overlay opacity-20'>
                        <Image src={"/images/bg.webp"} layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="card w-72">
                    <figure>
                        <Image src={avatar} className="mask mask-squircle scale-75" width={500} height={500} />
                    </figure>
                    <h1 className="text-center text-3xl">Derry & Virginia</h1>
                    <div className="card-body">
                        <p className="text-center">Kepada Yth.</p>
                        <p className="text-center">Mohon maaf apabila terdapat kesalahan nama/gelar</p>
                    </div>
                </div>
            </div>
            <section id="uhhh" className="hero-overlay shadow-lg">
                <div className="card-body flex flex-col">
                    <h1 className="text-center text-3xl pb-5 font-['Dancing_Script']">We found love</h1>
                    <p className="text-center flex px-10">
                        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”</p>
                    <p className="text-center pt-5">QS. Ar-Rum ayat 21</p>
                </div>
            </section>
            <section className="shadow-lg pb-5">
                <h1 className="text-center text-3xl">Kedua Mempelai</h1>
                <p className="text-center text-m pt-3 pb-3">Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami</p>
                <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10 mx-auto">
                    <div className="card w-96 bg-white shadow-2xl">
                        <figure>
                            <Image src={derry} className="mask mask-squircle scale-75" width={500} height={500} alt="derry_photo" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Derry Muliawan, S.T.</h2>
                            <p>Putra dari : Bapak H. Otong Junaedi (Alm) dan Ibu Hj. Susilawati (Alm).</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-white">
                        <figure>
                            <Image src={virginia} className="mask mask-squircle scale-75" width={500} height={500} alt="virginia_photo" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Virginia Sari, S.Pd.</h2>
                            <p>Putri dari : Bapak H. Mulyadi dan Ibu Hj. Siti Nurhayati.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery">
                <div className='hero-content flex flex-col mx-auto' id='gallery'>
                    <h1 className='text-5xl text-left'>Gallery</h1>
                </div>
                <div className="hero-content flex flex-col mx-auto" id="gallery">
                    asdsad
                </div>
            </section>
            <section className='flex justify-center animate-fadeIn' id='date'>
                <div className='hero-content flex-col lg:flex-row justify-between w-full'>
                    <Image src={"/images/shape-1.png"} width={100} height={100} />
                    <div className='mx-auto'>
                        <div className='grid md:grid'>
                            <div className='flex flex-col'>
                                <h1 className='text-4xl font-bold pt-5 mb-2 text-white drop-shadow-md'>Minggu</h1>
                                <p className='text-2xl text-white drop-shadow-md'>18 Maret 2024</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[400px] h-[200px] shadow-xl' id='map'>
                            <div ref={mapContainer} className="map-container" />
                        </div>
                        <div className='pt-5 text-blue-600 text-center'>
                            <a href="https://www.google.com" target="_blank">
                                <button className="btn btn-wide">Lihat di Google maps</button>
                            </a>
                        </div>
                    </div>
                    <Image src={"/images/shape-2.png"} width={100} height={100} />
                </div>
            </section>
            <section>
                asdsad
            </section>
        </>
    );
}