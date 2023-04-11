import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"
import dynamic from "next/dynamic";
import images from "../../src/images/photo.js";

//import images
import avatar from "../images/avatar.png";
import derry from "../images/1.jpg"
import virginia from "../images/virginia.jpeg"
import flower1 from "../images/shape-1.png"
import flower2 from "../images/shape-2.png"

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
                <div className="container mx-auto content-center">
                    <div className="grid grid-cols-2 justify-center gap-1">
                        <div className="m-4 mr-0 my-20 max-w-md rounded-lg bg-blue-100 py-4 px-8 shadow-lg justify-center md:gap-4">
                            <div className="-mt-16 flex justify-center md:justify-end">
                                <Image src={derry} width={500} height={500} className="h-32 w-32 rounded-full border-2 border-indigo-500 object-cover" />
                            </div>
                            <div>
                                <p className="mt-2 text-gray-600 text-xl">Derry Muliawan, S.T.</p>
                                <p className="mt-2 text-gray-600 text-m">Putra dari : Bapak H. Otong Junaedi (Alm) dan Ibu Hj. Susilawati (Alm).</p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <a href="https://www.facebook.com/derry.mulyawan" target="_blank"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000"></path> </g></svg></a>
                            </div>
                        </div>
                        <div className="ml-0 my-20 max-w-md rounded-lg bg-pink-100 py-4 px-8 shadow-lg justify-center md:gap-4">
                            <div className="-mt-16 flex justify-center md:justify-end ">
                                <Image src={virginia} width={500} height={500} className="h-32 w-32 rounded-full border-2 border-indigo-500 object-cover" />
                            </div>
                            <div>
                                <p className="mt-2 text-gray-600 text-xl">Virginia Sari, S.Pd.</p>
                                <p className="mt-2 text-gray-600 text-m">Putri dari : Bapak H. Mulyadi dan Ibu Hj. Siti Nurhayati.</p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <a href="https://www.facebook.com/derry.mulyawan" target="_blank"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000"></path> </g></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery">
                <div className='hero-content flex flex-col mx-auto' id='gallery'>
                    <h1 className='text-5xl text-left'>Gallery</h1>
                </div>
                <div className="hero-content flex flex-col mx-auto" id="gallery">
                    <PhotoAlbum
                        layout="grid"
                        photos={images}
                        targetRowHeight={150}
                        onClick={({ index }) => setIndex(index)}
                    />
                </div>
            </section>
            <section className='flex justify-center animate-fadeIn' id='date'>
                <div className='hero-content flex-col lg:flex-row justify-between w-full'>
                    <Image src={flower1} width={100} height={100} />
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
                    <Image src={flower2} width={100} height={100} />
                </div>
            </section>
            <section>
                asdsad
            </section>
        </>
    );
}