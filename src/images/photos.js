const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const imgLink = (id) =>
  `https://imgur.com/${id}`;

const imgCollection = [
  {
    id: "e5x2Bbx.jpeg",
    width: 852,
    height: 859
  },
  {
    id: "0uJlYgW.jpeg",
    width: 1131,
    height: 864
  },
  {
    id: "CpGaKOX.jpeg",
    width: 700,
    height: 1200
  },
  {
    id: "USjeN4P.jpeg",
    width: 720,
    height: 720
  },
  {
    id: "qzMpbOy.jpeg",
    width: 700,
    height: 1200
  },
  {
    id: "xb4Z3Mr.jpeg",
    width: 1979,
    height: 3500
  }
];

const photos = imgCollection.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: imgLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: imgLink(photo.id, breakpoint, breakpointHeight),
        width: photo.width,
        height: photo.height
      };
    })
  };
});

export default photos;
