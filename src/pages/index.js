import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"
import photos from "@/images/photos";
import slides from "@/images/slides";

//import images
import avatar from "../images/avatar.png";
import derry from "../images/avatar3.png"
import virginia from "../images/avatar2.png"

export default function Home() {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <Head>
                <title>Derry & Virginia | Home</title>
            </Head>
            <div className="hero min-h-screen shadow-lg">
                <div className="hero-overlay opacity-90">
                    <div className='opacity-100'>
                        <div className="bg-scroll bg-background bg-cover bg-center h-screen"></div>
                    </div>
                </div>
                <div className="card w-80 rounded-xl backdrop-blur-lg border-2" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
                    <figure>
                        <Image src={avatar} className="mask mask-squircle scale-75" width={500} height={500} alt="avatar" />
                    </figure>
                    <h1 className="text-center text-5xl font-Dancing">Derry & Virginia</h1>
                    <div className="card-body">
                        <p className="text-center font-Dancing text-3xl">Kepada Yth.</p>
                        <p className="text-center  font-Dancing text-xl">Mohon maaf apabila terdapat kesalahan nama / gelar</p>
                    </div>
                </div>
            </div>
            <section id="uhhh" className="shadow-lg">
                <div className="hero min-h-screen">
                    <div className="hero-overlay opacity-90">
                        <div className='opacity-100'>
                            <div className="bg-scroll bg-background2 bg-cover bg-center h-screen"></div>
                        </div>
                    </div>
                    <div className="flex h-full">
                        <div className="m-auto">
                            <div className="card max-h-[600px] max-w-md pt-5 rounded-xl backdrop-blur-md border-2 border-white lg:max-w-xl" data-aos="fade-right">
                                <p className="text-center flex px-10 font-Dancing drop-shadow-sm text-2xl lg:text-3xl">
                                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”</p>
                                <p className="text-center pt-5 text-xl font-Dancing pb-3">QS. Ar-Rum ayat 21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shadow-lg" id="mempelai">
                <div className="bg-scroll bg-background2 bg-cover bg-center h-screen">
                    <div className="flex h-full">
                        <div className="m-auto">
                            <div className="card max-w-md pt-5 rounded-xl backdrop-blur border-2 border-white" data-aos="fade-up-right">
                                <h1 className="text-center text-3xl font-Dancing pt-5">Kedua Mempelai</h1>
                                <p className="text-center text-m pt-5 pb-3 text-xl font-Dancing m-4">Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami:</p>
                                <div className="flex min-h-full">
                                    <div className="m-auto">
                                        <div className="grid grid-cols-2 justify-center gap-2">
                                            <div className="m-1 mr-0 my-20 max-w-full rounded-lg bg-blue-100 py-4 px-4 shadow-lg justify-center">
                                                <div className="-mt-16 flex justify-center md:justify-end">
                                                    <Image src={derry} width={500} height={500} className="h-32 w-32 rounded-full border-2 border-indigo-500 object-cover" alt="derry_photo" />
                                                </div>
                                                <div>
                                                    <p className="mt-2 text-gray-600 text-md text-center font-Pacifico">Derry Muliawan, S.T.</p>
                                                    <p className="mt-2 text-gray-600 text-xs font-Satisfy text-center pt-3">Putra dari : Bapak H. Otong Junaedi (Alm) dan Ibu Hj. Susilawati (Alm).</p>
                                                </div>
                                            </div>
                                            <div className="m-1 my-20 max-w-full rounded-lg bg-pink-100 py-4 px-4 shadow-lg justify-center">
                                                <div className="-mt-16 flex justify-center md:justify-end ">
                                                    <Image src={virginia} width={500} height={500} className="h-32 w-32 rounded-full border-2 border-indigo-500 object-cover" alt="virginia_photos" />
                                                </div>
                                                <div>
                                                    <p className="mt-2 text-gray-600 text-md text-center font-Pacifico">Virginia Sari, S.Pd.</p>
                                                    <p className="mt-2 text-gray-600 text-xs font-Satisfy text-center pt-3">Putri dari : Bapak H. Mulyadi dan Ibu Hj. Siti Nurhayati.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shadow-lg" id="date">
                <div className="bg-scroll bg-background2 bg-cover bg-center h-screen">
                    <div className="flex h-full">
                        <div className="m-auto">
                            <div className="card max-h-[600px] max-w-xs pt-5 rounded-xl backdrop-blur-xs border-white lg:max-w-xl" data-aos="fade-right">
                                <h1 className="font-Pacifico text-center text-2xl lg:text-3xl">yang akan digelar pada tanggal:</h1>
                                <p className="text-md font-Dancing pt-3 text-center lg:text-2xl">Akad: Sabtu, 06 Mei 2023 Pukul 08:00</p>
                                <p className="text-md font-Dancing text-center lg:text-2xl">Resepsi: Sabtu, 06 Mei 2023 pukul 10.00 WIB</p>
                                <p className="text-md font-Dancing justify-center pt-5 pb-10 text-center lg:text-2xl">Lokasi: Lingkungan Pesantren Darul Falah RT.01/05 Kel.Cijati Kec. Majalengka</p>
                            </div>
                            <div className='pt-20 text-blue-600 text-center' data-aos="fade-left">
                                <a href="https://goo.gl/maps/w8GQ7efPsdtP3EY89" target="_blank">
                                    <button className="btn btn-wide font-sans">Lihat di Google maps</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery">
                <div className="max-h-screen bg-background2">
                    <div className=" lg:flex-row" data-aos="zoom-in">
                        <div>
                            <h1 className="text-5xl font-Dancing text-center pt-5">Gallery</h1>
                            <PhotoAlbum
                                layout="columns"
                                photos={photos}
                                spacing={4}
                                padding={20}
                                targetRowHeight={32}
                                onClick={({ index }) => setIndex(index)}
                            />

                            <Lightbox
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                                slides={slides}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer" className="shadow-md">
                <footer className="footer footer-center p-4 bg-background h-screen bg-center">
                    <div className="grid grid-rows-2 gap-0 card min-w-xs rounded-xl backdrop-blur-lg m-5" data-aos="zoom-out">
                        <div className="">
                            <figure>
                                <Image src={avatar} className="mask mask-squircle scale-75" width={250} height={250} alt="avatar" />
                            </figure>
                        </div>
                        <div className="text-center text-5xl font-Dancing">Derry & Virginia</div>
                    </div>
                </footer>
            </section>
        </>
    );
}