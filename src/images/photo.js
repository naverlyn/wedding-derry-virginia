const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const imgurLink = (id) =>
  `https://i.imgur.com/${id}`;

const unsplashPhotos = [
  {
    id: "EjQhyBG.jpg",
    width: 1080,
    height: 1620
  },
  
];

const photos = unsplashPhotos.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: imgurLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: imgurLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight
      };
    })
  };
});

export default photos;
